import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import UseAuth from '../Context/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = UseAuth()
    if(isLoading){
        return <div className="w-50 mx-auto text-center p-5"> <Spinner className="mx-auto" animation="border" /></div>
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user?.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;