import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="logo">
                    <a href="#home">
                      <img src="/img/logo/w_logo.png" alt="Grace Anthony Consulting" />
                    </a>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="https://www.facebook.com/grace.anthony.consulting" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="active">
                        <a href="https://twitter.com/GraceAntho41519" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/graceanthonyconsulting/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/grace-anthony-consulting" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-contact">
                    <span>Need Support?</span>
                    <h2 className="title">
                      <a href="tel:7632677508">(763) 267-7508</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Navigation</h4>
                  <div className="fw-link">
                    <ul className="list-wrap">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                      <li>
                        <a href="#services">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Contact</h4>
                  <div className="footer-about">
                    <ul className="list-wrap">
                      <li>
                        <img src="/img/icon/phone_icon.svg" alt="" />
                        <a href="tel:7632677508">(763) 267-7508</a>
                      </li>
                      <li>
                        <img src="/img/icon/mail_icon.svg" alt="" />
                        <a href="mailto:mark@gac-mn.com">mark@gac-mn.com</a>
                      </li>
                      <li>
                        <img src="/img/icon/loction_icon.svg" alt="" />
                        <span>200 5th Street NW, Suite J, Elk River, MN 55330</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="copyright-text text-center">
                  <p>© 2025 Grace Anthony Consulting. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
