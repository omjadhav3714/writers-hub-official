import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Blog.css';
import { SocialIcon } from 'react-social-icons';

const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState();

  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const single = db.collection('Blogs').doc(id);

    single
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let data = doc.data();
          setBlog(data);
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, []);

  const addComment = async (e) => {
    e.preventDefault();
    const commentData = {
      post_id: id,
      name: commentName,
      email: commentEmail,
      comment: comment,
    };

    if (
      commentData.name === '' ||
      commentData.email === '' ||
      commentData.comment === ''
    ) {
    } else {
      try {
        await db.collection('Comments').add(commentData);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      {blog ? (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-8'>
              <article>
                <header className='mb-4'>
                  <h1 className='fw-bolder mb-1'>{blog.title}</h1>

                  <div className='text-muted fst-italic mb-2'>
                    Posted on {blog.updated_on}, 2021 by {blog.authorName}
                  </div>

                  {blog.categories.map((c) => (
                    <p
                      className='badge bg-secondary text-decoration-none link-light'
                      href='#!'
                    >
                      {c}
                    </p>
                  ))}
                </header>
                <figure className='mb-4'>
                  <img
                    className='img-fluid rounded'
                    src={blog.images[0]}
                    alt='hello'
                    style={{ height: '520px', width: '800px' }}
                  />
                </figure>

                <section className='mb-5'>
                  <p className='fs-5 mb-4'>{blog.description}</p>
                </section>
              </article>
            </div>

            <div className='col-lg-4'>
              {/* author details, adding dynamic images and social media links */}
              <div className='author-details d-flex flex-column border py-3'>
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
                  AUTHOR WIDGETS
                </p>
                <figure className='mb-4 d-flex justify-content-center'>
                  <img
                    className='img-fluid author-img'
                    src='https://images.unsplash.com/photo-1579293676244-953f569610cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGF1dGhvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    alt='hello'
                    style={{
                      height: '300px',
                      width: '300px',
                    }}
                  />
                </figure>
                <div className='d-flex justify-content-center flex-column align-items-center pb-5'>
                  <p>{blog.authorName}</p>
                  <a href='#' className='button-author'>
                    Read More
                  </a>
                </div>
                <div className='py-4'>
                  <p
                    className='author ps-3 ms-3'
                    style={{
                      position: 'relative',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      fontFamily: 'sans-serif',
                      color: '#222',
                    }}
                  >
                    SOCIAL SHARE
                  </p>
                  <ul className='d-flex' style={{ listStyle: 'none' }}>
                    <li className='px-1'>
                      <SocialIcon url='https://twitter.com/' />
                    </li>
                    <li className='px-1'>
                      <SocialIcon url='https://github.com/' />
                    </li>
                    <li className='px-1'>
                      <SocialIcon url='https://linkedin.com/' />
                    </li>
                    <li className='px-1'>
                      <SocialIcon url='https://instagram.com/' />
                    </li>
                    <li className='px-1'>
                      <SocialIcon url='https://youtube.com/' />
                    </li>
                    <li className='px-1'>
                      <SocialIcon url='https://medium.com/' />
                    </li>
                  </ul>
                </div>
                <div className='popular-posts py-4'>
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
                    POPULAR POSTS
                  </p>

                  {/* add dynamic data and link to correct blog */}
                  <div className='post ps-3 '>
                    {/* blog1 */}
                    <div className='d-flex flex-row single-post'>
                      <Link to='/blogs' style={{ textDecoration: 'none' }}>
                        <figure className='mb-4'>
                          <img
                            className='img-fluid'
                            src={blog.images[0]}
                            alt='hello'
                            style={{
                              height: '100px',
                              width: '100px',
                              borderRadius: '5%',
                            }}
                          />
                        </figure>
                      </Link>
                      <div className='p-3'>
                        <p className='popular-blog-title'>{blog.title}</p>
                        <p className='popular-blog-comment'>
                          BY - &nbsp;
                          <span style={{ fontWeight: 'bold' }}>
                            {blog.authorName}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* blog2 */}
                    <div className='d-flex flex-row single-post'>
                      <Link to='/blogs' style={{ textDecoration: 'none' }}>
                        <figure className='mb-4'>
                          <img
                            className='img-fluid'
                            src={blog.images[0]}
                            alt='hello'
                            style={{
                              height: '100px',
                              width: '100px',
                              borderRadius: '5%',
                            }}
                          />
                        </figure>
                      </Link>
                      <div className='p-3'>
                        <p className='popular-blog-title'>{blog.title}</p>
                        <p className='popular-blog-comment'>
                          BY - &nbsp;
                          <span style={{ fontWeight: 'bold' }}>
                            {blog.authorName}
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* blog3  */}
                    <div className='d-flex flex-row single-post'>
                      <Link to='/blogs' style={{ textDecoration: 'none' }}>
                        <figure className='mb-4'>
                          <img
                            className='img-fluid'
                            src={blog.images[0]}
                            alt='hello'
                            style={{
                              height: '100px',
                              width: '100px',
                              borderRadius: '5%',
                            }}
                          />
                        </figure>
                      </Link>
                      <div className='p-3'>
                        <p className='popular-blog-title'>{blog.title}</p>
                        <p className='popular-blog-comment'>
                          BY - &nbsp;
                          <span style={{ fontWeight: 'bold' }}>
                            {blog.authorName}
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* blog4 */}
                    <div className='d-flex flex-row single-post'>
                      <Link to='/blogs' style={{ textDecoration: 'none' }}>
                        <figure className='mb-4'>
                          <img
                            className='img-fluid'
                            src={blog.images[0]}
                            alt='hello'
                            style={{
                              height: '100px',
                              width: '100px',
                              borderRadius: '5%',
                            }}
                          />
                        </figure>
                      </Link>
                      <div className='p-3'>
                        <p className='popular-blog-title'>{blog.title}</p>
                        <p className='popular-blog-comment'>
                          BY - &nbsp;
                          <span style={{ fontWeight: 'bold' }}>
                            {blog.authorName}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex flex-column border py-3 my-3'>
                <p
                  className='author ps-3 ms-3'
                  style={{
                    position: 'relative',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'sans-serif',
                    color: '#222',
                  }}
                >
                  MORE
                </p>
                <div className='card-body'>
                  <div className='col-12'>
                    <ul className='list-unstyled d-flex flex-wrap justify-content-start flex-row'>
                      <li className='px-2'>
                        <Link to='/blogs' style={{ textDecoration: 'none' }}>
                          <p className='button-author'>Blogs</p>
                        </Link>
                      </li>
                      <li className='px-2'>
                        <Link to='/shayaris' style={{ textDecoration: 'none' }}>
                          <p className='button-author'>Shayaris</p>
                        </Link>
                      </li>

                      <li className='px-2'>
                        <Link to='/kavitas' style={{ textDecoration: 'none' }}>
                          <p className='button-author'>Kavitas</p>
                        </Link>
                      </li>
                      <li className='px-2'>
                        <Link to='/quotes' style={{ textDecoration: 'none' }}>
                          <p className='button-author'>Quotes</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column border py-3 my-3'>
                <p
                  className='author ps-3 ms-3'
                  style={{
                    position: 'relative',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'sans-serif',
                    color: '#222',
                  }}
                >
                  LEAVE A COMMENT
                </p>
                <form
                  action='POST'
                  className='p-3'
                  style={{
                    color: '#222',
                    fontFamily: 'sans-serif',
                    fontWeight: '600',
                  }}
                  onSubmit={addComment}
                >
                  <div class='form-group py-3'>
                    <label className='pb-1' for='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      class='form-control'
                      id='email'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                      onChange={(e) => setCommentEmail(e.target.value)}
                    />
                  </div>
                  <div class='form-group py-3'>
                    <label className='pb-1' for='name'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='name'
                      placeholder='Name'
                      onChange={(e) => setCommentName(e.target.value)}
                    />
                  </div>
                  <div class='form-group py-3'>
                    <label className='pb-1' for='exampleFormControlTextarea1'>
                      Comment
                    </label>
                    <textarea
                      class='form-control'
                      id='exampleFormControlTextarea1'
                      rows='3'
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>

                  <p
                    className='button-author py-1'
                    style={{
                      width: '50%',
                    }}
                  >
                    <button
                      type='submit'
                      className='btn'
                      style={{ fontWeight: 'bold' }}
                    >
                      Post Comment
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
      <Footer />
    </div>
  );
};

export default Blog;