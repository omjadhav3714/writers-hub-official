import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site-footer text-dark bg-#fff'>
      <div class='container p-4'>
        <div class='row'>
          <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h5 class='text-uppercase'>About us</h5>

            <p className='s-3' style={{ fontSize: '18px' }}>
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
            className='col-lg-3 col-md-6 mb-4 mb-md-0 text-dark'
            style={{ fontSize: '18px' }}
          >
            <ul className='list-unstyled text-dark'>
              <li>
                <Link
                  href='#!'
                  className='text-dark'
                  style={{ textDecoration: 'none' }}
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  href='#!'
                  className='text-dark'
                  style={{ textDecoration: 'none' }}
                >
                  contact us
                </Link>
              </li>
              <li>
                <Link
                  href='#!'
                  class='text-dark'
                  style={{ textDecoration: 'none' }}
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href='#!'
                  className='text-dark'
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
      <div class='text-center p-3' style={{ fontSize: '18px' }}>
        © 2020 Copyright :{' '}
        <Link class='text-dark' href='#' style={{ textDecoration: 'none' }}>
          Writers Hub official
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
