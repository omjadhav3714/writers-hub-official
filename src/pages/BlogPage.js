/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Blogs/Card';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

import { db } from '../firebase';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    db.collection('Blogs')
      .get()
      .then((snapshot) => {
        const logs = [];
        snapshot.forEach((doc) => {
          if (doc.data().isApproved === true) {
            const data = {
              id: doc.id,
              title: doc.data().title,
              image: doc.data().images[0],
              categories: doc.data().categories,
              description: doc.data().description,
              authorName: doc.data().authorName,
              isFeatured: doc.data().isFeatured,
              updated_on: doc.data().updated_on,
              isApproved: doc.data().isApproved,
              userId: doc.data().userId,
            };
            logs.push(data);
          }
        });
        setBlogs(logs);
        console.log(blogs);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          minHight: '100vh',
          width: '100vw',
          backgroundColor: '#EFefef',
        }}
      >
        <Navbar backButton={true} />
        <div className="container d-flex justify-content-center p-4">
          <h1 style={{ fontFamily: 'Dancing Script' }}>Blogs</h1>
        </div>
        <div
          className="container d-flex flex-direction-row flex-wrap justify-content-center my-5"
          style={{ width: '100vw' }}
        >
          {blogs.map(
            ({
              id,
              image,
              description,
              title,
              authorName,
              updated_on,
              isApproved,
              userId
            }) => {
              return (
                <Card
                  img={image}
                  content={description}
                  title={title}
                  author={authorName}
                  date={updated_on}
                  url={`/blogs/${authorName}/${id}`}
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

export default BlogPage;
