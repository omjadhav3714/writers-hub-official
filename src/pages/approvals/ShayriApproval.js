import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar';
import { db } from '../../firebase';

const ShayriApprovals = () => {
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

  const handleApprove = () => {
    db.collection('Shayris').doc(id).update({
      isApproved: true,
    });
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      {shayri ? (
        <div className='container mt-5'>
          <div>
            <article>
              <header className='mb-4'>
                <h1 className='fw-bolder mb-1'>{shayri.title}</h1>
                <button className='btn btn-success' onClick={handleApprove}>
                  Approve
                </button>
                <div className='text-muted fst-italic mb-2'>
                  Posted on {shayri.updated_on}, 2021 <br /> by{' '}
                  {shayri.authorName}
                </div>
              </header>

              <section
                className='mb-5 '
                style={{ textAlign: 'justify', width: '300px' }}
              >
                <p className='fs-5 mb-4'>{shayri.description}</p>
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

export default ShayriApprovals;
