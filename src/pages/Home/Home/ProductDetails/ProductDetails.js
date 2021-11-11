import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import UseAuth from '../../../Shared/Context/UseAuth';
import swal from 'sweetalert';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const {user} = UseAuth()

  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    delete data._id
    data.status='pending'
    console.log(data)
    axios.post('https://fast-mesa-22453.herokuapp.com/saveOrder',data)
    .then(res => {
      if(res?.data?.insertedId){        
        swal({
          title: "purchase successful!",
          // text: "Regis ter successful!",
          icon: "success",
        });
      }
    })
  };

  useEffect(() => {
    axios(`https://fast-mesa-22453.herokuapp.com/singleProduct/${id}`).then((res) =>{
      setProduct(res.data);
      reset(res.data);}
    );
  }, [id,reset]);
  return (
    <div>
      <div className="container bg-light">
        <div className="row">
          <div className="col-12 col-lg-6 p-5">
            <Card className="bg-info p-3">
              <Card.Img height="350" variant="top" src={product?.img} />
              <Card.Body className="">
                <Card.Title className="fs-4 text-danger">{product?.title}</Card.Title>
                <Card.Title>{product?.price}</Card.Title>
                <Card.Text className="fs-5 text-muted">
                 {product?.description}
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>


          <div className="col-12 col-lg-6 p-5">
          <div className="d-flex flex-column justify-content-center align-items-center bg-white p-4">
            <form className="gap-0" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="bg-light p-3 fs-5 border-0 shadow rounded" 
                defaultValue={user?.displayName}
                {...register("fullName", { required: true })}
                placeholder="Name"
                
              />

              <input
                className="bg-light p-3 fs-5 border-0 my-3 shadow rounded"
                {...register("address", { required: true })}
                placeholder="Address"
               
              />

              <input
                className="bg-light p-3 fs-5 border-0 mb-3 shadow rounded"
                defaultValue={user?.email}
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"                
              />

              <input
                className="bg-light p-3 fs-5 border-0 my-3 shadow rounded"
                defaultValue={product?.title}
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
              />

              <input
                className="bg-light p-3 fs-5 border-0 my-3 shadow rounded"                
                type="text"
                {...register("phone", { required: true })}
                placeholder="Phone"
              />

               <input
                className="bg-light p-3 fs-5 border-0 my-3 shadow rounded"
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
              />

              <textarea 
              className="bg-light p-3 w-100 fs-5 border-0 mb-3 shadow rounded"
              rows="5"
              {...register("description", { required: true })}
              defaultValue={product?.description}
              placeholder="Description"
              />

              <div className="text-center">
              <Button variant="warning" className="bg-warning p-2 px-4 fs-5 border-0" type="submit"><i className="fas fa-shopping-cart pe-2"></i>Purchase</Button>
              </div>
              
            </form>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
