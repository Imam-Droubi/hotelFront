import { Link } from "react-router-dom";
import "./signupForm.css";
function SignupForm(){
  return(
    <div className="form-container">
      <h3 className="form-title">Sign Up</h3>
      <form className="main-form">
        <input className="main-form-input" name="fullName" placeholder="Full Name..." required></input>
        <input className="main-form-input" name="userName" placeholder="Username..." required></input>
        <input className="main-form-input" name="email" placeholder="Email Address..." required></input>
        <input className="main-form-input" name="phoneNumber" placeholder="Phone Number..." required></input>
        <input className="main-form-input" name="password" placeholder="Password..." required></input>
        <input className="main-form-input" name="repeatPasswrod" placeholder="Confirm Passwrod..." required></input>
        <input className="main-form-input" name="country" placeholder="Country..." required></input>
        <input className="main-form-input" name="address" placeholder="Address..." required></input>
      </form>
      <button className="main-button">Register</button>
      <p className="form-tail">Already have an account? <span className="tail-link"><Link to='/login'>Sign in!</Link></span></p>
    </div>
  )
}

export default SignupForm;