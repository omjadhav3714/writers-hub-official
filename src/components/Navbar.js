import React from 'react';
import './navbar.css';
import { MenuDown, VectorPen } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        class='navbar navbar-expand-md navbar-dark'
        style={{ backgroundColor: '#2b2c59' }}
      >
        <div class='container-fluid'>
          <span className='p-2'>
            <VectorPen size='40px' color='white' />
          </span>
          <Link
            class='navbar-brand'
            to='#'
            style={{ fontFamily: 'Dancing Script', fontSize: '35px' }}
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
            <ul class='navbar-nav ml-auto'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' href='#'>
                  Features
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link' href='#'>
                  Pricing
                </Link>
              </li>
              <li class='nav-item'>
                <Link
                  class='nav-link disabled'
                  href='#'
                  tabindex='-1'
                  aria-disabled='true'
                >
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
