import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState();

  useEffect(() => {
    const single = db.collection('Blogs').doc(id);

    single
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let data = doc.data();
          setBlog(data);
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      {blog ? (
        <div class='container mt-5'>
          <div class='row'>
            <div class='col-lg-8'>
              <article>
                <header class='mb-4'>
                  <h1 class='fw-bolder mb-1'>{blog.title}</h1>

                  <div class='text-muted fst-italic mb-2'>
                    Posted on {blog.updated_on}, 2021 by {blog.authorName}
                  </div>

                  {blog.categories.map((c) => (
                    <p
                      class='badge bg-secondary text-decoration-none link-light'
                      href='#!'
                    >
                      {c}
                    </p>
                  ))}
                </header>
                <figure class='mb-4'>
                  <img
                    class='img-fluid rounded'
                    src={blog.images[0]}
                    alt='hello'
                    style={{ height: '520px', width: '800px' }}
                  />
                </figure>

                <section class='mb-5'>
                  <p class='fs-5 mb-4'>{blog.description}</p>
                </section>
              </article>
            </div>

            <div class='col-lg-4'>
              <div
                class='card mb-4 text-dark'
                style={{ backgroundColor: '#dcdcdc' }}
              >
                <div class='card-header'>More.....</div>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-sm-6'>
                      <ul class='list-unstyled mb-0'>
                        <li>
                          <Link to='/blogs' style={{ textDecoration: 'none' }}>
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/shayaris'
                            style={{ textDecoration: 'none' }}
                          >
                            Shayris
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/kavitas'
                            style={{ textDecoration: 'none' }}
                          >
                            Kavitas
                          </Link>
                        </li>
                        <li>
                          <Link to='/quotes' style={{ textDecoration: 'none' }}>
                            Quotes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='card mb-4 text-dark'
                style={{ backgroundColor: '#dcdcdc' }}
              >
                <div class='card-header'>Important links</div>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-sm-6'>
                      <ul class='list-unstyled mb-0'></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
