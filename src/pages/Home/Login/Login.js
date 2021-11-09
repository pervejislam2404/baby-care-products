import React from "react";
import './Login.css'
import { useForm } from "react-hook-form";
import loginBg from "./login-bg.jpg";
import { Button } from 'react-bootstrap';

const loginStyle = {
  background: `url(${loginBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
//   height: "80vh",
};

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={loginStyle}>
      <div className="container justify-content-center align-items-center container p-5">
        <div className="py-5 form-container">
          <form className="d-flex flex-column justify-content-center align-items-center py-5 gap-2" onSubmit={handleSubmit(onSubmit)}>
            <input
            className="w-50 p-2 border-0"
              {...register("email", { required: true })}
              placeholder="Email"
            />

            <input 
            className="w-50 p-2 border-0"
            type="password" 
            {...register("password", { required: true })} 
            placeholder="password"
            />
            {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
            <input 
            className="w-50 bg-warning p-2 border-0"
            type="submit" 
            />
          </form>
          <div className="text-center">
              <h4>-----------or------------</h4>
              <Button variant="primary">google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
