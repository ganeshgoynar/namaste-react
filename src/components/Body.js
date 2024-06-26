import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

      const onlineStatus = useOnlineStatus();
      if(onlineStatus=== false) 
        return (
          <h1>
            Looks like you're offline!! Please check your internet connection
          </h1>
        );

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
    <div className="body">
        <div className="filter flex"> 
            <div className="search m-4 p-4 flex items-center">
            <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />       
          
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                      );
                      setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
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