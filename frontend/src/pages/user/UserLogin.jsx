import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const respone = await axios.post("http://localhost:3000/api/auth/user/login", {
      email,
      password
    },
    {
      withCredentials: true
    })
  
    console.log(respone.data);
    
    navigate("/");

  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">Zinsta</div>
          <span className="auth-badge">User</span>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to your Zinsta account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label" htmlFor="user-login-email">Email</label>
            <input
              className="auth-input"
              id="user-login-email"
              name='email'
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="user-login-password">Password</label>
            <input
              className="auth-input"
              id="user-login-password"
              name='password'
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="auth-btn" type="submit">Sign in</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <p className="auth-footer">
          Don't have an account? <Link to="/user/register">Create one</Link>
        </p>
        <p className="auth-footer">
          Are you a restaurant? <Link to="/food-partner/login">Sign in as Food Partner</Link>
        </p>
      </div>
    </div>
  )
}

export default UserLogin
