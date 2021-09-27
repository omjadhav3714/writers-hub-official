import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar';
import { db } from '../../firebase';

const BlogApprovals = () => {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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

  const handleApprove = async () => {
    try {
      await db.collection('Blogs').doc(id).update({
        isApproved: true,
      });
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleNotApprove = async () => {
    try {
      await db.collection('Blogs').doc(id).delete();
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      {blog ? (
        <div className='container mt-5'>
          <figure className='mb-4'>
            <img
              className='img-fluid'
              src={blog.images[0]}
              alt='hello'
              style={{
                height: '100px',
                width: '100px',
                borderRadius: '5%',
              }}
            />
          </figure>
          <div>
            <article>
              {success && (
                <div class='alert alert-success' role='alert'>
                  Success!
                </div>
              )}
              {error && (
                <div class='alert alert-danger' role='alert'>
                  Opps something went wrong
                </div>
              )}
              <header className='mb-4'>
                <h1 className='fw-bolder mb-1'>{blog.title}</h1>
                <button className='btn btn-success' onClick={handleApprove}>
                  Approve
                </button>
                <button className='btn btn-danger' onClick={handleNotApprove}>
                  Disapprove
                </button>
                <div className='text-muted fst-italic mb-2'>
                  Posted on {blog.updated_on}, 2021 <br /> by {blog.authorName}
                </div>
              </header>

              <section
                className='mb-5 '
                style={{ textAlign: 'justify', width: '300px' }}
              >
                <p className='fs-5 mb-4'>{blog.description}</p>
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

export default BlogApprovals;
