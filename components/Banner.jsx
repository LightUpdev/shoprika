import React from "react";

const Banner = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 align-items-sm-center align-items-md-center">
          <h1>
            Launch your
            <span className="font-color fw-bolder mx-2">
              online <br /> store
            </span>
            with ease
          </h1>
          <div className="text w-75 my-4">
            <p className="fw-bold" style={{ flexWrap: "nowrap" }}>
              Reach a wider audience and boost your sales with our user-friendly
              online store platform
            </p>
          </div>
          <div className="banner-vector d-flex">
            <div>
              <div className="btn filled">Get notified of launch</div>
            </div>
            <div className="vector-img mx-auto">
              <img src="/Vector 4.png" alt="vector-img" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 align-items-sm-center align-items-md-center">
          <div className="hero-image pulse mx-sm-auto align-items-center">
            <img src="/Group 3.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
