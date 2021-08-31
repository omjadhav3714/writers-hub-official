import React from "react";
import Carausal from "../components/Carausal";
import Navbar from "../components/Navbar";
import Blogs from "./../components/Blogs/Blogs";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carausal />
      <div
        style={{
          backgroundImage: "linear-gradient(15deg, #42275a 0%, #734b6d 100%)",
        }}
      >
        <Blogs headline={`Featured Blogs`} />
      </div>
      <div
        style={{
          backgroundColor: "#68527b",
        }}
      >
        <Blogs headline={`Trending Shayaris`} />
      </div>
    </div>
  );
};

export default HomePage;
