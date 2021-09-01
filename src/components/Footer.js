import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className='site-footer'
      style={{
        backgroundColor: '#1a1b3b',
        color: 'white',
      }}
    >
      <div class='container p-4'>
        <div class='row'>
          <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h4 class='text-uppercase'>About us</h4>

            <p className='s-3' style={{ fontSize: '22px' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>

          <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <ul class='list-unstyled mb-0'></ul>
          </div>

          <div
            class='col-lg-3 col-md-6 mb-4 mb-md-0'
            style={{ fontSize: '22px' }}
          >
            <ul class='list-unstyled'>
              <li>
                <Link
                  href='#!'
                  class='text-white'
                  style={{ textDecoration: 'none' }}
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  href='#!'
                  class='text-white'
                  style={{ textDecoration: 'none' }}
                >
                  contact us
                </Link>
              </li>
              <li>
                <Link
                  href='#!'
                  class='text-white'
                  style={{ textDecoration: 'none' }}
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href='#!'
                  class='text-white'
                  style={{ textDecoration: 'none' }}
                >
                  privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{ color: '#e07624' }} />
      <div class='text-center p-3' style={{ fontSize: '22px' }}>
        © 2020 Copyright:
        <Link class='text-white' href='https://mdbootstrap.com/'>
          Writers Hub official
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
