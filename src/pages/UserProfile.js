import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { useHistory } from 'react-router';
import Card from '../components/Blogs/Card';

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showShayriForm, setShowShayriForm] = useState(false);
  const [showKavitaForm, setShowKavitaForm] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [userShayris, setUserShayris] = useState([]);
  const [userBlogs, setUserBlogs] = useState([]);
  const [userKavitas, setUserKavitas] = useState([]);
  const [userQuotes, setUserQuotes] = useState([]);
  const history = useHistory();

  const shayriTitle = useRef();
  const shayriContent = useRef();
  const shayriSocialLink = useRef();
  const kavitaTitle = useRef();
  const kavitaContent = useRef();
  const kavitaSocialLink = useRef();
  const quoteContent = useRef();
  const [blogImg, setBlogImg] = useState();
  const blogTitle = useRef();
  const blogContent = useRef();
  const blogCategories = useRef();
  const blogSocialLink = useRef();

  useEffect(() => {
    if (currentUser && currentUser.userId) {
      db.collection('Shayris')
        .get()
        .then((snapshot) => {
          const usershayris = [];
          snapshot.forEach((doc) => {
            if (doc.data().userId === currentUser.userId) {
              const data = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                authorName: doc.data().authorName,
                isFeatured: doc.data().isFeatured,
                updated_on: doc.data().updated_on,
                userId: doc.data().userId,
              };
              usershayris.push(data);
            }
          });
          setUserShayris(usershayris);
          console.log(usershayris);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.userId) {
      db.collection('Blogs')
        .get()
        .then((snapshot) => {
          const logs = [];
          snapshot.forEach((doc) => {
            if (doc.data().userId === currentUser.userId) {
              const data = {
                id: doc.id,
                title: doc.data().title,
                image: doc.data().images[0],
                categories: doc.data().categories,
                description: doc.data().description,
                authorName: doc.data().authorName,
                isFeatured: doc.data().isFeatured,
                updated_on: doc.data().updated_on,
              };
              logs.push(data);
            }
          });
          setUserBlogs(logs);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.userId) {
      db.collection('Poems')
        .get()
        .then((snapshot) => {
          const kavitas = [];
          snapshot.forEach((doc) => {
            if (doc.data().userId === currentUser.userId) {
              const data = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                authorName: doc.data().authorName,
                isFeatured: doc.data().isFeatured,
                updated_on: doc.data().updated_on,
              };
              kavitas.push(data);
            }
          });
          setUserKavitas(kavitas);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.userId) {
      db.collection('Quotes')
        .get()
        .then((snapshot) => {
          const quotes = [];
          snapshot.forEach((doc) => {
            if (doc.data().userId === currentUser.userId) {
              const data = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                authorName: doc.data().authorName,
                isFeatured: doc.data().isFeatured,
                updated_on: doc.data().updated_on,
              };
              quotes.push(data);
            }
          });
          setUserQuotes(quotes);
        });
    }
  }, [currentUser]);

  const addShayri = async (e) => {
    e.preventDefault();
    try {
      const data = {
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        title: shayriTitle.current.value,
        description: shayriContent.current.value,
        rating: [{ 0: 0 }, { 0: 0 }, { 0: 0 }, { 0: 0 }, { 0: 0 }],
        updated_on: new Date().toString(),
        social_link: shayriSocialLink.current.value,
        userId: currentUser.userId,
      };
      await db.collection('Shayris').add(data);
      setUserShayris([data, ...userShayris]);
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
      const data = {
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        title: kavitaTitle.current.value,
        description: kavitaContent.current.value,
        rating: [{ 0: 0 }, { 0: 0 }, { 0: 0 }, { 0: 0 }, { 0: 0 }],
        updated_on: new Date().toString(),
        social_link: kavitaSocialLink.current.value,
        userId: currentUser.userId,
      };
      await db.collection('Poems').add(data);
      setUserKavitas([data, ...userKavitas]);
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
      const data = {
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        description: quoteContent.current.value,
        updated_on: new Date().toString(),
        userId: currentUser.userId,
      };
      await db.collection('Quotes').add(data);
      setUserQuotes([data, ...userQuotes]);
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
            description: blogContent.current.value,
            categories: blogCategories.current.value.split(','),
            social_link: blogSocialLink.current.value,
            images: [data.url],
            rating: [{ 0: 0 }, { 0: 0 }, { 0: 0 }, { 0: 0 }, { 0: 0 }],
            updated_on: new Date().toString(),
            userId: currentUser.userId,
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
        <div>
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
                    setShowShayriForm(false);
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
                    setShowBlogForm(false);
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
                    setShowBlogForm(false);
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
                    setShowBlogForm(false);
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
                      <label for='exampleInputEmail1'>categories</label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='categories'
                        ref={blogCategories}
                      />
                    </div>
                    <div class='form-group'>
                      <label for='exampleInputEmail1'>social link</label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='title'
                        ref={blogSocialLink}
                      />
                    </div>
                    <div class='form-group'>
                      <label for='exampleInputPassword1'>Content</label>
                      <textarea
                        type='text'
                        class='form-control'
                        id='exampleInputPassword1'
                        placeholder='blog'
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
                      <label for='exampleInputEmail1'>social link</label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='title'
                        ref={shayriSocialLink}
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
                      <label for='exampleInputEmail1'>social link</label>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='title'
                        ref={kavitaSocialLink}
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
        <div className='p-5'>
          <div className='container d-flex justify-content-center p-4'>
            <h2 style={{ fontFamily: 'Dancing Script' }}>My Shayaris</h2>
          </div>
          {userShayris.map(
            ({
              img,
              id,
              description,
              title,
              authorName,
              isFeatured,
              updated_on,
            }) => {
              return (
                <div>
                  <Card
                    img={img}
                    content={description}
                    title={title}
                    date={updated_on}
                    url={`/shayaris/${id}`}
                    author={authorName}
                    deleteOption={true}
                    collection={'Shayris'}
                    id={id}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className='p-5'>
          <div className='container d-flex justify-content-center p-4'>
            <h2 style={{ fontFamily: 'Dancing Script' }}>My Blogs</h2>
          </div>
          {userBlogs.map(
            ({ id, image, description, title, authorName, updated_on }) => {
              return (
                <Card
                  img={image}
                  content={description}
                  title={title}
                  author={authorName}
                  date={updated_on}
                  url={`/blogs/${id}`}
                  deleteOption={true}
                  collection={'Blogs'}
                  id={id}
                />
              );
            }
          )}
        </div>
        <div className='p-5'>
          <div className='container d-flex justify-content-center p-4'>
            <h2 style={{ fontFamily: 'Dancing Script' }}>My kavitas</h2>
          </div>
          {userKavitas.map(
            ({ img, description, title, updated_on, id, authorName }) => {
              return (
                <Card
                  img={img}
                  content={description}
                  title={title}
                  date={updated_on}
                  url={`/kavitas/${id}`}
                  author={authorName}
                  deleteOption={true}
                  collection={'Poems'}
                  id={id}
                />
              );
            }
          )}
        </div>
        <div className='p-5'>
          <div className='container d-flex justify-content-center p-4'>
            <h2 style={{ fontFamily: 'Dancing Script' }}>My quotesc</h2>
          </div>
          {userQuotes.map(
            ({
              img,
              description,
              title,
              updated_on,
              id,
              authorName,
              isApproved,
            }) => {
              return (
                <Card
                  img={img}
                  id={id}
                  content={description}
                  title={title}
                  date={updated_on}
                  url={`/quotes/${id}`}
                  author={authorName}
                  isApproved={isApproved}
                  deleteOption={true}
                  collection={'Quotes'}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
