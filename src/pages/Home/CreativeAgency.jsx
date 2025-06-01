import React from "react";
import AboutArea from "../../components/About/AboutArea";
import BannerOne from "../../components/Banner/BannerOne";
import BrandArea from "../../components/Brand/BrandArea";
import CompanyArea from "../../components/Company/CompanyArea";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
import InnerServicesArea from "../../components/Services/InnerServicesArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";

const CreativeAgency = () => {
  return (
    <Layout header={1} footer={1}>
      <BannerOne />
      <InnerServicesArea />
      <AboutArea />
      <BrandArea />
      <CompanyArea />
      <TestimonialArea />
      <ConsultationArea />
    </Layout>
  );
};

export default CreativeAgency;
