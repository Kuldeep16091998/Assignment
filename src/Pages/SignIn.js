import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUsers } from '../store/userSlice';
import apiClient from '../services/api';
import Form from '../components/common/Form';
import Modal from '../components/common/Modal';

function SignIn({ setIsSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/api/login', { email, password });
      console.log(response.data);
      dispatch(setUsers(response.data));
      console.log(data)
      if (response.data.token === 'QpwL5tke4Pnpja7X4') {
        setIsSignedIn(true);
        navigate('/dashboard');
      }
      else {
        setLoginError('Wrong email or password. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setLoginError('Wrong email or password. Please try again.');
      console.log(loginError);
    }
  };

  const title = 'LOGIN';

  const props = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    title,
  };

  return (
    <>
      <Form props={props} />
      <Modal loginError={loginError} setLoginError={setLoginError} />
    </>
  );
}

export default SignIn;
