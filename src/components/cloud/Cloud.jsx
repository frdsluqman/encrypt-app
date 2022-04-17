import React from "react";
import "./CloudStyle.css";

const Cloud = () => {
  return (
    <section className="cloud">
      <div className="container">
        <div className="content">
          <div className="column left">
            <h1>CLOUD SERVICES</h1>
            <h3>COMPUTING TECHNOLOGY</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis pariatur tempore expedita quaerat, iusto dolore. Ipsum
              maiores consectetur nam, libero repudiandae sint eaque tempore
              assumenda recusandae autem aut, voluptas laudantium odit eum magni
              ut mollitia obcaecati officia quod minima unde earum. Laborum
              explicabo ratione dolore, placeat accusantium quasi numquam
              tempora? Ducimus numquam dolorum excepturi? Inventore commodi
              animi recusandae, necessitatibus accusantium nulla dolor
              aspernatur? Nam, harum praesentium? Ipsum eius similique
              accusamus.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="column right">
            <img src="/assets/cloud1.png" alt="cloud-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cloud;
