import React, { useEffect, useState } from 'react';
import Carausal from '../components/Carausal';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Blogs from './../components/Blogs/Blogs';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import Card from '../components/Blogs/Card';

const HomePage = () => {
  const [featuredShayris, setFeaturedShayris] = useState([]);

  const [featuredKavitas, setFeaturedKavitas] = useState([]);

  const [featuredQuotes, setFeaturedQuotes] = useState([]);

  useEffect(() => {
    db.collection('Shayris')
      .get()
      .then((snapshot) => {
        const feat_shayris = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.isFeatured) {
            feat_shayris.push(data);
          }
        });
        setFeaturedShayris(feat_shayris);
      });
  }, []);

  useEffect(() => {
    db.collection('Poems')
      .get()
      .then((snapshot) => {
        const feat_kavitas = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.isFeatured) {
            feat_kavitas.push(data);
          }
        });
        setFeaturedKavitas(feat_kavitas);
      });
  }, []);

  useEffect(() => {
    db.collection('Quotes')
      .get()
      .then((snapshot) => {
        const feat_quotes = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.isFeatured) {
            feat_quotes.push(data);
          }
        });
        setFeaturedQuotes(feat_quotes);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Navbar backButton={false} />
        <Carausal />
        <section id='blog'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(15deg, #42275a 0%, #734b6d 100%)',
              paddingLeft: '5px',
            }}
          >
            <Blogs headline={`Featured Blogs`} />
          </div>
        </section>
        <div>
          <div
            className='d-flex flex-direction-row flex-wrap justify-content-center py-5'
            style={{ width: '100vw', backgroundColor: 'white' }}
          >
            <h2
              className='pt-3 title text-dark'
              style={{ paddingLeft: '20px', fontFamily: 'Dancing Script' }}
            >
              trending Shayris
            </h2>

            <div
              className='container d-flex flex-direction-row flex-wrap justify-content-center my-5'
              style={{ width: '100vw' }}
            >
              {featuredShayris.map(
                ({ img, description, title, updated_on }) => {
                  return (
                    <Card
                      img={img}
                      content={description}
                      title={title}
                      date={updated_on}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div
          className='d-flex flex-direction-row flex-wrap justify-content-center py-5'
          style={{ width: '100vw', backgroundColor: 'white' }}
        >
          <h2
            className='pt-3 title text-dark'
            style={{ paddingLeft: '20px', fontFamily: 'Dancing Script' }}
          >
            trending kavitas
          </h2>

          <div
            className='container d-flex flex-direction-row flex-wrap justify-content-center my-5'
            style={{ width: '100vw' }}
          >
            {featuredKavitas.map(({ img, description, title, updated_on }) => {
              return (
                <Card
                  img={img}
                  content={description}
                  title={title}
                  date={updated_on}
                />
              );
            })}
          </div>
        </div>
        <div
          className='d-flex flex-direction-row flex-wrap justify-content-center py-5'
          style={{ width: '100vw', backgroundColor: 'white' }}
        >
          <h2
            className='pt-3 title text-dark'
            style={{ paddingLeft: '20px', fontFamily: 'Dancing Script' }}
          >
            trending quotes
          </h2>

          <div
            className='container d-flex flex-direction-row flex-wrap justify-content-center my-5'
            style={{ width: '100vw' }}
          >
            {featuredQuotes.map(({ img, description, title, updated_on }) => {
              return (
                <Card
                  img={img}
                  content={description}
                  title={title}
                  date={updated_on}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Footer
            style={{
              backgroundColor: '#68527b',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
