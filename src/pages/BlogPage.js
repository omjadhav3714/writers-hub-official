import React from 'react';
import Navbar from '../components/Navbar';
import Blogs from '../components/Blogs/Blogs';
import { ArrayOfObjects } from '../components/Blogs/ArrayOfObjects';
import Card from '../components/Blogs/Card';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ height: '100vh', width: '100vw' }}>
        <Navbar backButton={true} />
        <div className='container d-flex justify-content-center p-4'>
          <h1 style={{ fontFamily: 'Dancing Script' }}>Blogs</h1>
        </div>
        <div
          className='container d-flex flex-direction-row flex-wrap justify-content-center my-5'
          style={{ width: '100vw' }}
        >
          {ArrayOfObjects.map(({ img, content, title }) => {
            return (
              <Card
                img={img}
                content={content}
                title={title}
                date={`Published: 2021-17-02`}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default BlogPage;