import React from "react";
import "./DataStyle.css";

const Data = () => {
  return (
    <section className="data">
      <div className="container">
        <h2 className="title">Recovery</h2>
        <div className="content">
          <div className="column left">
            <img src="/assets/recovery.png" alt="Recovery" />
          </div>
          <div className="column right">
            <h2>
              <span>Data</span> Encrypted
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quo
              architecto corporis consequuntur in quidem et esse, sequi
              consequatur maxime, vero libero! Fugiat omnis aperiam optio
              suscipit consectetur eum id!
            </p> 
            <div>
              <a href="#" className="learn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;
