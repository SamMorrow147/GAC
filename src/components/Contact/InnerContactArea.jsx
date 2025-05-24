import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
  return (
    <section className="inner-contact-area">
      <div className="container">
        <div className="inner-contact-wrap">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <div className="section-title title-style-two mb-50">
                <h2 className="title">
                  Have a <span>Marketing Project?</span> Get in touch!
                </h2>
              </div>

              <div className="inner-contact-form-wrap">
                <InnerContactForm />
              </div>

              <div id="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.9298141136!2d-93.56758082357936!3d45.30498524345249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332c24724e9e9%3A0x91b3bc3590673fbd!2s200%205th%20St%20NW%20Suite%20J%2C%20Elk%20River%2C%20MN%2055330%2C%20USA!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="inner-contact-info">
                <InnerContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerContactArea;
