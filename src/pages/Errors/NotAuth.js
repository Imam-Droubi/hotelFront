import { useNavigate } from "react-router-dom";

function NotAuth(){
  const navigate = useNavigate();
  return(
    <>
      <h1>You are not Authurized to view this page!</h1>
      <button onClick={()=> navigate("/")}>Back Home</button>
    </>
  );
}
export default NotAuth;