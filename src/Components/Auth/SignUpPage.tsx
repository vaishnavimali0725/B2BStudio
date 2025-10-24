// Components/Auth/SignUpPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'client'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', formData);
    // Handle signup logic
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="studio-info">
          <h1>BeatToBeat Studio</h1>
          <p className="excellence-text">Est. 2010 | 14 Years of Excellence</p>
        </div>
        
        <nav className="login-nav">
          <Link to="/">Home</Link>
          <Link to="/intensive-programme">Intensive Programme</Link>
          <Link to="/studio-classes">In Studio Classes</Link>
          <Link to="/studio-booking">Studio Booking</Link>
          <Link to="/instructors">Instructor & Qualification</Link>
        </nav>
      </header>

      <div className="login-section">
        <div className="login-card">
          <div className="login-form-container">
            <h2>Create Your Account</h2>
            <p className="login-subtitle">
              Join BeatToBeat Studio and start your dance journey
            </p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="userType">I am a</label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="client">Client/Student</option>
                  <option value="instructor">Instructor</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-btn">
                Create Account
              </button>
            </form>

            <div className="signup-section">
              <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;