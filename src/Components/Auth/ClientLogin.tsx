import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const ClientLogin: React.FC = () => {
  const [email, setEmail] = useState('vashmwaimall@gmail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-card">
          {/* Header Section */}
          <div className="login-header">
            <div className="studio-brand">
              <div className="logo-container">
                <div className="logo-icon">B2B</div>
              </div>
              <div className="studio-info">
                <h1 className="studio-title">BeatToBeat Studio</h1>
                <p className="studio-subtitle">Est. 2010 | 14 Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="login-form-section">
            <div className="form-header">
              <h2 className="form-title">Client Login</h2>
              <p className="form-subtitle">Book classes and manage your account</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button type="submit" className="login-button">
                Client Login
              </button>

              {/* Sign Up Link */}
              <div className="signup-section">
                <p className="signup-text">
                  Don't have an account?{' '}
                  <Link to="/signup" className="signup-link">
                    Sign up here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;