import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { Trash } from 'react-bootstrap-icons';

const Card = ({
  img,
  content,
  title,
  date,
  url,
  author,
  id,
  isApproved,
  deleteOption,
  collection,
}) => {
  const deletePost = async () => {
    try {
      await db.collection(`${collection}`).doc(id).delete();
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="card card-single shadow mx-4 my-3 single-card blog-card p-2 flex-1"
      style={{ width: '350px' }}
    >
      {img && (
        <div
          className="img-container d-flex"
          style={{ maxHeight: '150px', minHeight: '150px' }}
        >
          <img
            src={img}
            className="card-img-top"
            alt="..."
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="card-body p-2">
        <p
          className="card-title text-capitalize text-dark"
          style={{ fontSize: '17px', fontWeight: '600' }}
        >
          {title}
        </p>
        <div className="d-fles justify-content-between m-2">
          <p className="small text-dark"> {date}</p>
          {deleteOption && (
            <button className="btn btn-danger" onClick={deletePost}>
              <Trash />
            </button>
          )}
        </div>
        <p
          className="card-text content py-1 mt-0 mb-4 pt-0 text-dark"
          style={{ maxHeight: '70px', minHeight: '70px', fontSize: '17px' }}
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </p>
        <div className="links d-flex justify-content-between align-items-center m-0 p-1  ">
          <p className="small pb-0 pt-1 m-0" style={{ fontWeight: '700' }}>
            {author}
          </p>
          <Link to={url} className="py-0 text-decoration-none">
            Read more
          </Link>
        </div>
        {!isApproved && <p className="text-danger"> Awaiting approval</p>}
      </div>
    </div>
  );
};

export default Card;
