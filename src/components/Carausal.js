import React from 'react';
import './Carausal.css';

const Carausal = () => {
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide carousal-height'
      data-bs-ride='carousel'
    >
      <div class='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          class='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div className='carousel-inner' style={{ height: '600px' }}>
        <div class='carousel-item active'>
          <img
            src='https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            class='d-block w-100 carousal-height'
            alt='sdajkhfjkdas'
          />
          <div class='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class='carousel-item' style={{ height: '600px' }}>
          <img
            src='https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVuJTIwYW5kJTIwcGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            class='d-block w-100 carousal-height'
            alt='...'
          />
          <div class='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class='carousel-item' style={{ height: '600px' }}>
          <img
            src='https://images.unsplash.com/photo-1580127645995-d43fe9598711?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm91bnRhaW4lMjBwZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            class='d-block w-100 carousal-height'
            alt='...'
          />
          <div class='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Previous</span>
      </button>
      <button
        class='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carausal;
