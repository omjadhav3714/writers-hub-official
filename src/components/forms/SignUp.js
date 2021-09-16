import React, { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { SignUp } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();

  if (currentUser) {
    history.push('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(emailRef.current.value, passwordRef.current.value);
      await SignUp(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      console.log(console.log(error.message));
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {console.log(currentUser)}
      <div
        className='container d-flex justify-content-center text-align-center align-items-center'
        style={{ marginTop: 'auto', marginBottom: 'auto' }}
      >
        <form onSubmit={handleSubmit}>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Username</label>
            <input
              type='text'
              class='form-control'
              placeholder='Enter username'
              ref={usernameRef}
            />
            <small id='emailHelp' class='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              class='form-control'
              placeholder='Enter email'
              ref={emailRef}
            />
            <small id='emailHelp' class='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              class='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              ref={passwordRef}
            />
          </div>
          <div class='form-group '>
            <p>
              already have an account <Link to='/login'>click here</Link>
            </p>
          </div>
          <button type='submit' class='btn btn-primary'>
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
