import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body =()=>{
    //Local State variable-super powerful variable
    const [listOfRestaurant,setListOfRestaurant]= useState([]);

    const [filteredRestaurant,setFilteredRestaurant] =useState([]);

    const [searchText,setSearchText]= useState("");

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"

        );
        const json = await data.json();
        console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(
            json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
          );
        setFilteredRestaurant(
            json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
          );
    };

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
    <div className="body">
        <div className="filter"> 
            <div className="search">
            <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />       
          
            <button
            
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                      );
                      setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {filteredRestaurant.map((restaurant) =>(
                <Link 
                key={restaurant.info.id}
                to ={"/restaurants/"+restaurant.info.id}
                >
                  <RestaurantCard resData={restaurant}/>
                  </Link>
                ))}

            </div>
        </div>
    );
};

export default Body;