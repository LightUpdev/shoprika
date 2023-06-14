import React from "react";
import Image from "next/image";

const Hero = () => {
  const lists = [
    {
      id: 1,

      text: "Sign up for a free account and provide basic information about your business",
    },
    {
      id: 2,
      text: "Add products and setup payment options. ",
    },
    {
      id: 3,
      text: "Effortlessly manage your products, track inventory levels and keep track of product availabilityLaunch your online store and start promoting your products to attract customers",
    },
    {
      id: 4,
      text: "Manage orders, track inventory and grow your business with our intuitive dasboard",
    },
  ];

  return (
    <div className="container-fluid hero">
      <div className="container">
        <div className="heading my-5">
          <h3 className="text-white text-center fw-bold">
            Effortless setup, seamless operation
          </h3>
        </div>
        <div className="row my-5 py-3">
          <div className="col-sm-12 col-md-6">
            <ul></ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <div>
              <Image src="/1.png" alt="hero" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
