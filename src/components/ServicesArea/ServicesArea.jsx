import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
  const services_area_list = [
    {
      title: "Strategic Marketing Planning",
      desc: "Comprehensive marketing strategies tailored to your business goals and target audience.",
      delay_time: 2,
    },
    {
      title: "Digital Marketing",
      desc: "Effective online campaigns to enhance your brand presence and drive customer engagement.",
      delay_time: 4,
    },
    {
      title: "Brand Development",
      desc: "Professional branding services to create a compelling and consistent brand identity.",
      delay_time: 6,
    },
    {
      title: "Content Creation",
      desc: "High-quality content that resonates with your audience and drives meaningful results.",
      delay_time: 8,
    },
  ];

  return (
    <section id="services" className="services-area pt-35 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          {services_area_list.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaItem index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
