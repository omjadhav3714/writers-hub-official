/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Carausal.css";
import ReactDOM from "react-dom";
import Typist from "react-typist";
import img1 from './../images/img1.jpg';
import img2 from './../images/img2.jpg';
import img3 from './../images/img3.jpg';
import img4 from './../images/img4.jpg';

const Carausal = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousal-height scrollable-div"
      data-bs-ride="carousel"
      style={{ height: "90vh" }}
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner" style={{ height: "90vh" }}>
        <div class="carousel-item active">
          <div
            class="carousel-caption d-none d-md-block"
            style={{ position: "absolute", top: "70%" }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  className="caraText"
                >
                  Welcome to Writers Hub...
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ""
            )}
          </div>
          <img
            src={img3}
            class="d-block w-100 carousal-height"
            alt="sdajkhfjkdas"
          />
        </div>
        <div class="carousel-item" style={{ height: "90vh" }}>
          <div
            class="carousel-caption d-none d-md-block"
            style={{ position: "absolute", top: "30%" }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  className="caraText"
                >
                  Here you can read various Blogs, Shayaris, etc!
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ""
            )}
          </div>
          <img
            src={img2}
            class="d-block w-100 carousal-height"
            alt="..."
          />
        </div>
        <div class="carousel-item" style={{ height: "90vh" }}>
          <div
            class="carousel-caption d-none d-md-block"
            style={{ position: "absolute", top: "75%" }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  className="caraText"
                >
                  Join with us and
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ""
            )}
          </div>
          <img
            src={img1}
            class="d-block w-100 carousal-height"
            alt="..."
          />
        </div>
        <div class="carousel-item" style={{ height: "90vh" }}>
          <div
            class="carousel-caption d-none d-md-block"
            style={{ position: "absolute", top: "75%" }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  className="caraText"
                >
                  Write with us !
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ""
            )}
          </div>
          <img
            src={img4}
            class="d-block w-100 carousal-height"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carausal;
