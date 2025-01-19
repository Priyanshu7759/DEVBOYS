import React, { useState } from "react";
import { Link } from "react-router-dom";
const TutorSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Signup form
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form>
        {!isLogin && (
          <>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">
          <Link to="/TutorDashboard">{isLogin ? "Login" : "Signup"}</Link>
        </button>
      </form>

      <div className="social-login">
        <button>
          <img src="data:image/png;base64,..." alt="Google logo" />
          Continue with Google
        </button>
        <button>
          <img src="data:image/png;base64,..." alt="Phone icon" />
          Continue with Phone Number
        </button>
      </div>

      <div className="toggle-link">
        {isLogin ? (
          <span>
            Don't have an account?{" "}
            <a href="#" onClick={toggleForm}>
              Signup
            </a>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <Link to="TutorDashboard" onClick={toggleForm}>
              Login
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default TutorSignUp;
