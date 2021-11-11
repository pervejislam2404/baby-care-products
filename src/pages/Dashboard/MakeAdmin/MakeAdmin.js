import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
      console.log(data)
    axios.put(`https://fast-mesa-22453.herokuapp.com/makeAdmin/${data.email}`)
    .then(res=> {
        if(res?.data?.modifiedCount){
           
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
              });
        }else{
            swal({
                title: "Failed!",
                text: "Please make the user loged in!",
                icon: "error",
              });
        }
    })
  };
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center p-5">

        {/* adding-admin-with-email-address */}

        <form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="bg-light p-2 fs-6 border-0 bg-white my-3 shadow"
            type="email"           
            {...register("email", { required: true })}
            placeholder="Make Admin with Email"
          />         
          <input className="bg-warning p-1 fs-6 border-0" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
