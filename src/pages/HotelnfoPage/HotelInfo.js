import { useContext, useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import ReservePopUp from "../../components/ReservePopUp/ReservePopUp";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import "./hotelInfo.css"
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
function HotelInfo(){
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const link = window.location.href.split("/") ;
  const hotelId = link[link.length-1];
  const {data:hotel,loading,error} = useFetch(`/hotels/${hotelId}`);
  const {dates} = useContext(SearchContext);
  
  const [currentPhotoIndex , setCurrentPhotoIndex] = useState(0);
  const [showPopUp , setShowPopUp] = useState(false);
  const handleRightSliding = ()=>{
    const size = hotel.photos.length;
    setCurrentPhotoIndex((currentPhotoIndex + 1)%size);
  }
  const handleleftSliding = ()=>{
    const size = hotel.photos.length;
    if(currentPhotoIndex === 0){
      setCurrentPhotoIndex(size-1);
    }else setCurrentPhotoIndex(currentPhotoIndex-1);
  }
  useEffect(()=>{
    if(!user)navigate("/login");
  },[user])
  return(
    loading? "Loading..." :<>
      {showPopUp? <ReservePopUp show={showPopUp} setShow={setShowPopUp} /> : null}
      <div className="hotel-info-page">
        <div className="hotel-info-top-bar">
          <div className="hotel-info-top-contianer">
            <Logo/>
            {user && <UserTop items={[user.userName, "Logout"]}/>}
          </div>
        </div>
        <div className="hotel-info-body">
          <div className="hotel-info-body-top">
            <div className="hotel-info-title">{hotel.name}</div>
            <div className="hotel-info-address"><GoLocation/> {hotel.address}</div>
          </div>
          <div className="hotel-info-photos">
            <div className="slider" >
              <button className="left-slider-button" onClick={()=> handleRightSliding()} ><AiOutlineArrowLeft/></button>
              <div className="slider-photo">
                {hotel.photos && <img src={hotel.photos[currentPhotoIndex]}/>}
              </div>
              <button className="right-slider-button" onClick={()=> handleleftSliding()}><AiOutlineArrowRight/></button>
            </div>
          </div>
          <div className="hotel-info-details">
            <div className="hotel-info-description">
              <h2>Description</h2>
              <p>{hotel.desc}</p>
            </div>
            <div className="hotel-info-reserve-now-widget">
              <h3>Reserve Now!</h3>
              <p className="hotel-short-desc">{hotel.title}</p>
              <h4 className="hotel-reservation-price">$300 (2 Nights)</h4>
              <button className="reserve-now-button" onClick={()=>setShowPopUp(!showPopUp)}>Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HotelInfo;