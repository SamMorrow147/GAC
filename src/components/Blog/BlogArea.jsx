import React from "react";
import BlogAreaItem from "./BlogAreaItem";

const BlogArea = () => {
  const blog_area_items = [
    {
      src: "/img/blog/blog_img01.jpg",
      tag: "Digital Marketing",
      title: "5 Essential Digital Marketing Strategies for Small Businesses",
      author_img: "/img/blog/blog_avatar01.png",
      author_name: "Mark Fischer",
    },
    {
      src: "/img/blog/blog_img02.jpg",
      tag: "Brand Development",
      title: "How to Build a Memorable Brand Identity in Today's Market",
      author_img: "/img/blog/blog_avatar02.png",
      author_name: "Mark Fischer",
    },
    {
      src: "/img/blog/blog_img03.jpg",
      tag: "Content Marketing",
      title: "Creating Content That Resonates With Your Target Audience",
      author_img: "/img/blog/blog_avatar03.png",
      author_name: "Mark Fischer",
    },
  ];

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Our Blog</span>
              <h2 className="title">Fueling Success, One Blog at a Time</h2>
              <p>
                Stay ahead in your industry with our valuable insights on marketing trends, 
                strategies, and success stories for business growth and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_area_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <BlogAreaItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
