import React from 'react';
import RattingSection from '../RattingSection/RattingSection';
import Banner from './Banner/Banner';
import Products from './Products/Products';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <RattingSection/>
        </div>
    );
};

export default Home;