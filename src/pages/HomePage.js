import React from 'react';
import Carausal from '../components/Carausal';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Blogs from './../components/Blogs/Blogs';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carausal />
      <div
        style={{
          backgroundImage: 'linear-gradient(15deg, #42275a 0%, #734b6d 100%)',
          paddingLeft: '5px',
        }}
      >
        <Blogs headline={`Featured Blogs`} />
      </div>
      <div
        style={{
          backgroundColor: '#68527b',
        }}
      >
        <Blogs headline={`Trending Shayaris`} />
      </div>
      <div>
        <Footer
          style={{
            backgroundColor: '#68527b',
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
