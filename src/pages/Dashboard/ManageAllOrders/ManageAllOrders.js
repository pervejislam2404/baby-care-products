import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loader,setLoader] = useState(true);
  const [pageRender,setPageRender] = useState(false);

  useEffect(() => {
    axios("https://fast-mesa-22453.herokuapp.com/getAllOrders").then((response) => {
        setLoader(false);
      setAllOrders(response?.data);
    })
  },[pageRender]);

  const handleDelete = (id) => {
    swal({
        title: "Are you sure to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`https://fast-mesa-22453.herokuapp.com/deleteOrder/${id}`)
            .then(res=>{
                console.log(res.data);
                if(res?.data?.deletedCount){
                    swal("Product has been deleted!", {
                        icon: "success",
                      });
                      const filter = allOrders.filter(product =>product._id !== id);
                      setAllOrders(filter)
                }
            })             
        } else {
          swal("Your imaginary file is safe!");
        }
      });      
}

const handleStatus = id => {
    axios.put(`https://fast-mesa-22453.herokuapp.com/setStatus/${id}`)
    .then(res => {
       if(res?.data?.modifiedCount){
            swal({
                title: "Product has been approved!",
                icon: "success",
              });
              setPageRender(true)
        }
    })
}
  return (
    <div>
      <div className="container py-3">
      {loader && <div className="text-center p-5">
                    <Spinner animation="grow" variant="info" />
                </div>}
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Index</th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>User Address</th>
              <th>Price</th>
              <th>Action</th>
              <th>Status</th>
              
            </tr>
          </thead>

          <tbody>
            {allOrders.map((product,index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{index}</td>
                  <td>{product?.title}</td>
                  <td>{product?.email}</td>
                  <td>{product?.address}</td>
                  <td>{product?.price}</td>
                  <td><Button onClick={()=>handleDelete(product._id)} variant="danger">Delete</Button></td>
                  <td><Button onClick={()=>handleStatus(product._id)} variant={product?.status=== 'shipped'? 'info':'warning'}>{product?.status}</Button></td>
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
