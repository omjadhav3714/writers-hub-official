import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar';
import { db } from '../../firebase';

const QuoteApprovals = () => {
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

  const handleApprove = () => {
    db.collection('Quotes').doc(id).update({
      isApproved: true,
    });
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      {quote ? (
        <div className='container mt-5'>
          <div>
            <article>
              <header className='mb-4'>
                <button className='btn btn-success' onClick={handleApprove}>
                  Approve
                </button>
                <div className='text-muted fst-italic mb-2'>
                  Posted on {quote.updated_on}, 2021 <br /> by{' '}
                  {quote.authorName}
                </div>
              </header>

              <section
                className='mb-5 '
                style={{ textAlign: 'justify', width: '300px' }}
              >
                <p className='fs-5 mb-4'>{quote.description}</p>
              </section>
            </article>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default QuoteApprovals;
