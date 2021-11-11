import React from "react";

const Facilities = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container row mx-auto g-3 py-5">

          <div className="col-lg-4 col-12">
            <div
              style={{ backgroundColor: "#aa567d" }}
              className="text-center text-white p-4 rounded"
            >
              <i
                style={{ fontSize: "4rem" }}
                class="fas fa-shipping-fast text-white py-2"
              >                
              </i>
              <h2>Free Shipping</h2>
              <p>start from 100$</p>
            </div>
          </div>


          <div className="col-lg-4 col-12">
            <div
              style={{ backgroundColor: "#aa567d" }}
              className="text-center text-white p-4 rounded"
            >
              <i
                style={{ fontSize: "4rem" }}
                class="fas fa-wallet text-white py-2"
              ></i>
              <h2>Money Back Guaranty</h2>
              <p>back withing 20 days</p>
            </div>
          </div>


          <div className="col-lg-4 col-12">
            <div
              style={{ backgroundColor: "#aa567d" }}
              className="text-center text-white p-4 rounded"
            >
              <i
                style={{ fontSize: "4rem" }}
                class="fas fa-shield-alt text-white py-2"
              ></i>

              <h2>Secure Payment</h2>
              <p>payment security</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Facilities;
