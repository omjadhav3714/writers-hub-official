import React from "react";
import "./Blogs.css";

const Card = ({ img, content, title, date }) => {
  return (
    <div
      className="card shadow mx-4 my-3 single-card"
      style={{ width: "300px" }}
    >
      <div
        className="img-container d-flex"
        style={{ maxHeight: "150px", minHeight: "150px" }}
      >
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body p-2">
        <p
          className="card-title fs-5 text-capitalize"
          style={{ fontWeight: "500" }}
        >
          {title}
        </p>
        <p className="small">Published: &nbsp; {date}</p>
        <p
          className="card-text content py-1 mt-0 mb-3 pt-0"
          style={{ maxHeight: "70px", minHeight: "70px" }}
        >
          {content}
        </p>
        <div className="links d-flex justify-content-between align-items-center m-0 p-1 border-top ">
          <p className="small pb-0 pt-1 m-0">5 min read</p>
          <a href="#" className="py-0 text-decoration-none">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
