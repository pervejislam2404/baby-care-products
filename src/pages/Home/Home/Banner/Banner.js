import React from 'react';
import banner from './banner2.jpg';
import babyOne from './baby-one.png';
import {useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './Banner.css'

const bannerStyle= {
    background: `url(${banner}) rgba(16, 23, 16 ,.8)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat!important',
    width: '100vw',
   
}

const Banner = () => {
    const history = useHistory()

    const handleMore= () => {
        history.push('/moreProducts')
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={bannerStyle}>
           <div className="container text-white">
               <div className="row ">

                   <div className="col-12 p-4 col-lg-6 text-danger fw-bolder d-flex justify-content-center align-items-start flex-column">
                     <h1 className="banner-text"><span className="text-primary">Get  50%</span> Off Baby Products</h1>
                     <Button variant="danger" onClick={handleMore} className="text-white fs-4 px-3 mt-3">explore more</Button>  
                   </div>

                   <div className="col-12 col-lg-6 text-center">
                       <img className="img-fluid img-responsive" src={babyOne} alt="" />
                   </div>
                   
               </div>
           </div>
        </div>
    );
};

export default Banner;