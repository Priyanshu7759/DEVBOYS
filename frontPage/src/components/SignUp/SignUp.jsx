import React, { useState } from "react";

// Assuming your CSS is in a separate file

const SignUp = () => {
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
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
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
            <a href="#" onClick={toggleForm}>
              Login
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default SignUp;
