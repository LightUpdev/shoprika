import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const submitEmail = () => {
    console.log(email);
    setEmail("");
  };
  return (
    <>
      <div className="container">
        <div className="form py-3 my-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control w-50 py-3"
            placeholder="Enter your Email address"
          />
          <button className="btn filled p-3" onClick={() => submitEmail()}>
            Get Notified
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
