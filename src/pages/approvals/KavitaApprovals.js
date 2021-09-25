import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar';
import { db } from '../../firebase';

const KavitaApprovals = () => {
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

  const handleApprove = () => {
    db.collection('Poems').doc(id).update({
      isApproved: true,
    });
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      {kavita ? (
        <div className='container mt-5'>
          <div>
            <article>
              <header className='mb-4'>
                <h1 className='fw-bolder mb-1'>{kavita.title}</h1>
                <button className='btn btn-success' onClick={handleApprove}>
                  Approve
                </button>
                <div className='text-muted fst-italic mb-2'>
                  Posted on {kavita.updated_on}, 2021 <br /> by{' '}
                  {kavita.authorName}
                </div>
              </header>

              <section
                className='mb-5 '
                style={{ textAlign: 'justify', width: '300px' }}
              >
                <p className='fs-5 mb-4'>{kavita.description}</p>
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

export default KavitaApprovals;
