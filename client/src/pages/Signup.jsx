import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Signup</h2>
      <button onClick={() => navigate('/login')}>Signup (Demo)</button>
    </div>
  );
}

export default Signup;
