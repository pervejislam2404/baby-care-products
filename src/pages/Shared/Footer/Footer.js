import React from "react";
import { ListGroup } from "react-bootstrap";

const footerStyle = {
  backgroundColor: "#FF0075",
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div className="container mx-auto">
        <div className="row py-5">

          <div className="col-12 col-lg-3 text-left">
            <ListGroup
              style={footerStyle}
              className="border-0 bg-none text-light"
            >
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-4 fw-bold text-dark"
              >
               Contact us
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                <i class="fas fa-map-marker-alt pe-2"></i>
               1203 Town Center Drive FL 33458
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                <i class="fas fa-map-marker-alt pe-2"></i>
                USA
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                <i class="fas fa-phone-square-alt pe-2"></i>
               +841 123 456 78
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                <i class="fas fa-envelope pe-2"></i>
               info@lindashop.com
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div className="col-12 col-lg-3 text-center">
          <ListGroup
              style={footerStyle}
              className="border-0 bg-none text-light"
            >
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-4 fw-bold text-dark"
              >
                Help
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Search
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Help
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
               Information
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
               Shipping Details
              </ListGroup.Item>
              
            </ListGroup>
          </div>



          <div className="col-12 col-lg-3 text-center">
          <ListGroup
              style={footerStyle}
              className="border-0 bg-none text-light"
            >
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-4 fw-bold text-dark"
              >
                Support
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Contact Us
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                About Us
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Careers
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Refund & Returns
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
               Deliveries
              </ListGroup.Item>
              
            </ListGroup>
          </div>



          <div className="col-12 col-lg-3 text-center">
          <ListGroup
              style={footerStyle}
              className="border-0 bg-none text-light"
            >
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-4 fw-bold text-dark"
              >
                Information
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Search team
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Advanced search
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
               Help and FAQ
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Store Location
              </ListGroup.Item>
              <ListGroup.Item
                style={footerStyle}
                className="border-0 fs-5 text-light"
              >
                Orders & Returns
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
