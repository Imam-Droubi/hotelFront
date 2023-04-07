import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo/Logo";
import "../SideNavAdmin/humburger.css"
import Filters from "../Fitlers/Filters";
function HumburgerSearch({menuShown,closeHumMenue,setFilters}){
  return(
    <>
        {menuShown && 
          <>
          <AiOutlineClose className="close-humburger" onClick={()=>closeHumMenue()}/>
          <Logo/>
          <Filters setFilters={setFilters}/>
          </>
        }

    </>
  );
}
export default HumburgerSearch;