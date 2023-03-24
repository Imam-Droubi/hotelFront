import { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import SideNavAdmin from "../../components/SideNavAdmin/SideNavAdmin";
import HotelCard from "../../components/HotelCard/HotelCard";
import "./search.css"
import Filters from "../../components/Fitlers/Filters";
function Search(){
  const [hotels, setHotels] = useState([
    {
      "__id" : "640c72a148c5e882393b8d8b",
      "name" : "First Hotel",
      "type" : "hotel",
      "city" : "Ramallah",
      "address" : "somewhere",
      "distance" : 200,
      "desc" : "Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!,Feel Like Home!",
      "title" : "Hotel Title",
      "rating" : 2,
      "cheapestPrice" : 100,
      "highestPrice" : 500,
      "featured" : false,
      "photos": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      "rooms" : [
        "640c72a148c5e882393b8d8b",
        "640c72a148c5e882393b8d9b"
      ]
    },
    {
      "__id" : "640c72a148c5e882393b8d9b",
      "name" : "Second Hotel",
      "type" : "hotel",
      "city" : "London",
      "address" : "somewhere",
      "distance" : 200,
      "desc" : "Feel Like Home!",
      "title" : "Hotel Title",
      "rating" : 2,
      "cheapestPrice" : 150,
      "highestPrice" : 400,
      "featured" : false,
      "photos": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      "rooms" : [
        "640c72a148c5e882393b8d8b",
        "640c72a148c5e882393b8d9b"
      ]
    },
    {
      "__id" : "640c72a148c5e882393b8d9c",
      "name" : "Third Hotel",
      "type" : "hotel",
      "city" : "New York",
      "address" : "somewhere",
      "distance" : 200,
      "desc" : "Feel Like Home!",
      "title" : "Hotel Title",
      "rating" : 4,
      "cheapestPrice" : 200,
      "highestPrice" : 700,
      "featured" : true,
      "photos": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      "rooms" : [
        "640c72a148c5e882393b8d8b",
        "640c72a148c5e882393b8d9b"
      ]
    }
  ]);
  const [filters, setFilters] = useState({});
  const isValid = (hotel)=>{
    if(filters.city && filters.city != hotel.city) return false;
    if(filters.minPrice&& filters.minPrice > hotel.highestPrice) return false;
    if(filters.maxPrice&& filters.maxPrice < hotel.cheapestPrice) return false;
    return true;
  };
  return(
    <>
      <div className="search-page-container">
        <div className="search-page-sidebar">
          <div className="search-page-side-bar-container">
            <Logo/>
            <Filters setFilters={setFilters}/>
          </div>
        </div>
        <div className="search-page-content">
          <div className="search-page-content-container">
            <div className="search-page-top">
              <h1 className="search-page-title">Choose a Hotel!</h1>
              <UserTop items={["imam_droubi" ,"logout"]}/>
            </div>
            <div className="search-content">
              {
                hotels.map((hotel,index)=>{
                  console.log(isValid(hotel));
                  if(isValid(hotel)) return <HotelCard key={index} hotel={hotel}/>
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