import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic based on isAdminLogin
    console.log(`${isAdminLogin ? 'Admin' : 'Client'} Login:`, formData);
    
    // Redirect based on user type
    if (isAdminLogin) {
      window.location.href = '/admin/dashboard';
    } else {
      window.location.href = '/client/dashboard';
    }
  };

  return (
    <div className="login-container">
      {/* Background Animation */}
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      {/* Main Login Window */}
      <div className="login-window">
        <div className="login-card">
          {/* Studio Brand */}
          <div className="studio-brand-mini">
            <div className="logo">
              <div className="logo-icon">B2B</div>
            </div>
            <div className="studio-info-mini">
              <h1>BeatToBeat Studio</h1>
              <p className="excellence-text">Est. 2010 | 14 Years of Excellence</p>
            </div>
          </div>

          {/* Login Toggle */}
          <div className="login-toggle">
            <button 
              className={`toggle-btn ${!isAdminLogin ? 'active' : ''}`}
              onClick={() => setIsAdminLogin(false)}
            >
              <span className="btn-icon">👤</span>
              Client Login
            </button>
            <button 
              className={`toggle-btn ${isAdminLogin ? 'active' : ''}`}
              onClick={() => setIsAdminLogin(true)}
            >
              <span className="btn-icon">⚙️</span>
              Admin Login
            </button>
          </div>

          {/* Form Content */}
          <div className="login-form-container">
            <div className="form-header">
              <h2>{isAdminLogin ? 'Admin Portal' : 'Client Portal'}</h2>
              <p className="login-subtitle">
                {isAdminLogin 
                  ? 'Access the studio management system' 
                  : 'Book classes and manage your account'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                  <div className="input-focus-border"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                  <div className="input-focus-border"></div>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <span className="checkmark"></span>
                  </div>
                  Remember me
                </label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="login-btn">
                <span className="btn-text">
                  {isAdminLogin ? 'Admin Login' : 'Client Login'}
                </span>
                <span className="btn-arrow">→</span>
              </button>
            </form>

            {!isAdminLogin && (
              <div className="signup-section">
                <p>Don't have an account? <a href="/signup" className="signup-link">Sign up here</a></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;