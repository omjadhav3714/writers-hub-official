import React from 'react';
import Carausal from '../components/Carausal';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Blogs from './../components/Blogs/Blogs';
import { motion } from 'framer-motion';

const HomePage = () => {
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
        <div
          style={{
            backgroundColor: '#68527b',
          }}
          id='shayari'
        >
          <Blogs headline={`Trending Shayaris`} />
        </div>
        <div
          style={{
            backgroundColor: '#68527b',
          }}
          id='kavita'
        >
          <Blogs headline={`kavita`} />
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
