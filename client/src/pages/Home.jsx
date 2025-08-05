import React, { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckProfile = async () => {
    try {
      const response = await fetch('http://localhost:8001/check-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Backend request failed');
      }

      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (err) {
      console.error('Error:', err);
      setError('Backend not reachable or invalid response');
      setResult(null);
    }
  };

  return (
    <div className="home-container">
      <h1>Fake Profile Identification</h1>
      <input
        type="text"
        value={url}
        placeholder="Enter profile URL"
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: '60%', padding: '10px' }}
      />
      <button
        onClick={handleCheckProfile}
        style={{ marginLeft: '10px', padding: '10px 20px', background: 'green', color: 'white' }}
      >
        Check Profile
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <strong>Status:</strong> {result.status} <br />
          <strong>Reason:</strong> {result.reason}
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          <strong>Status:</strong> error <br />
          <strong>Reason:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default Home;
