import React from "react";
import { useParallax } from "react-scroll-parallax";

const CompanyArea = () => {
  const parallax = useParallax({
    translateX: [-24, 24],
    rootMargin: 0,
  });

  // Define button style with new color (using GAC brand colors)
  const buttonStyle = {
    backgroundColor: "#2E3386", // Primary GAC brand color
    borderColor: "#2E3386"
  };

  return (
    <section className="company-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title white-title text-center mb-65">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">Our Company</span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Strategic Marketing That Drives Growth
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                We help brands define their voice, strengthen their presence, and accelerate growth in today's fast-paced market.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="company-img wow fadeInLeft" data-wow-delay=".4s">
              <img src="/img/images/company_img01.png" alt="" />
              <img
                src="/img/images/company_img02.png"
                alt=""
                data-parallax='{"x" : 120}'
                ref={parallax.ref}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="company-content">
              <h2 className="title wow fadeInUp" data-wow-delay=".2s">Why Choose GAC</h2>
              <div className="company-list wow fadeInUp" data-wow-delay=".4s">
                <ul className="list-wrap">
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    20+ years of combined marketing expertise
                  </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Tailored strategies to match your business model
                  </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Results-driven, data-informed approach
                  </li>
                  <li>
                    <img src="/img/icon/check_icon.png" alt="" />
                    Full-service support from strategy through execution
                  </li>
                </ul>
              </div>
              <a href="#contact" className="btn wow fadeInUp" data-wow-delay=".6s" style={buttonStyle}>
                Contact Us <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="company-shape-wrap">
        <img src="/img/images/company_shape.png" alt="" />
      </div>
    </section>
  );
};

export default CompanyArea; 