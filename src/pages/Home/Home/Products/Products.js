import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Spinner } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader,setLoader] = useState(true)

  useEffect(() => {
    axios("http://localhost:5000/products").then((res) => {
        setLoader(false)
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <div className="row py-5 g-3">
           {loader && <div className="mx-auto w-50 text-center p-5">
               <Spinner className="m-5" animation="border" />
            </div>}
          {products.map((product) => {
            return (
              <div className="col-12 col-lg-3">
                <Card>
                  <Card.Img height="220" variant="top" src={product?.img} />
                  <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                     {product?.description}
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
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
