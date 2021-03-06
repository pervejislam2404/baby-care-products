import React from 'react';
import error from './error.png'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const notFoundStyle= {
    background: `url(${error})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh'
}


const NotFound = () => {
    const history = useHistory() 


    const handleRedirect= () => {
        history.push('/home')
    }
    
    return (
        <div style={notFoundStyle} className="d-flex justify-content-center align-items-center">
            <Button onClick={handleRedirect} variant="danger">Go Back Home</Button>
        </div>
    );
};

export default NotFound;