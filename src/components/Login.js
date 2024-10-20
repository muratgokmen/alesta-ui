// src/components/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/customers";
    // Giriş doğrulama işlemi (örnek olarak sabit kullanıcı bilgileri kullanılmıştır)
    /*if (email === 'admin@example.com' && password === 'password') {
      history.push('/users');
    } else {
      setError('Invalid credentials');
    }*/
  };

  return (
    <div className="container">
      <div className="leftColumn">
        <h1>Welcome</h1>
        <p>Please log in to continue</p>
      </div>
      <div className="rightColumn">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {/* //{error && <div className="error">{error}</div>} */}
          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="button" type="submit">Login</button>
     
        </form>
      </div>
    </div>
  );
};

export default Login;
