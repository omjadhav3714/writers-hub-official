import React, { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import writer from '../../images/writer.png';

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { LogIn } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();

  if (currentUser) {
    history.push('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await LogIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(console.log(error.message));
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-10 col-xl-9 mx-auto'>
            <div class='card flex-row my-5 border-0 shadow rounded-3 overflow-hidden'>
              <div class='card-img-left d-flex justify-content-center align-items-center text-dark'>
                <div
                  style={{
                    width: '150px',
                    fontSize: '50px',
                    fontFamily: 'Dancing Script',
                  }}
                >
                  Shayris Kavitas Quotes and Blogs
                </div>
              </div>
              <div class='card-body p-4 p-sm-5 bg-light'>
                <div>
                  <p
                    class='card-title text-center mb-5'
                    style={{ fontFamily: 'Dancing Script', fontSize: '30px' }}
                  >
                    <span className='p-2'>
                      <img src={writer} alt='' width='55' height='50' />
                    </span>
                    Writers hub
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class='form-floating mb-3'>
                    <input
                      type='email'
                      class='form-control'
                      id='floatingInputEmail'
                      placeholder='name@example.com'
                      ref={emailRef}
                    />
                    <label for='floatingInputEmail'>Email address</label>
                  </div>

                  <hr />

                  <div class='form-floating mb-3'>
                    <input
                      type='password'
                      class='form-control'
                      id='floatingPassword'
                      placeholder='Password'
                      ref={passwordRef}
                    />
                    <label for='floatingPassword'>Password</label>
                  </div>

                  <div class='d-grid mb-2'>
                    <button
                      class='btn btn-lg btn-primary btn-login fw-bold text-uppercase'
                      type='submit'
                    >
                      Sign in
                    </button>
                  </div>

                  <Link class='d-block text-center mt-2 small' to='/signup'>
                    Dont have an account? Register
                  </Link>

                  <Link
                    class='d-block text-center mt-2 small'
                    to='resetpassword'
                  >
                    Forgot password ?
                  </Link>

                  <hr class='my-4' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
