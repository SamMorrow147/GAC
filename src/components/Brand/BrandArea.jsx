import React from "react";

const BrandArea = () => {
  // Primary logos from the project
  const brandLogos = [
    "/img/brand/h3_brand_img01.png",
    "/img/brand/h3_brand_img02.png",
    "/img/brand/h3_brand_img03.png",
    "/img/brand/h3_brand_img04.png",
    "/img/brand/h3_brand_img05.png",
    "/img/brand/h3_brand_img06.png",
  ];
  
  // Fallback logos - placeholder company logos in case the primary ones don't load
  const fallbackLogos = [
    "https://placehold.co/200x100/2E3386/FFFFFF?text=Partner+1",
    "https://placehold.co/200x100/327D8E/FFFFFF?text=Partner+2",
    "https://placehold.co/200x100/71A5AA/FFFFFF?text=Partner+3",
    "https://placehold.co/200x100/2E3386/FFFFFF?text=Partner+4",
    "https://placehold.co/200x100/327D8E/FFFFFF?text=Partner+5",
    "https://placehold.co/200x100/71A5AA/FFFFFF?text=Partner+6",
  ];

  return (
    <section className="brand-area-two pt-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-80">
              <span className="sub-title">Our Partners</span>
              <h2 className="title">Trusted by Businesses That Value Results</h2>
            </div>
          </div>
        </div>
        
        {/* Static grid of partner logos */}
        <div className="row justify-content-center">
          {brandLogos.map((logo, index) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={index}>
              <div className="brand-item-two">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackLogos[index];
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandArea;
