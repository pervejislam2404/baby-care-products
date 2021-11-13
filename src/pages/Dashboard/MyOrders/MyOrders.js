import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UseAuth from '../../Shared/Context/UseAuth';
import { Card, Button, Spinner } from 'react-bootstrap';
import  swal from 'sweetalert';

const MyOrders = () => {
const [products,setProducts] = useState();
const [loader,setLoader] = useState(true);
const {token} = UseAuth() 


const {user} = UseAuth();

    useEffect(() =>{
        axios(`https://secure-sierra-71840.herokuapp.com/userOrders/${user?.email}`)
        .then(res=>{
            setLoader(false)
           setProducts(res.data);
        })
    },[user?.email]);

    const handleDelete = (id) => {
        swal({
            title: "Are you sure to delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://secure-sierra-71840.herokuapp.com/deleteOrder/${id}`,{
                  headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                  }
                })
                .then(res=>{
                    if(res?.data?.deletedCount){
                        swal("Product has been deleted!", {
                            icon: "success",
                          });
                          const filter = products.filter(product =>product._id !== id);
                          setProducts(filter)
                    }
                })             
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    return (
        <div>
            <div className="container">
                {loader && <div className="text-center p-5">
                   <Spinner animation="border" />
                </div>}

                {/* empty-product-status */}
               {!products?.length && <div className="d-flex justify-content-center align-items-center p-5">
                    <h3 className="p-2 bg-danger rounded text-white">Nothing...</h3>
                 </div>}


                <div className="row g-4 p-2">
                    {products?.map((product,index) =>{return(
                        <div key={index} className="col-12 col-lg-4">
                        <Card className="bg-info p-2">
                          <Card.Img height="220" variant="top" src={product?.img} />
                          <Card.Body>
                            <Card.Title>{product?.title}</Card.Title>                           
                            <Card.Title className="text-danger fw-bold">{product?.price}</Card.Title>   


                            <div className="d-flex flex-column justify-content-between align-items-start py-3">
                                  <Button variant={product?.status === 'shipped'? 'success':'danger'} className="text-white fw-bold px-3 border-0">{product?.status}</Button> <br/>
                                  <Button 
                                  className="text-dark fw-bold px-3 border-0" 
                                  onClick={()=>handleDelete(product?._id)} 
                                  variant="warning"
                                  >
                                      <i 
                                      className="fas fa-trash-alt pe-2"
                                      >
                                      </i>Delete
                                  </Button>
                            </div>

                          </Card.Body>
                        </Card>
                      </div>
                    )})}
                </div>

            </div>
        </div>
    );
};

export default MyOrders;