import React from "react";
import TestimonialAreaItem from "./TestimonialAreaItem";

const TestimonialArea = () => {
  const testimonials = [
    {
      title: "John D.",
      designation: "Small Business Owner",
      desc: `Grace Anthony Consulting transformed our marketing. We saw a 40% increase in leads in just three months.`,
      src: 1,
    },
    {
      title: "Sarah M.",
      designation: "CEO, Tech Company",
      desc: `Mark's insights and dedication delivered real growth. They built a custom plan that worked.`,
      src: 2,
    },
    {
      title: "Michael R.",
      designation: "Restaurant Owner",
      desc: `GAC helped us reach new customers even during tough times. Their social campaigns were a game-changer.`,
      src: 3,
    }
  ];

  return (
    <section id="testimonial" className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2 className="title">Client Success Stories</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap">
          <div className="row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <TestimonialAreaItem item={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
