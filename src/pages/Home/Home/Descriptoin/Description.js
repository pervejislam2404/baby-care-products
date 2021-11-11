import React from 'react';
import descriptionBg from './descriptonBanner.jpg'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Description.css'

const Description = () => {

    const history = useHistory()

    const handleExplore= ()=>{
         history.push('/moreProducts')
    }

    return (
        <div>

            {/* little-description */}
            <div className="row">

                <div className="col-lg-6 col-12 p-0">
                     <img width="100%" src={descriptionBg} alt="" />
                </div>


                <div style={{backgroundColor:'#161E54'}} className="col-lg-6 col-12 p-0 d-flex flex-column justify-content-center align-items-center p-5">
                     <div 
                        className="d-flex text-center flex-column justify-content-center align-items-center text-white px-5"
                     >
                            <h5>TESTED FOR MINDLESS</h5>
                            <h1 className="des-text">Your Baby Deserve The Best Care</h1>
                            <p className="fs-5 text-light">For infants, the attachment contributes to their emotional growth, which also affects their development in other areas, such as physical growth. Another way to think of bonding is "falling in love" with your baby. Children thrive from having a parent or other adult in their life</p>
                            <Button onClick={handleExplore} variant="danger" className="fs-3 px-5 rounded">explore more</Button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Description;