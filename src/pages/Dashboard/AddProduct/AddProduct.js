import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };


    return (
        <div>
            <div className="container p-4 rounded">
            <div className="d-flex flex-column justify-content-center align-items-center bg-white p-4">
                
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center text-danger fw-bold">
                    <h3 className="fw-bold">Add A Service</h3>
                </div>


                <input
                style={{background:'rgb(238 238 238)'}}
                className="p-3 fs-5 border-0 my-3 rounded"
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
                />

              <input
              style={{background:'rgb(238 238 238)'}}
                className="text-white p-3 fs-5 border-0 rounded"                 
                {...register("img", { required: true })}
                placeholder="Photo link"
                
              />
              
              
               <input
               style={{background:'rgb(238 238 238)'}}
                className="p-3 fs-5 border-0 my-3 rounded"
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
              />

              <textarea 
              style={{background:'rgb(238 238 238)'}}
              className="p-3 w-100 fs-5 border-0 mb-3 rounded"
              rows="5"
              {...register("description", { required: true })}
              placeholder="Description"
              />

              <div className="text-center">
              <Button variant="warning" className="bg-warning p-2 px-4 fs-5 border-0" type="submit">Add Product</Button>
              </div>
              
            </form>
          </div>
            </div>
        </div>
    );
};

export default AddProduct;