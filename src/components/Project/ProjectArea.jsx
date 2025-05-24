import React from "react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProjectArea = () => {
  const swiper_settings = {
    spaceBetween: 20,
    slidesPerView: 1.2,
    loop: true,
    autoplay: true,
    breakpoints: {
      500: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
    },
  };

  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  return (
    <section id="projects" className="project-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="project-content">
              <div className="section-title white-title mb-30">
                <span className="sub-title">Our Recent Work</span>
                <h2 className="title">
                  Marketing Success Stories for Our Clients
                </h2>
              </div>
              <p>
                We help businesses across diverse industries achieve their marketing goals through strategic planning and effective execution. Here are some of our featured projects.
              </p>
              <div className="content-bottom">
                <a href="#contact" className="btn">
                  Contact Us <span></span>
                </a>

                <div className="project-nav">
                  <button
                    className="swiper-button-prev"
                    onClick={toPrev}
                  ></button>
                  <button
                    className="swiper-button-next"
                    onClick={toNext}
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="project-item-wrap">
              <div className="swiper-container project-active">
                <div className="swiper-wrapper">
                  <Swiper
                    {...swiper_settings}
                    onBeforeInit={(swiper) => {
                      sliderRef.current = swiper;
                    }}
                  >
                    {[1, 2, 3, 2].map((x, index) => (
                      <SwiperSlide key={x + index + Math.random()}>
                        <div className="swiper-slide">
                          <div className="project-item">
                            <a href="#contact">
                              <img
                                src={`/img/project/project_img0${x}.jpg`}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-shape-wrap">
        <img
          src="/img/project/project_shape01.png"
          alt=""
          className="shape-one ribbonRotate"
        />
        <img
          src="/img/project/project_shape02.png"
          alt=""
          className="shape-two ribbonRotate"
        />
      </div>
    </section>
  );
};

export default ProjectArea;
