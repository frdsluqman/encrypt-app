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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus doloribus aperiam, iste assumenda sed vero nam a quaerat nemo? Nisi, accusamus dolores? Aliquid ratione quibusdam architecto similique, nulla vitae et unde minus sed in dignissimos animi eum magni earum. Odit ut architecto nobis tempora, fuga tenetur hic libero quia veniam iste delectus optio vero sint quidem laborum maxime ad quas, provident nostrum temporibus dolore voluptatibus. Eius suscipit dolor quisquam ipsam maiores voluptate facere incidunt architecto repellendus voluptas! Architecto, enim.
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
