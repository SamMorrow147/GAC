import React from "react";

const BannerOne = () => {
  return (
    <section id="home" className="banner-area banner-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-img wow fadeInLeft" data-wow-delay=".4s">
              <img src="/img/banner/banner_img.png" alt="Marketing Strategy" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-content">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Strategic Marketing Solutions
              </span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Full-Service Marketing Agency Based in Elk River, MN
              </h2>
              <a
                href="#contact"
                className="btn wow fadeInUp"
                data-wow-delay=".6s"
              >
                Contact Us <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-wrap">
        <img src="/img/banner/banner_shape01.png" alt="" />
        <img
          src="/img/banner/banner_shape02.png"
          alt=""
          className="animationFramesOne"
        />
        <img
          src="/img/banner/banner_shape03.png"
          alt=""
          className="contactSwimmer"
        />
        <img src="/img/banner/banner_shape04.png" alt="" className="rotateme" />
        <img
          src="/img/banner/banner_shape05.png"
          alt=""
          className="animation1"
        />
      </div>
    </section>
  );
};

export default BannerOne;
