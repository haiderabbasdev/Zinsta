import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const FoodPartnerLogin = () => {

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value; 

    const response = await axios.post("http://localhost:3000/api/auth/food-partner/login", {
      email,
      password
    },
    {
      withCredentials: true
    });
    
    console.log(response.data);
    navigate("/create-food");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">Zinsta</div>
          <span className="auth-badge">Food Partner</span>
          <h1 className="auth-title">Partner sign in</h1>
          <p className="auth-subtitle">Access your restaurant dashboard</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-login-email">Business email</label>
            <input
              className="auth-input"
              id="fp-login-email"
              name='email'
              type="email"
              placeholder="contact@restaurant.com"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-login-password">Password</label>
            <input
              className="auth-input"
              id="fp-login-password"
              name='password'
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="auth-btn" type="submit">Sign in</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <p className="auth-footer">
          Want to partner with us? <Link to="/food-partner/register">Register now</Link>
        </p>
        <p className="auth-footer">
          Not a restaurant? <Link to="/user/login">Sign in as User</Link>
        </p>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
