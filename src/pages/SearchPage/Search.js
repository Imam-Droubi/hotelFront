import { useContext, useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import SideNavAdmin from "../../components/SideNavAdmin/SideNavAdmin";
import HotelCard from "../../components/HotelCard/HotelCard";
import "./search.css"
import Filters from "../../components/Fitlers/Filters";
import { AiOutlineMenu } from "react-icons/ai";
import HumburgerSearch from "../../components/HumburgerSearch/HumburgerSearh";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
function Search(){
  const {user} = useContext(AuthContext);
  const [filters, setFilters] = useState({
    city:undefined,
    checkIn : undefined,
    checkOut :undefined,
    minPrice : undefined,
    maxPrice : undefined,
    persons:undefined
  });
  const {data : hotels, loading , error, reFetch} = useFetch(`/hotels?destination=${filters.city}&min=${filters.minPrice}&max=${filters.maxPrice}`);
  const navigate = useNavigate();
  // humburger stuff 
  const [windowSize , setWindowSize] = useState(window.innerWidth);
  const [menuShown , setMenuShown] = useState(false);
  const  showHumMenu = ()=>{
    setMenuShown(true);
    let container = document.getElementsByClassName("search-page-sidebar")[0];
    let sideContainer = document.getElementsByClassName("search-page-side-bar-container")[0];
    container.classList.add("humburger");
    sideContainer.classList.add("humburger-container")
  }
  const closeHumMenue = ()=>{
    setMenuShown(false);
    let container = document.getElementsByClassName("search-page-sidebar")[0];
    let sideContainer = document.getElementsByClassName("search-page-side-bar-container")[0];
    container.classList.remove("humburger");
    sideContainer.classList.remove("humburger-container")
  }
  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      setWindowSize(window.innerWidth);
    })
    if(!user)navigate("/login")
    
  },[user])
  
  return(
    <>
      <div className="search-page-container">
      {windowSize <= 992 && !menuShown?<AiOutlineMenu onClick={()=> showHumMenu()} className="humburger-controller"/> : null}
        <div className="search-page-sidebar">
          <div className="search-page-side-bar-container">
            {windowSize > 992 ?
              <>
              <Logo/>
              <Filters filters = {filters} setFilters={setFilters} reFetch = {reFetch}/>
              </>
              :
              <>
              <HumburgerSearch menuShown = {menuShown} closeHumMenue = {closeHumMenue} setFilters = {setFilters}/>
              </>
            }
            
          </div>
        </div>
        <div className="search-page-content">
          <div className="search-page-content-container">
            <div className="search-page-top">
              <h1 className="search-page-title">Choose a Hotel!</h1>
              {user && <UserTop items={[user.userName ,"Logout"]}/>}
            </div>
            <div className="search-content">
              {
                loading? "Loading..." :
                hotels.map((hotel,index)=>{
                  return <HotelCard key={index} hotel={hotel}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Search;