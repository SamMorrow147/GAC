import React from "react";

const TestimonialAreaItem = (props) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-content">
        <i className="fas fa-quote-left quote-icon"></i>
        <p>{props.item.desc}</p>
      </div>
      <div className="testimonial-info">
        <div className="thumb">
          <img
            src={`/img/images/testimonial_avatar0${props.item.src}.png`}
            alt={props.item.title}
          />
        </div>
        <div className="content">
          <h4 className="title">{props.item.title}</h4>
          <p>{props.item.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAreaItem;
