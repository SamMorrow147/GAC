import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationArea = () => {
  return (
    <section id="contact" className="consultation-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="consultation-content">
              <div className="section-title mb-25">
                <img src="/img/icon/consultation_icon01.png" alt="" />
                <span className="sub-title">Get In Touch</span>
                <h2 className="title">
                  Minnesota's Go-To Marketing Experts
                </h2>
              </div>
              <p>
                Let's elevate your brand. We'll create tailored marketing strategies that deliver real results and lasting impact.
              </p>
              <div className="consultation-list">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon02.png" alt="" />
                      <span>20+</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Years of Combined Experience</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon03.png" alt="" />
                      <span>100%</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Client-Centered. Results-Focused.</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <ConsultationAreaForm />
          </div>
        </div>
      </div>

      <div className="consultation-shape-wrap">
        <img
          src="/img/images/consultation_shape01.png"
          alt=""
          className="shape-one ribbonRotate"
        />
        <img
          src="/img/images/consultation_shape02.png"
          alt=""
          className="shape-two float-bob-x"
        />
      </div>
    </section>
  );
};

export default ConsultationArea;
