import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [showShayriForm, setShowShayriForm] = useState(false);
  const [showKavitaForm, setShowKavitaForm] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const shayriTitle = useRef();
  const shayriContent = useRef();
  const kavitaTitle = useRef();
  const kavitaContent = useRef();
  const quoteTitle = useRef();
  const quoteContent = useRef();

  const addShayri = async (e) => {
    e.preventDefault();
    try {
      db.collection('Shayris').add({
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        title: shayriTitle.current.value,
        description: shayriContent.current.value,
        updated_on: new Date().toString(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addKavita = async (e) => {
    e.preventDefault();
    try {
      db.collection('Poems').add({
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        title: kavitaTitle.current.value,
        description: kavitaContent.current.value,
        updated_on: new Date().toString(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addQuote = async (e) => {
    e.preventDefault();
    try {
      db.collection('Quotes').add({
        authorName: currentUser.username,
        isFeatured: false,
        isApproved: false,
        description: quoteContent.current.value,
        updated_on: new Date().toString(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      <div>
        {currentUser && currentUser.username && (
          <div className='ms-3'>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.email}</h1>

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
              {showShayriForm && (
                <form onSubmit={addShayri}>
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
