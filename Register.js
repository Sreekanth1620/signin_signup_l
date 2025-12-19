import React, { useState } from "react";
import "./Register.css";

function Register({ switchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");

  // Password validation
  const validatePassword = (value) => {
    const regex =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{5,9}$/;

    if (!regex.test(value)) {
      setPasswordError(
        "Password must be 6–10 chars, start with capital letter, include number & special character"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Your Account</h2>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input placeholder="Enter full name" />
          </div>

          <div className="form-group">
            <label>Business Email</label>
            <input placeholder="name@company.com" />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input placeholder="Your company or organization" />
          </div>

          <div className="form-group">
            <label>Designation / Role</label>
            <input placeholder="Founder, Manager, CEO, etc." />
          </div>

          {/* Industry */}
          <div className="form-group">
            <label>Industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Select Industry</option>
              <option>Information Technology</option>
              <option>Finance</option>
              <option>Manufacturing</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Retail</option>
              <option>Logistics</option>
              <option>Real Estate</option>
              <option>Marketing & Advertising</option>
              <option>E-commerce</option>
              <option>Telecommunications</option>
              <option>Consulting</option>
              <option>Startup</option>
              <option>Other</option>
            </select>
          </div>

          {/* Other Industry Input */}
          {industry === "Other" && (
            <div className="form-group">
              <label>Please specify industry</label>
              <input
                placeholder="Enter your industry"
                value={otherIndustry}
                onChange={(e) => setOtherIndustry(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label>Mobile Number</label>
            <input placeholder="Enter mobile number" />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
              />
              <span onClick={() => setShowPassword(!showPassword)}>👁</span>
            </div>
            {passwordError && (
              <p className="error-text">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="password-field">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span onClick={() => setShowConfirm(!showConfirm)}>👁</span>
            </div>
            {confirmPassword && confirmPassword !== password && (
              <p className="error-text">Passwords do not match</p>
            )}
          </div>

          <label className="terms">
            <input type="checkbox" /> I agree to the{" "}
            <span className="link">Terms & Privacy Policy</span>
          </label>

          <button className="auth-btn">Create Account</button>

          <p className="switch-auth">
            Already have an account?{" "}
            <span className="link" onClick={switchToLogin}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
