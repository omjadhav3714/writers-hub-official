import React, { useState, useEffect } from 'react';
import './Comments.css';
import { db } from '../../firebase';
import { format } from 'timeago.js';

const Comments = ({ comments }) => {
  return (
    <div className='mb-5' style={{ border: '0' }}>
      <div className='comments  py-4'>
        <p
          className='author ps-3 ms-3 '
          style={{
            position: 'relative',
            fontWeight: 'bold',
            fontSize: '18px',
            fontFamily: 'sans-serif',
            color: '#222',
          }}
        >
          TOP COMMENTS
        </p>

        <div className='d-flex flex-row flex-wrap'>
          {/* single comment 1 */}
          {comments.map((comment) => (
            <div className='col-lg-6 col-md-6 col-sm-12 pb-3'>
              <div className='d-flex flex-row single-post flex-wrap col-12'>
                <div className='px-3 col-lg-12 col-md-12 col-sm-12'>
                  <div className='d-inline-flex justify-content-between'>
                    <p className='popular-blog-comment pb-1 mb-0'>
                      <span
                        style={{
                          fontWeight: 'bold',
                          fontWeight: 'bold',
                          fontFamily: 'sans-serif',
                          fontSize: '1rem',
                        }}
                      >
                        {comment.name}
                      </span>
                    </p>
                  </div>
                  <p className=' pt-0 mt-0 pb-1 mb-0'>
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                      {comment.comment}
                    </span>
                  </p>
                  <div className='d-flex'>
                    <p
                      className='pt-0 mt-0 pe-2'
                      style={{ fontSize: '0.85rem' }}
                    >
                      {format(comment.created_at)}
                    </p>
                  </div>
                  {/*  <p className="pt-0 mt-0 pe-2" style={{ fontSize: "0.85rem" }}>
                    3 Likes
                  </p>

                   like btn */}
                  {/* <button
                    className="p-0 m-0 like-btn"
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                      maxHeight: "16px",
                    }}
                  >
                    <i
                      className="fas fa-thumbs-up"
                      style={{ color: "#D3D3D3	" }}
                    ></i>
                  </button>
                </div>  */}
                </div>
              </div>
            </div>
          ))}

          {/* end of comment 1 */}

          {/* single comment 2 */}

          {/* end of single comment */}
          {/* single comment 2 */}

          {/* end of single comment */}
        </div>
      </div>
    </div>
  );
};

export default Comments;
