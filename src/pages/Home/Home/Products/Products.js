import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import './Products.css'
import axios from "axios";
import { Card, Button, Spinner } from 'react-bootstrap';
import { useHistory } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader,setLoader] = useState(true);
  const history = useHistory()

  useEffect(() => {
    axios("https://secure-sierra-71840.herokuapp.com/products").then((res) => {
        setLoader(false)
      setProducts(res.data);
    });
  }, []);


  const handleBuy = (id) => {
    history.push(`/details/${id}`)
  }
  return (
    <div style={{backgroundColor:'#EEEEEE'}}>

      {/* all-products-detail */}
      
      <div className="container mx-auto">
        <div className="row py-5 g-4">
           {loader && <div className="mx-auto w-50 text-center p-5">
               <Spinner className="m-5" animation="border" />
            </div>}
          {products.map((product,index) => {
            return (
              <div key={index} className="col-12 col-lg-3">
                <Card className="bg-white p-2 border-0 cart">
                  <Card.Img height="220" variant="top" src={product?.img} />

                  <Card.Body className="border-0">
                    <Card.Title className="fw-bold text-danger">{product?.title}</Card.Title>
                   <Card.Text className="text-muted">{product?.description.slice(0,40)} ...</Card.Text>

                   <div className="py-2">
                      <Rating
                          emptySymbol="far custom-color fa-star"
                          fullSymbol="fas custom-color fa-star"
                        />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                          <Button className="text-white fw-bold px-5 border-0">{product?.price}</Button> <br/>
                          <Button className="text-dark fw-bold px-5 border-0" onClick={()=>handleBuy(product?._id)} variant="warning"><i className="fas fa-cart-plus text-primary fs-5"/></Button>
                    </div>
                    
                  </Card.Body>

                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
