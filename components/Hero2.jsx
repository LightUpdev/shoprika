import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container">
      <div className="row my-5 py-3">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Image src="/2.png" alt="hero" width={400} height={400} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="content my-5">
            <h3 className="fw-bold">Unlock your online sucess with Shoprika</h3>
            <p className="my-3">
              With our comprehensive platform, setting up and running an online
              store has never been easier. Our intuitive interface and
              user-friendly tools empower small businesses and suppliers to
              establish a strong online presence and reach a wider customer
              base. From seamless product listings to secure payment processing,
              our solution provides everything you need to start selling online
              with confidence. Take advantage of our robust features and
              dedicated support to elevate your online store and drive
              remarkable success. Join the digital revolution today and
              experience the endless possibilities of e-commerce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
