import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shayri = () => {
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
        <div style={{ paddingTop: '50px' }}>
          <div>
            <h1
              className='d-flex justify-content-center'
              style={{ fontWeight: '600' }}
            >
              {kavita.title}
            </h1>
          </div>
          <div className='d-flex justify-content-center p-4'>
            <p style={{ width: '350px', fontSize: '22px' }}>
              {kavita.description}
            </p>
          </div>
          <div className='container d-flex justify-content-end p-4 w-50'>
            <p style={{ width: '150px', fontSize: '22px' }}>
              -{kavita.authorName}
            </p>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
      <Footer />
    </div>
  );
};

export default Shayri;
