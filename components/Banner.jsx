import React from "react";
import Image from "next/image";

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
          <div className="text my-4">
            <p className="fw-bold w-75" style={{ flexWrap: "nowrap" }}>
              Reach a wider audience and boost your sales with our user-friendly
              online store platform
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="btn filled">Get notified of launch</div>
            </div>
            <div className="col-sm-12 col-md-6 vector-img mx-auto">
              <Image
                src="/Vector4.png"
                alt="vector-img"
                width={200}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 align-items-sm-center align-items-md-center">
          <div className="pulse mx-auto">
            <Image
              src="/Group3.png"
              alt="hero-image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
