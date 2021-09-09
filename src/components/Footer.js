import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer
        className="site-footer text-light"
        style={{ backgroundColor: "#111" }}
      >
        <div class="container px-4 py-5">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <p
                className="author ps-3 "
                style={{
                  position: "relative",
                  fontWeight: "bold",
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                }}
              >
                ABOUT US
              </p>

              <p
                className="s-3"
                style={{ fontSize: "17px", textAlign: "justify" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0"></ul>
            </div>

            <div
              className="col-lg-3 col-md-6 mb-4 mb-md-0 text-light"
              style={{ fontSize: "17px" }}
            >
              <ul className="list-unstyled text-light">
                <li className="py-2">
                  <Link
                    href="#!"
                    className="text-light text-capitalize"
                    style={{ textDecoration: "none" }}
                  >
                    about us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#!"
                    className="text-light text-capitalize"
                    style={{ textDecoration: "none" }}
                  >
                    contact us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#!"
                    class="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    Contribute
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#!"
                    className="text-light text-capitalize"
                    style={{ textDecoration: "none" }}
                  >
                    privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ color: "#e07624" }} />
        <div class="text-center p-3" style={{ fontSize: "17px" }}>
          ©2020 Copyright : &nbsp;
          <Link class="text-light" href="#" style={{ textDecoration: "none" }}>
            Writers Hub official
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
