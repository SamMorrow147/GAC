import React from "react";

const InnerContactInfo = () => {
  const info_items = [
    {
      src: "/img/icon/loction_icon03.png",
      title: "Address",
      desc: (
        <>
          <p>200 5th Street NW, Suite J, Elk River, MN 55330</p>
        </>
      ),
    },
    {
      src: "/img/icon/mail_icon03.png",
      title: "Email",
      desc: (
        <>
          <a href="mailto:mark@gac-mn.com">mark@gac-mn.com</a>
        </>
      ),
    },
    {
      src: "/img/icon/phone_icon03.png",
      title: "Phone",
      desc: (
        <>
          <a href="tel:7632677508">(763) 267-7508</a>
        </>
      ),
    },
  ];

  return (
    <ul className="list-wrap">
      {info_items.map((x, index) => (
        <li key={index}>
          <div className="contact-info-item">
            <div className="icon">
              <img src={x.src} alt="" />
            </div>
            <div className="content">
              <h6 className="title">{x.title}</h6>
              {x.desc}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InnerContactInfo;
