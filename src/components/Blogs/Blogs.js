import React from 'react';
import Card from './Card';
import { ArrayOfObjects } from './ArrayOfObjects';
import './Blogs.css';

const Blogs = ({ headline }) => {
  return (
    <div
      className='d-flex flex-direction-row flex-wrap justify-content-center py-5 bg-light'
      style={{ width: '100vw' }}
    >
      <h2
        className='pt-3 title text-dark'
        style={{ paddingLeft: '20px', fontFamily: 'Dancing Script' }}
      >
        {headline}
      </h2>

      <div
        className='container d-flex flex-direction-row flex-wrap justify-content-center my-5'
        style={{ width: '100vw' }}
      >
        {ArrayOfObjects.map(({ img, content, title }) => {
          return (
            <Card
              img={img}
              content={content}
              title={title}
              date={`Published: 2021-17-02`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
