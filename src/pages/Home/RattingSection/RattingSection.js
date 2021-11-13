import React, { useEffect, useState } from "react";
import "./RattingSection.css";
import Rating from "react-rating";
import axios from "axios";
import { Card, Spinner } from 'react-bootstrap';
import UseAuth from '../../Shared/Context/UseAuth';

const RattingSection = () => {
  const [review, setReview] = useState([]);
  const [loader,setLoader] = useState(true);
  const {token} = UseAuth()

  useEffect(() => {
    axios('https://secure-sierra-71840.herokuapp.com/getAllReview',{
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
    .then((res) => {
      setLoader(false)
      setReview(res.data);
    });
  }, [token]);

 
  return (
    <div className="bg-light">

      <div className="container py-5">
          <div className="text-center fw-bold text-danger p-5">
              <h1>User Review</h1>
          {loader && <Spinner animation="grow" />}
          </div>
        <div className="row g-4">

          {/* showing-all-user-review */}
          {review?.map((review, index) => {
            return (
              <div key={index} className="col-lg-3 col-12">
                <Card className="border-0 rounded">

                  <Card.Body className="p-3 cart">
                    <div className="d-flex justify-content-start align-items-center">
                      <img className="rounded-pill me-2" height="60" width="60" src={review?.img} alt="" />
                      <Card.Title>{review?.name}</Card.Title>
                    </div>

                    <div className="py-3">
                      <Rating
                        emptySymbol="far custom-color fa-star"
                        fullSymbol="fas custom-color fa-star"
                        initialRating={review?.ratting}
                        readonly
                      />
                    </div>

                    <Card.Text>{review?.description}</Card.Text>
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

export default RattingSection;
