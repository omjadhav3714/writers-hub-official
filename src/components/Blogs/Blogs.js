import React from "react";
import Card from "./Card";
import { ArrayOfObjects } from "./ArrayOfObjects";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div
      className="container d-flex flex-direction-row flex-wrap justify-content-center my-5"
      style={{ width: "100vw" }}
    >
      <h1 className="mt-3 title">Featured Blogs</h1>

      <div
        className="container d-flex flex-direction-row flex-wrap justify-content-center my-5"
        style={{ width: "100vw" }}
      >
        {ArrayOfObjects.map(({ img, content, title }) => {
          return (
            <Card
              img={img}
              content={content}
              title={title}
              date={`2021-17-02`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
