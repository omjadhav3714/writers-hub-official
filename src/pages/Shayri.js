import { data } from 'browserslist';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shayri = () => {
  const { id } = useParams();

  const [shayri, setShayri] = useState();

  useEffect(() => {
    const single = db.collection('Shayris').doc(id);

    single
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let data = doc.data();
          setShayri(data);
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      {shayri ? (
        <div style={{ paddingTop: '50px' }}>
          <div>
            <h2
              className='d-flex justify-content-center'
              style={{ fontWeight: '600' }}
            >
              {shayri.title}
            </h2>
          </div>
          <div className='d-flex justify-content-center p-4'>
            <p style={{ width: '350px', fontSize: '22px' }}>
              {shayri.description}
            </p>
          </div>
          <div className='container d-flex justify-content-end p-4 w-50'>
            <p style={{ width: '150px', fontSize: '22px' }}>
              -{shayri.authorName}
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
