/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

export const Footer = () => {

  const [name, setFeedback] = useState();
  const [feedback, settestimonials] = useState();


  // send the data to backend
  const PostFeedbackData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: name,
        feedback: feedback,
      }
      await db.collection("Feedback").add(data)
        .then((s) => {
          alert("Success");
        })
    } catch (error) {
      alert("Something error occured");
    }
  }

  return (
    <>
      <footer class="new_footer_area bg_color">
        <div class="new_footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                  <h3 class="f-title f_600 t_color f_size_18">FeedBack</h3>
                  <p>Don’t miss any updates</p>
                  <form class="f_subscribe_two" method="POST" onSubmit={PostFeedbackData}>

                    <input type="text"
                      name="name"
                      class="form-control"
                      value={name}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Enter Name"
                      style={{ "background": "transparent", "borderTop": "1px", "borderRight": "1px", "borderLeft": "1px" }}
                    />
                    <div className="pb-3"></div>
                    <input type="text"
                      name="feedback"
                      class="form-control"
                      value={feedback}
                      onChange={(e) => settestimonials(e.target.value)}
                      placeholder="Feedback"
                      style={{ "background": "transparent", "borderTop": "1px", "borderRight": "1px", "borderLeft": "1px" }}
                    />

                    <button class="btn btn_get btn_get_two"
                      type="submit">
                      Submit
                    </button>

                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                  <h3 class="f-title f_600 t_color f_size_18">Quick Links</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                      <Link to={`/blogs`}>Blogs</Link>
                    </li>
                    <li>
                      <Link to={`/shayaris`}>Shayaris</Link>
                    </li>
                    <li>
                      <Link to={`/kavitas`}>Kavitas</Link>
                    </li>
                    <li>
                      <Link to={`/quotes`}>Quotes</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                  <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                  <ul class="list-unstyled f_list">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Term &amp; conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                  <h3 class="f-title f_600 t_color f_size_18">Get Social</h3>
                  <div class="f_social_icon">
                    <a target="_blank" href="https://www.facebook.com/om.jadhav.9659" class="fa fa-facebook"></a>
                    <a target="_blank" href="https://twitter.com/OmJadha24187157" class="fa fa-twitter"></a>
                    <a target="_blank" href="https://www.linkedin.com/in/om-jadhav-494553209/" class="fa fa-linkedin"></a>
                    <a target="_blank" href="https://www.instagram.com/thewritershubs/" class="fa fa-instagram"></a>
                    <a target="_blank" href="#" class="fa fa-pinterest"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 ">
                <p class="forcp">Copyright @ 2022 WritersHub All rights reserved.</p>
              </div>
              <div class="col-lg-5 col-md-6 ">
                <p class="forcp">Terms and Services . Privacy Policy </p>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;


