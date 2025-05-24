import React from "react";

const AboutArea = () => {
  return (
    <section id="about" className="about-area">
      <div className="container custom-container">
        <div className="about-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-46 order-0 order-lg-2">
              <div className="about-img text-end">
                <img src="/img/images/about_img.jpg" alt="Grace Anthony Consulting" />
              </div>
            </div>
            <div className="col-54">
              <div className="about-content">
                <div className="section-title mb-25">
                  <span className="sub-title">About Us</span>
                  <h2 className="title">
                    Marketing Expertise Rooted in Partnership
                  </h2>
                </div>
                <p>
                  Founded in 2023, Grace Anthony Consulting brings over a decade of marketing expertise to businesses across industries. We work as your dedicated marketing partner—developing efficient, high-impact strategies aligned with your unique vision.
                </p>
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Client-Focused Philosophy</h4>
                      <p>
                        We listen first, strategize second, and act with intention—always keeping your goals front and center.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon02.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Execution That Delivers</h4>
                      <p>
                        With a balance of proven experience and bold creativity, we turn big ideas into measurable wins.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
