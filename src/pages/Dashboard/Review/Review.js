import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import UseAuth from '../../Shared/Context/UseAuth';
import axios from 'axios';
import swal from 'sweetalert';

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user} = UseAuth();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://fast-mesa-22453.herokuapp.com/saveReview',data)
        .then(res=>{
           if(res?.data?.insertedId){
            swal("Review has been added!", {
                icon: "success",
              });
              reset()
           }
        })
    }



    return (
        <div>
            <div className="container py-4">
            <div className="d-flex flex-column justify-content-center align-items-center bg-white p-4">

                {/* taking-user-review */}

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center text-danger fw-bold">
                        <h3 className="fw-bold">Give Review</h3>
                    </div>    
    
                    <input
                      style={{background:'rgb(238 238 238)'}}
                      className="p-3 fs-5 border-0 my-3 rounded"
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Name"
                      defaultValue={user?.displayName}
                    />
    
                  <input
                    style={{background:'rgb(238 238 238)'}}
                    className="text-dark p-3 fs-5 border-0 rounded"                 
                    {...register("img", { required: true })}
                    placeholder="Photo link"
                    defaultValue={user?.photoURL}
                  />

                  <input
                    style={{background:'rgb(238 238 238)'}}
                    className="p-3 fs-5 border-0 my-3 rounded"
                    type="number"
                    {...register("ratting", { required: true,min: 0, max: 5 })}
                    placeholder="Give ratting out of 5"
                  />
             
    
                  <textarea 
                    style={{background:'rgb(238 238 238)'}}
                    className="p-3 w-100 fs-5 border-0 mb-3 rounded"
                    rows="5"
                    {...register("description", { required: true })}
                    placeholder="Description"
                  />
    
                  <div className="text-center">
                    <Button 
                      variant="warning" 
                      className="bg-warning p-2 px-4 fs-5 border-0" 
                      type="submit">
                      Review
                    </Button>
                  </div>
                  
                </form>
              </div>
            </div>
        </div>
    );
};

export default Review;