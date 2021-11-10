import React from 'react';
import banner from './banner.jpg';
import {useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const bannerStyle= {
    background: `url(${banner}) rgba(13, 15, 12,0.7)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat!important',
    width: '100vw',
    height: '70vh',
}


const Banner = () => {
    const history = useHistory()

    const handleMore= () => {
        history.push('/moreProducts')
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={bannerStyle}>
           <div className="container border text-white">
              <Button onClick={handleMore} className="">explore more</Button>
           </div>
        </div>
    );
};

export default Banner;