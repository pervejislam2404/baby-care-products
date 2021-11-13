import React, { useEffect, useState } from "react";
import './MoreProducts.css'
import axios from "axios";
import { Card, Spinner, Button } from 'react-bootstrap';
import { useHistory } from "react-router";
import Rating from "react-rating";

const MoreProducts = () => {
  const [allProducts, setAllProducts] = useState([]); 
  const [loader,setLoader] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios("https://secure-sierra-71840.herokuapp.com/getAllProducts").then((res) => {
        setLoader(false)
      setAllProducts(res.data);
    });
  }, []);

  const handleBuy = (id) => {
    history.push(`/details/${id}`)
  }


// rest-products-details
  return (
    <div className="mt-4" style={{backgroundColor:'#EEEEEE'}}>
      <div className="container">
        <div className="container mx-auto">
          <div className="row py-5 g-4">
            {loader && (
              <div className="mx-auto w-50 text-center p-5">
                <Spinner className="m-5" animation="border" />
              </div>
            )}
            {allProducts.map((product, index) => {
              return (
                <div key={index} className="col-12 col-lg-3">

                  <Card className="bg-white p-2 border-0 cart">
                    <Card.Img height="220" variant="top" src={product?.img} />

                    <Card.Body>
                      <Card.Title className="text-dark fw-bold">{product?.title}</Card.Title>
                      <Card.Text className="text-dark">{product?.description.slice(0,40)} ...</Card.Text>

                      <div className="py-2">
                        <Rating
                            emptySymbol="far custom-color fa-star"
                            fullSymbol="fas custom-color fa-star"
                          />
                       </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <Button className="text-white fw-bold px-5 border-0">
                          {product?.price}
                        </Button>{" "}
                        <br />

                        <Button
                          className="text-dark fw-bold px-5 border-0"
                          onClick={() => handleBuy(product?._id)}
                          variant="warning"
                        >
                          <i className="fas fa-cart-plus text-primary fs-5"></i>                        
                        </Button>

                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
