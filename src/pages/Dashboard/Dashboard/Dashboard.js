import React from "react";
import {  
  Switch,
  Route,
  Link, 
  useRouteMatch,
} from "react-router-dom";

import UseAuth from '../../Shared/Context/UseAuth';
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import Review from '../Review/Review';
import ManageProducts from "../ManageProducts/ManageProducts";






const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {admin} = UseAuth();
  return (
    <div>
      <div className="container">
        <div className="row my-4">
          <div className="col-12 col-lg-3">
            <ul className="list-group border-0">

              <li className="list-group-item border-0 fs-5" aria-current="true">                  
                 <Link className="text-decoration-none text-secondary" to={`${url}`}>My Orders</Link>
              </li>

              <li className="list-group-item border-0 fs-5">                 
                 <Link className="text-decoration-none text-secondary" to={`${url}/payment`}>Payment</Link>
              </li>

             <li className="list-group-item border-0 fs-5">                
                 <Link className="text-decoration-none text-secondary" to={`${url}/makeAdmin`}>Make Admin</Link>
              </li>

              <li className="list-group-item border-0 fs-5">
                  
                  <Link className="text-decoration-none text-secondary" to={`${url}/manageAllOrders`}>Manage Services</Link>
              </li>
              

              <li className="list-group-item border-0 fs-5">                  
                  <Link className="text-decoration-none text-secondary" to={`${url}/review`}>Review</Link>
              </li>

              <li className="list-group-item border-0 fs-5">                  
                  <Link className="text-decoration-none text-secondary" to={`${url}/manageProducts`}>Manage Products</Link>
              </li>

             
            </ul>
          </div>
          <div style={{backgroundColor:'#F9F9F9'}} className="col-12 col-lg-9">
            <Switch>
              <Route exact path={path}>
                 <MyOrders/>
              </Route>
            
              <Route path={`${path}/payment`}>
                 <Payment/>
              </Route>

              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin/>
              </Route>

              <Route path={`${path}/manageAllOrders`}>
                <ManageAllOrders/>
              </Route>

              <Route path={`${path}/review`}>
                <Review/>
              </Route>

              <Route path={`${path}/manageProducts`}>
                <ManageProducts/>
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
