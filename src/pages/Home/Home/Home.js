import React from 'react';
import RattingSection from '../RattingSection/RattingSection';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Facilities from './Facilities/Facilities';
import Description from './Descriptoin/Description';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <RattingSection/>
            <Facilities/>
            <Description/>
        </div>
    );
};

export default Home;