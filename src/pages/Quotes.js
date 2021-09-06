import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shayri = () => {
  const { id } = useParams();

  const [quote, setQuote] = useState();

  useEffect(() => {
    const single = db.collection('Quotes').doc(id);

    single
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let data = doc.data();
          setQuote(data);
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      {quote ? (
        <div style={{ paddingTop: '50px' }}>
          <div>
            <h2 className='d-flex justify-content-center'>{quote.title}</h2>
          </div>
          <div className='d-flex justify-content-center p-4'>
            <p style={{ width: '450px', fontSize: '22px' }}>
              {quote.description}
            </p>
          </div>
          <div className='container d-flex justify-content-end p-4 w-50'>
            <p style={{ width: '150px', fontSize: '22px' }}>
              -{quote.authorName}
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
