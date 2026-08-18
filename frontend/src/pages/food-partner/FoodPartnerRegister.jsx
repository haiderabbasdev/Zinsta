import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const restaurantName = e.target.restaurantName.value; 
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const contactName = firstName + " " + lastName;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;

    const respone = await axios.post("http://localhost:3000/api/auth/food-partner/register", {
      name: restaurantName,
      contactName: contactName,
      email,
      phone,
      address,
      password,
    },
    {
      withCredentials: true
    })

    console.log(respone.data);

    navigate("/create-food");

  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">Zinsta</div>
          <span className="auth-badge">Food Partner</span>
          <h1 className="auth-title">Partner with us</h1>
          <p className="auth-subtitle">Register your restaurant on Zinsta</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}> 
          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-restaurant-name">Restaurant name</label>
            <input
              className="auth-input"
              id="fp-restaurant-name"
              name='restaurantName'
              type="text"
              placeholder="Your restaurant name"
            />
          </div>

          <div className="auth-row">
            <div className="auth-field">
              <label className="auth-label" htmlFor="fp-owner-first-name">Owner first name</label>
              <input
                className="auth-input"
                id="fp-owner-first-name"
                name='fp-owner-first-name'
                type="text"
                placeholder="John"
              />
            </div>
            <div className="auth-field">
              <label className="auth-label" htmlFor="fp-owner-last-name">Owner last name</label>
              <input
                className="auth-input"
                id="fp-owner-last-name"
                name='fp-owner-last-name'
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-email">Business email</label>
            <input
              className="auth-input"
              id="fp-email"
              name='email'
              type="email"
              placeholder="contact@restaurant.com"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-phone">Phone number</label>
            <input
              className="auth-input"
              id="fp-phone"
              name='phone'
              type="tel"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-address">Restaurant address</label>
            <textarea
              className="auth-input"
              id="fp-address"
              name='address'
              rows="3"
              placeholder="Full address of your restaurant"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="fp-password">Password</label>
            <input
              className="auth-input"
              id="fp-password"
              name='password'
              type="password"
              placeholder="Create a strong password"
            />
          </div>

          <button className="auth-btn" type="submit">Register restaurant</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <p className="auth-footer">
          Already a partner? <Link to="/food-partner/login">Sign in</Link>
        </p>
        <p className="auth-footer">
          Not a restaurant? <Link to="/user/register">Register as User</Link>
        </p>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
