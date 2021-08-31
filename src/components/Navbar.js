import React from 'react';
import './navbar.css';
import { MenuDown, VectorPen } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-md navbar-dark menu-bar'>
        <div class='container-fluid'>
          <span className='p-2'>
            <VectorPen size='40px' />
          </span>
          <a class='navbar-brand' href='#'>
            Navbar
          </a>
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
                <a class='nav-link' href='#'>
                  Features
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Pricing
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link disabled'
                  href='#'
                  tabindex='-1'
                  aria-disabled='true'
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
