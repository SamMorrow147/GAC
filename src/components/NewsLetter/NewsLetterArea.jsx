import React from "react";

const NewsLetterArea = () => {
  // Define text style with dark blue color
  const supportTextStyle = {
    color: "#2E3386"
  };

  return (
    <section id="newsletter" className="newsletter-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-80">
              <span className="sub-title">Stay Connected</span>
              <h2 className="title">
                Get Marketing Tips <br />
                & Insights
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="newsletter-form">
              <form action="#">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit" className="btn">
                  Subscribe <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <h4 className="mb-4" style={supportTextStyle}>Need Support?</h4>
            <h3 style={supportTextStyle}>(763) 267-7508</h3>
          </div>
        </div>
      </div>

      <div className="newsletter-shape-wrap">
        <img
          src="/img/images/newsletter_bg_shape.png"
          alt=""
          className="bg-shape"
        />
        <img
          src="/img/images/newsletter_shape01.png"
          alt=""
          className="shape-one"
        />
        <img
          src="/img/images/newsletter_shape02.png"
          alt=""
          className="shape-two"
        />
        <img
          src="/img/images/newsletter_shape03.png"
          alt=""
          className="shape-three"
        />
        <img
          src="/img/images/newsletter_shape04.png"
          alt=""
          className="shape-four"
        />
        <img
          src="/img/images/newsletter_shape05.png"
          alt=""
          className="shape-five"
        />
        <img
          src="/img/images/newsletter_shape06.png"
          alt=""
          className="shape-six"
        />
      </div>
    </section>
  );
};

export default NewsLetterArea;
