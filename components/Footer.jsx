import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="container-fluid footer pt-5 mt-5">
      <div className="container text-white">
        <div className="row d-flex">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <h3>Shopriqa</h3>
            <p className="my-5">
              Reach a wider audience and boost your sales with our user-friendly
              online store platform
            </p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 contact-us">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>+2349084899099</p>
              <div className="social-media">
                <ul>
                  <li>
                    <a href="/instagram">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="/twitter">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/facebook">
                      <BsFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 mb-0 pb-0">
          © {year} Shoprika. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
