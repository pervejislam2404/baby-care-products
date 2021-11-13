import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import UseAuth from '../../Shared/Context/UseAuth';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loader,setLoader] = useState(true);
  const [pageRender,setPageRender] = useState(0);
  const {token} = UseAuth()


  useEffect(() => {    
    axios(`https://secure-sierra-71840.herokuapp.com/getAllOrders`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    }
    )
    .then((res) => {
      setLoader(false);
      setAllOrders(res?.data);
    })
  },[pageRender,token]);

  const handleDelete = (id) => {
    swal({
        title: "Are you sure to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            fetch(`https://secure-sierra-71840.herokuapp.com/deleteOrder/${id}`,{
                method: "DELETE",
                headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                }
            })
            .then(res=>{
               console.log(res.statusText);
                if(res?.statusText==='OK'){
                    swal("Product has been deleted!", {
                        icon: "success",
                      });
                      const filter = allOrders.filter(pd =>pd._id !== id);
                      setAllOrders(filter)
                }
            })             
        } else {
          swal("Your imaginary file is safe!");
        }
      });      
}

const handleStatus = id => {
    fetch(`https://secure-sierra-71840.herokuapp.com/setStatus/${id}`,{
        method: 'PUT',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    })
    .then(data=> data.json())
    .then(res => {
       if(res?.modifiedCount){
            swal({
                title: "Product has been approved!",
                icon: "success",
              });
              setPageRender(Math.floor(Math.random()*20))
        }
    })
}
  return (
    <div>
      <div className="container py-3 overflow-scroll">

        {/* spinner */}
      {loader && <div className="text-center p-5">
                    <Spinner animation="grow" variant="info" />
                </div>}


          
        {!allOrders?.length && <div className="d-flex justify-content-center align-items-center p-5">
                    <h3 className="p-2 bg-danger rounded text-white">Nothing...</h3>
                 </div>}


        {/* handle-all-ordered-products */}
                 
        <Table striped bordered hover>
         {allOrders?.length && <thead>
            <tr className="text-center">
              <th>Index</th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>User Phone</th>
              <th>User Address</th>
              <th>Price</th>
              <th>Action</th>
              <th>Manage Status</th>
            </tr>
          </thead>}


          {/* ordered-product-information */}
          <tbody>
            {allOrders?.map((product,index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{product?.title}</td>
                  <td>{product?.email}</td>
                  <td>{product?.phone}</td>
                  <td>{product?.address}</td>
                  <td>{product?.price}</td>
                  <td>
                    <Button 
                      onClick={()=>handleDelete(product._id)} 
                      variant="danger"
                      >
                        <i className="fas fa-trash-alt pe-2"></i>
                        Delete
                    </Button>
                  </td>

                  <td>
                    <Button 
                      onClick={()=>handleStatus(product._id)} 
                      variant={product?.status=== 'shipped'? 'info':'warning'}
                      >
                        {product?.status}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
