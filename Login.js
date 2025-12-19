import React, { useState } from "react";
import "./Login.css";

function Login({ switchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your account</p>

        <form>
          <div className="form-group">
            <label>Business Email</label>
            <input type="email" placeholder="name@company.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>
          </div>

          <div className="form-extra">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span className="link">Forgot Password?</span>
          </div>

          <button className="auth-btn">Sign In</button>

          <p className="switch-auth">
            Don’t have an account?{" "}
            <span className="link" onClick={switchToSignup}>
              Create Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
