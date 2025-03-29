import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLoginSuccess }) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
  );
};

export default LoginPage;
