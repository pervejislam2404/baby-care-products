import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import UseAuth from "../../Shared/Context/UseAuth";
import { useLocation, useHistory, Link } from "react-router-dom";
import loginBg from './login-bg.svg';
import google from './google.png';

const Login = () => {
  const { loginWithGoogle, logInWithEmailAndPassword,error } = UseAuth();
  const { register, handleSubmit } = useForm();
  
    const location = useLocation();
    const history = useHistory();
 


  const onSubmit = (data) => {
    logInWithEmailAndPassword(data?.email,data.password,location,history);
  };

  const handleGoogleSign = () => {
    loginWithGoogle(location, history);
  };

  return (
    <div>
      <div className="container p-5">
        <div className="row">

            {/* login-form */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <form className="gap-2 px-3" onSubmit={handleSubmit(onSubmit)}>
              
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
              
              <Button variant="warning" className="px-5 fs-5 border-0 w-100" type="submit" >Login</Button>
              <div className="text-center p-3">
                
              <h5 className="text-danger">{error}</h5>
              <h4>-----------or------------</h4>
             <div className="d-flex justify-content-center bg-light">              
                  <Button className="fs-5 fw-bold" onClick={handleGoogleSign} variant="none">
                  <img height="40" width="40" src={google} alt="" />
                    google</Button>
             </div>
                  <Link className="text-decoration-none fw-bold fs-5 text-danger" to="/register">Don't have account?<span className="text-primary"> Register</span></Link>
              </div>
            </form>
          </div>


          <div className="col-12 col-lg-6">
            <img className="img-fluid p-3" src={loginBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
