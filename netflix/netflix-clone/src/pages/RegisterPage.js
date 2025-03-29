import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = ({ onRegisterSuccess }) => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onRegisterSuccess={onRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;
