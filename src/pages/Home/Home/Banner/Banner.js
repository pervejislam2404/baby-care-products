import React from 'react';
import banner from './banner.jpg';

const bannerStyle= {
    background: `url(${banner}) rgba(255,255,205,0.6)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '70vh',
}

const Banner = () => {
    return (
        <div style={bannerStyle}>
           <h1>something</h1>
        </div>
    );
};

export default Banner;