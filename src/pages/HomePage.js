/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Carausal from '../components/Carausal/Carausal';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import Content from 'components/Content/Content';
import Trending from 'components/Trending/Trending';
import Testimonial from 'components/Testimonial/Testimonial';
import FAQ from 'components/FAQ/FAQ';

const HomePage = () => {
  const [featBlogs, setFeatBlogs] = useState([]);
  const [featuredShayris, setFeaturedShayris] = useState([]);
  const [featuredKavitas, setFeaturedKavitas] = useState([]);
  const [featuredQuotes, setFeaturedQuotes] = useState([]);
  const tabs =
  {
    "shayaris": featuredShayris,
    "blogs": featBlogs,
    "kavitas": featuredKavitas,
    "quotes": featuredQuotes,
  };

  useEffect(() => {
    db.collection('Blogs')
      .get()
      .then((snapshot) => {
        const blogs = [];
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            categories: doc.data().categories,
            description: doc.data().description,
            authorName: doc.data().authorName,
            isFeatured: doc.data().isFeatured,
            updated_on: doc.data().updated_on,
            isApproved: doc.data().isApproved,
            userId: doc.data().userId,
          };
          if (data.isFeatured) {
            blogs.push(data);
          }
        });
        setFeatBlogs(blogs);
      });
  }, []);

  useEffect(() => {
    db.collection('Shayris')
      .get()
      .then((snapshot) => {
        const feat_shayris = [];
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            authorName: doc.data().authorName,
            isFeatured: doc.data().isFeatured,
            updated_on: doc.data().updated_on,
            isApproved: doc.data().isApproved,
            userId: doc.data().userId,
          };
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
          const data = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            authorName: doc.data().authorName,
            isFeatured: doc.data().isFeatured,
            updated_on: doc.data().updated_on,
            isApproved: doc.data().isApproved,
            userId: doc.data().userId,
          };
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
          const data = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            authorName: doc.data().authorName,
            isFeatured: doc.data().isFeatured,
            updated_on: doc.data().updated_on,
            isApproved: doc.data().isApproved,
            userId: doc.data().userId,
          };
          if (data.isFeatured) {
            feat_quotes.push(data);
          }
        });
        setFeaturedQuotes(feat_quotes);
      });
  }, []);

  // if (!currentUser) {
  //   history.push('/login');
  // }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Navbar />
        <Carausal />
        <Content />
        <Trending tabs={tabs} />
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
