import React, { useEffect, useState } from 'react';
import './Carausal.css';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

const Carausal = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide carousal-height scrollable-div'
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
      <div className='carousel-inner' style={{ height: '90vh' }}>
        <div class='carousel-item active'>
          <div
            class='carousel-caption d-none d-md-block'
            style={{ position: 'absolute', top: '70%' }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  style={{
                    fontWeight: 'bold',

                    color: '#000',
                    fontSize: '3rem',
                  }}
                >
                  Welcome to Writers Hub...
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ''
            )}
          </div>
          <img
            src='https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            class='d-block w-100 carousal-height'
            alt='sdajkhfjkdas'
          />
        </div>
        <div class='carousel-item' style={{ height: '90vh' }}>
          <div
            class='carousel-caption d-none d-md-block'
            style={{ position: 'absolute', top: '10%' }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  style={{
                    fontWeight: 'bold',

                    color: '#000',
                    fontSize: '3rem',
                    fontFamily: 'Dacing Script',
                  }}
                >
                  Here you can read various Blogs, Shayaris, etc!
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ''
            )}
          </div>
          <img
            src='https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVuJTIwYW5kJTIwcGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            class='d-block w-100 carousal-height'
            alt='...'
          />
        </div>
        <div class='carousel-item' style={{ height: '90vh' }}>
          <div
            class='carousel-caption d-none d-md-block'
            style={{ position: 'absolute', top: '75%' }}
          >
            {count ? (
              <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <h1
                  style={{
                    fontWeight: 'bold',

                    color: '#000',
                    fontSize: '3rem',
                  }}
                >
                  Welcome to Writers Hub!
                </h1>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ''
            )}
          </div>
          <img
            src='https://images.unsplash.com/photo-1580127645995-d43fe9598711?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm91bnRhaW4lMjBwZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            class='d-block w-100 carousal-height'
            alt='...'
          />
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
