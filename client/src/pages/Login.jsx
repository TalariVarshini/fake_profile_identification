import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => navigate('/')}>Login (Demo)</button>
    </div>
  );
}

export default Login;
