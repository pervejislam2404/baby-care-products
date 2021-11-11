import React from "react";
import "./Register.css";
import {Link,useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import registerBg from "./register-bg.svg";
import UseAuth from "../../Shared/Context/UseAuth";
import { Button } from 'react-bootstrap';

const registerStyle = {
  backgroundColor: "#F8F8F8",
};



const Register = () => {
    const {error,makeUserWithEmailPass} = UseAuth();
    const history = useHistory();




  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      const fullName= data.firstName+" "+ data.lastName;
      makeUserWithEmailPass(data.email,data.password,fullName,history);
  };



  return (
    <div className="py-5 px-2" style={registerStyle}>
      <div className="container mx-auto bg-white p-5 rounded">
        <div className="row">
          <div className="col-12 col-lg-6 p-2">
            <img className="img-fluid" src={registerBg} alt="" />
          </div>
          
           {/* user-registration-form */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <form className="gap-2 px-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="bg-light p-3 fs-5 border-0" 
                {...register("firstName", { required: true })}
                placeholder="First Name"
              />

              <input
                className="bg-light p-3 fs-5 border-0 my-3"
                {...register("lastName", { required: true })}
                placeholder="Last Name"
              />

              <input
                className="bg-light p-3 fs-5 border-0"
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
              />

              <input
                className="bg-light p-3 fs-5 border-0 my-3"
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
              />
              {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
              <Button variant="warning" className="p-2 w-100 px-5 fs-5 border-0" type="submit">Register</Button>
              <div className="text-center p-3">
                  <h5 className="text-danger">{error}</h5>
                  <Link className="text-decoration-none fw-bold fs-5 text-danger" to="/login">Do you have account?<span className="text-primary"> Login</span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
