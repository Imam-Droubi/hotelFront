import { Link } from "react-router-dom";
import "./signinForm.css";
function SigninForm(){
  return(
    <div className="form-container login-form-contianer">
      <h3 className="form-title">Sign In</h3>
      <form className="main-form login-form">
        <input className="main-form-input login-input" name="email" placeholder="Email Address..." required></input>
        <input className="main-form-input login-input" name="password" placeholder="Password..." required></input>
      </form>
      <button className="main-button">Login</button>
      <p className="form-tail">Don't you have an account? <span className="tail-link"><Link to='/register'>Sign Up!</Link></span></p>
    </div>
  )
}

export default SigninForm;