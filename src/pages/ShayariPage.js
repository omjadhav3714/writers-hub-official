import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrayOfObjects } from '../components/Blogs/ArrayOfObjects';
import Card from '../components/Blogs/Card';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { db } from '../firebase';

const ShayariPage = () => {
  const [shayris, setShayris] = useState([]);

  useEffect(() => {
    db.collection('Shayris')
      .get()
      .then((snapshot) => {
        const shayris = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          shayris.push(data);
        });
        console.log(shayris);
        setShayris(shayris);
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
          <h2 style={{ fontFamily: 'Dancing Script' }}>Shayaris</h2>
        </div>
        <div
          className='container d-flex flex-direction-row flex-wrap justify-content-center my-3'
          style={{ width: '100vw' }}
        >
          {shayris.map(({ img, description, title, key }) => {
            return (
              <Card
                img={img}
                content={description}
                title={title}
                date={`Published: 2021-17-02`}
                url={`/shayaris/${key}`}
                id={key}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default ShayariPage;
