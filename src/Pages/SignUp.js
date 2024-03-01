import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUsers } from '../store/userSlice';
import apiClient from '../services/api';
import Form from '../components/common/Form';
import Modal from '../components/common/Modal';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("form submit")
    e.preventDefault();
    try {
      const response = await apiClient.post('/api/register', { email, password });
      dispatch(setUsers(response.data));
      navigate('/');
    } catch (error) {
      console.error(error);
      setLoginError('Registration Failed. Please try again.');
    }
  };

  const title="REGISTER";

  const props={
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    title
  }

  return (
    <>
      <Form props={props}></Form>
      <Modal loginError={loginError} setLoginError={setLoginError} />
    </>
  );
};

export default SignUp;
