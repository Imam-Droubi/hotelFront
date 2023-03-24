import Logo from "../../components/Logo/Logo";
import SigninForm from "../../components/SigninForm/SigninForm";
import "./login.css"
function Login(){
  return(
    <>
    <div className="page">
      <img className="background" alt="background" src={require("../../assets/background.jpg")}/>
      <div className="container">
        <div className="top">
          <Logo />
        </div>
        <div className="main">
          <SigninForm />
        </div>
      </div>
    </div>
    </>
  )
};
export default Login;