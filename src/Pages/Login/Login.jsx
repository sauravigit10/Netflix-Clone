import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSign] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const user_auth = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (signState === "Sign In") {
      const storedUser = JSON.parse(localStorage.getItem("netflix-user"));
      console.log("Logging in with:", { email, password });

      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        alert("Login successful!");
        navigate("/home");
        return;
      } else {
        setError("Invalid email or password!");
      }

    } else {
      const newUser = { name, email, password };
      localStorage.setItem("netflix-user", JSON.stringify(newUser));
      console.log("Signing up with:", { name, email, password });

      alert("Signup successful!");
      setSign("Sign In"); 
      setName("");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} alt="Logo" className='login-logo' />

        <div className="login-form">
          <h1>{signState}</h1>
          <form onSubmit={user_auth}>
            {signState === 'Sign Up' && (
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
                required
              />
            )}

            <input
              value={email}
              type="email"
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type='submit'>{signState}</button>

            {error && <p className="error-message">{error}</p>}

            <div className="form-help">
              <div className="remember">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {signState === 'Sign In' ? (
              <p>
                New to Netflix? <span onClick={() => setSign('Sign Up')}>Sign up now</span>
              </p>
            ) : (
              <p>
                Already have an account? <span onClick={() => setSign('Sign In')}>Sign in now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
