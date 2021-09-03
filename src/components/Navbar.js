import React from 'react';
import { MenuDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import writer from '../images/writer.png';

const Navbar = ({ backButton }) => {
  return (
    <div
      className='border-bottom border-3'
      style={{ borderBottom: '3px solid #201f1e' }}
    >
      <nav class='navbar navbar-expand-md navbar-light bg-light'>
        <div class='container-fluid'>
          <span className='p-2'>
            <img src={writer} alt='' width='55' height='50' />
          </span>
          <Link
            class='navbar-brand'
            to='#'
            style={{ fontFamily: 'Dancing Script', fontSize: '25px' }}
          >
            Writers Hub
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span>
              <MenuDown />
            </span>
          </button>
          <div
            class='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            {!backButton ? (
              <ul class='navbar-nav ml-auto' style={{ fontSize: '16px' }}>
                <li class='nav-item'>
                  <Link
                    class='nav-link'
                    to='/blogs'
                    smooth={true}
                    duration={500}
                  >
                    Blogs
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='/shayaris'>
                    Sayari
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='/kavitas'>
                    kavita
                  </Link>
                </li>
              </ul>
            ) : (
              <ul class='navbar-nav ml-auto' style={{ fontSize: '16px' }}>
                <li class='nav-item'>
                  <Link class='nav-link' to='/'>
                    Home
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
