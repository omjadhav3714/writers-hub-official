import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { useHistory } from 'react-router';

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showShayriForm, setShowShayriForm] = useState(false);
  const [showKavitaForm, setShowKavitaForm] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const shayriTitle = useRef();
  const shayriContent = useRef();
  const kavitaTitle = useRef();
  const kavitaContent = useRef();
  const quoteContent = useRef();
  const [blogImg, setBlogImg] = useState();
  const blogTitle = useRef();
  const blogContent = useRef();

  const addShayri = async (e) => {
    e.preventDefault();
    try {
      await db.collection('Shayris').add({
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        title: shayriTitle.current.value,
        description: shayriContent.current.value,
        updated_on: new Date().toString(),
      });
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  const addKavita = async (e) => {
    e.preventDefault();
    try {
      await db.collection('Poems').add({
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        title: kavitaTitle.current.value,
        description: kavitaContent.current.value,
        updated_on: new Date().toString(),
      });
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  const addQuote = async (e) => {
    e.preventDefault();
    try {
      await db.collection('Quotes').add({
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        description: quoteContent.current.value,
        updated_on: new Date().toString(),
      });
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('file', blogImg);
      data.append('upload_preset', 'blog_img_store');
      data.append('cloud_name', 'writers-hub');
      await fetch('https://api.cloudinary.com/v1_1/writers-hub/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          db.collection('Blogs').add({
            authorName: currentUser.username,
            isFeatured: false,
            isApproved: false,
            title: blogTitle.current.value,
            content: blogContent.current.value,
            images: [data.url],
          });
        });
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      <div className='container'>
        {currentUser && currentUser.username && (
          <div className='ms-3'>
            <h1>USER : {currentUser.username}</h1>
            <h1>EMAIL: {currentUser.email}</h1>

            {currentUser.isAdmin && (
              <button
                className='btn btn-primary ms-3'
                onClick={() => {
                  history.push('/approvals');
                }}
              >
                Approvals
              </button>
            )}

            <button
              className='btn btn-success ms-3'
              onClick={() => {
                if (showBlogForm) {
                  setShowBlogForm(false);
                } else {
                  setShowBlogForm(true);
                  setShowKavitaForm(false);
                  setShowQuoteForm(false);
                }
              }}
            >
              Add Blog
            </button>

            <button
              className='btn btn-success ms-3'
              onClick={() => {
                if (showShayriForm) {
                  setShowShayriForm(false);
                } else {
                  setShowShayriForm(true);
                  setShowKavitaForm(false);
                  setShowQuoteForm(false);
                }
              }}
            >
              Add shayri
            </button>
            <button
              className='btn btn-success ms-3'
              onClick={() => {
                if (showKavitaForm) {
                  setShowKavitaForm(false);
                } else {
                  setShowKavitaForm(true);
                  setShowShayriForm(false);
                  setShowQuoteForm(false);
                }
              }}
            >
              Add kavita
            </button>
            <button
              className='btn btn-success ms-3'
              onClick={() => {
                if (showQuoteForm) {
                  setShowQuoteForm(false);
                } else {
                  setShowQuoteForm(true);
                  setShowShayriForm(false);
                  setShowKavitaForm(false);
                }
              }}
            >
              Add Quote
            </button>
            <div>
              {showBlogForm && (
                <form onSubmit={addBlog}>
                  {success && (
                    <div class='alert alert-success' role='alert'>
                      Success! , your shayri will be posted once the admin
                      approves it
                    </div>
                  )}
                  {error && (
                    <div class='alert alert-error' role='alert'>
                      opps something went wrong!
                    </div>
                  )}
                  <div>
                    <label for='exampleInputEmail1'>image:</label>
                    <input
                      className='p-3'
                      type='file'
                      onChange={(e) => setBlogImg(e.target.files[0])}
                    />{' '}
                    {blogImg && (
                      <img
                        style={{ height: '120px' }}
                        src={URL.createObjectURL(blogImg)}
                      />
                    )}
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Title</label>
                    <input
                      type='text'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='title'
                      ref={blogTitle}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Content</label>
                    <textarea
                      type='text'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='shayri'
                      style={{ height: '207px' }}
                      ref={blogContent}
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              )}
              {showShayriForm && (
                <form onSubmit={addShayri}>
                  {success && (
                    <div class='alert alert-success' role='alert'>
                      Success! , your shayri will be posted once the admin
                      approves it
                    </div>
                  )}
                  {error && (
                    <div class='alert alert-error' role='alert'>
                      opps something went wrong!
                    </div>
                  )}
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Title</label>
                    <input
                      type='text'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='title'
                      ref={shayriTitle}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Content</label>
                    <textarea
                      type='text'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='shayri'
                      style={{ height: '207px' }}
                      ref={shayriContent}
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              )}
              {showKavitaForm && (
                <form onSubmit={addKavita}>
                  {success && (
                    <div class='alert alert-success' role='alert'>
                      Success! , your kavita will be posted once the admin
                      approves it
                    </div>
                  )}
                  {error && (
                    <div class='alert alert-error' role='alert'>
                      opps something went wrong!
                    </div>
                  )}
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Title</label>
                    <input
                      type='text'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='title'
                      ref={kavitaTitle}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Content</label>
                    <textarea
                      type='text'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='kavita'
                      style={{ height: '207px' }}
                      ref={kavitaContent}
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              )}
              {showQuoteForm && (
                <form onSubmit={addQuote}>
                  {success && (
                    <div class='alert alert-success' role='alert'>
                      Success! , your quote will be posted once the admin
                      approves it
                    </div>
                  )}
                  {error && (
                    <div class='alert alert-error' role='alert'>
                      opps something went wrong!
                    </div>
                  )}
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Content</label>
                    <textarea
                      type='text'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='Quote'
                      style={{ height: '207px' }}
                      ref={quoteContent}
                    />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
