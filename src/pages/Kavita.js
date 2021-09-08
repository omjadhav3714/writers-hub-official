import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Kavita = () => {
  const { id } = useParams();

  const [kavita, setKavita] = useState();

  useEffect(() => {
    const single = db.collection('Poems').doc(id);

    single
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let data = doc.data();
          setKavita(data);
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {console.log(kavita)}
      <Navbar />
      {kavita ? (
        <div
          className='container'
          style={{
            paddingTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <div class='container mt-5'>
            <div class='row'>
              <div class='col-lg-8'>
                <article>
                  <header class='mb-4'>
                    <h1 class='fw-bolder mb-1'>{kavita.title}</h1>

                    <div class='text-muted fst-italic mb-2'>
                      Posted by {kavita.authorName} on {kavita.updated_on}
                    </div>
                    <a
                      class='badge bg-secondary text-decoration-none link-light'
                      href='#!'
                    >
                      Kavita
                    </a>
                  </header>

                  <section class='mb-5'>
                    <p class='fs-5 mb-4 w-50'>{kavita.description}</p>
                  </section>
                </article>
              </div>

              <div class='col-lg-4'>
                <div
                  class='card mb-4 text-dark'
                  style={{ backgroundColor: '#dcdcdc' }}
                >
                  <div class='card-header'>Categories</div>
                  <div class='card-body'>
                    <div class='row'>
                      <div class='col-sm-6'>
                        <ul class='list-unstyled mb-0'>
                          <li>
                            <Link
                              to='/blogs'
                              style={{ textDecoration: 'none' }}
                            >
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
                            <Link
                              to='/quotes'
                              style={{ textDecoration: 'none' }}
                            >
                              Quotes
                            </Link>
                          </li>
                        </ul>
                      </div>
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

export default Kavita;
