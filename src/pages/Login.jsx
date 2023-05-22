import React, { useState } from 'react';
import '../stylesheets/pages/Login.scss';
import Button from '../components/Button/Button';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { signIn, createUser, signWithGoogle } from '../api/firebase';

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [form, setFrom] = useState({ email: '', password: '' });
  const handleToggle = () => setIsSignIn((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSignIn) {
      await createUser(form);
    }
    await signIn(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  
  const handleGoggle = async () => {
    await signWithGoogle();
  };

  return (
    <div className='login_area'>
      <div className='login_box'>
        <h2>{isSignIn ? 'LOGIN' : 'Create Account with Email & password'}</h2>
        <form className='form_login' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='E-mail'
            name='email'
            value={form.email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={form.password}
            onChange={handleChange}
          />
          {isSignIn && <Button type='submit'>LOGIN</Button>}
          {!isSignIn && <Button type='submit'>CREATE ACCOUNT</Button>}
        </form>
        <button className='btn_sign_in' onClick={handleToggle}>
          {isSignIn ? 'Create Account' : ' Sign In'}
        </button>
        <Button type='white' onClick={handleGoggle}>
          Continue with Google <BsGoogle />
        </Button>
        <Button type='white'>
          Continue with Github <BsGithub />
        </Button>
      </div>
    </div>
  );
}
