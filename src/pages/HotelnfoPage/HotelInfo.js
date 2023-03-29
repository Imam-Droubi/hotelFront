import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import ReservePopUp from "../../components/ReservePopUp/ReservePopUp";
import "./hotelInfo.css"
function HotelInfo(){
  const link = window.location.href.split("/") ;
  const id = link[link.length-1];
  const [showPopUp , setShowPopUp] = useState(false);

  useEffect(()=>{
  },[])
  return(
    <>
      {showPopUp? <ReservePopUp show={showPopUp} setShow={setShowPopUp} /> : null}
      <div className="hotel-info-page">
        <div className="hotel-info-top-bar">
          <div className="hotel-info-top-contianer">
            <Logo/>
            <UserTop items={["imam_droubi", "logout"]} />
          </div>
        </div>
        <div className="hotel-info-body">
          <div className="hotel-info-body-top">
            <div className="hotel-info-title">Royal Court Hotel</div>
            <div className="hotel-info-address"><GoLocation/> 24 - Jaffa Street, 2199 Ramallah</div>
          </div>
          <div className="hotel-info-photos">
            <div className="hotel-info-main-photo">
              <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
            </div>
            <div className="hotel-info-side-photos">
              <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
              <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
              <img src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
            </div>
          </div>
          <div className="hotel-info-details">
            <div className="hotel-info-description">
              <h2>Description</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </div>
            <div className="hotel-info-reserve-now-widget">
              <h3>Reserve Now!</h3>
              <p className="hotel-short-desc">Centrally located in the heart of Ramallah, perfect for solo travellers.</p>
              <h4 className="hotel-reservation-price">$300(2 Nights)</h4>
              <button className="reserve-now-button" onClick={()=>setShowPopUp(!showPopUp)}>Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HotelInfo;