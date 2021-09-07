import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';

const Card = ({ img, content, title, date, url, author }) => {
  return (
    <div
      className='card shadow mx-4 my-3 single-card blog-card p-2 flex-1'
      style={{ width: '350px', backgroundColor: '#dcdcdc' }}
    >
      {/* <div
        className="img-container d-flex"
        style={{ maxHeight: "150px", minHeight: "150px" }}
      >
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <div className='card-body p-2'>
        <p
          className='card-title text-capitalize text-dark'
          style={{ fontSize: '17px', fontWeight: '600' }}
        >
          {title}
        </p>
        <p className='small text-dark'> {date}</p>
        <p
          className='card-text content py-1 mt-0 mb-4 pt-0 text-dark'
          style={{ maxHeight: '70px', minHeight: '70px', fontSize: '17px' }}
        >
          {content}
        </p>
        <div className='links d-flex justify-content-between align-items-center m-0 p-1  '>
          <p className='small pb-0 pt-1 m-0' style={{ fontWeight: '700' }}>
            {author}
          </p>
          <Link to={url} className='py-0 text-decoration-none'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
