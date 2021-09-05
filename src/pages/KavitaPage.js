import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { ArrayOfObjects } from '../components/Blogs/ArrayOfObjects';
import Card from '../components/Blogs/Card';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { db } from '../firebase';

const KavitaPage = () => {
  const [kavitas, setKavitas] = useState([]);

  useEffect(() => {
    db.collection('Poems')
      .get()
      .then((snapshot) => {
        const poems = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          poems.push(data);
        });
        setKavitas(poems);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ height: '100vh', width: '100vw' }}>
        <Navbar backButton={true} />
        <div className='container d-flex justify-content-center p-4'>
          <h2 style={{ fontFamily: 'Dancing Script' }}>Kavitas</h2>
        </div>
        <div
          className='container d-flex flex-direction-row flex-wrap justify-content-center my-3'
          style={{ width: '100vw' }}
        >
          {kavitas.map(({ img, description, title, updated_on }) => {
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
        <Footer />
      </div>
    </motion.div>
  );
};

export default KavitaPage;
