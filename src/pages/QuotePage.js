import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';

import Card from '../components/Blogs/Card';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { db } from '../firebase';

const KavitaPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    db.collection('Quotes')
      .get()
      .then((snapshot) => {
        const quotes = [];
        snapshot.forEach((doc) => {
          if (doc.data().isApproved === true) {
            const data = {
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              authorName: doc.data().authorName,
              isFeatured: doc.data().isFeatured,
              updated_on: doc.data().updated_on,
              isApproved: doc.data().isApproved,
              userId:doc.data().userId,
            };
            quotes.push(data);
          }
        });
        setQuotes(quotes);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ width: '100vw', backgroundColor: '#efefef' }}>
        <Navbar backButton={true} />
        <div className='container d-flex justify-content-center p-4'>
          <h2 style={{ fontFamily: 'Dancing Script' }}>Quotes</h2>
        </div>
        <div
          className='container d-flex flex-direction-row flex-wrap justify-content-center my-3'
          style={{ width: '100vw' }}
        >
          {quotes.map(
            ({
              img,
              description,
              title,
              updated_on,
              id,
              authorName,
              isApproved,
              userId
            }) => {
              return (
                <Card
                  img={img}
                  content={description}
                  title={title}
                  date={updated_on}
                  url={`/quotes/${authorName}/${id}`}
                  author={authorName}
                  isApproved={isApproved}
                  userId={userId}
                />
              );
            }
          )}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default KavitaPage;
