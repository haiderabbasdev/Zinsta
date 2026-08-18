import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const respone = await axios.post("http://localhost:3000/api/auth/user/register", {
      fullName:firstName + " " + lastName,
      email,
      password,
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
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-subtitle">Join Zinsta and start ordering your favorites</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-row">
            <div className="auth-field">
              <label className="auth-label" htmlFor="user-first-name">First name</label>
              <input
                className="auth-input"
                id="user-first-name"
                name='firstName'
                type="text"
                placeholder="John"
              />
            </div>
            <div className="auth-field">
              <label className="auth-label" htmlFor="user-last-name">Last name</label>
              <input
                className="auth-input"
                id="user-last-name"
                name='lastName'
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="user-email">Email</label>
            <input
              className="auth-input"
              id="user-email"
              name='email'
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="user-password">Password</label>
            <input
              className="auth-input"
              id="user-password"
              name='password'
              type="password"
              placeholder="Create a strong password"
            />
          </div>

          <button className="auth-btn" type="submit">Create account</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <p className="auth-footer">
          Already have an account? <Link to="/user/login">Sign in</Link>
        </p>
        <p className="auth-footer">
          Are you a restaurant? <Link to="/food-partner/register">Register as Food Partner</Link>
        </p>
      </div>
    </div>
  )
}

export default UserRegister
