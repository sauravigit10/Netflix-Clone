import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import {auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [signState, setSign] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  


  const handleSignUp = (e) => {
    e.preventDefault();   
      const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      alert(`${signState} form submitted!`);
      setLoading(false);
    }, 1000);
  }    
    if(signState==="Sign Up"){
      createUserWithEmailAndPassword(auth,email,password,name).then(value=>alert("sign up successful")).catch(err=>alert(err.message));
    }
     else{
      signInWithEmailAndPassword(auth,email,password).then(value=>{alert("sign in successful");navigate('/Home')}).catch(err=>alert(err.message));

  

  };
}

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
          <form onSubmit={handleSignUp}>
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

            <button type='submit' onSubmit={handleSignUp}>{signState}</button>

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
