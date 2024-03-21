import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body =()=>{
    //Local State variable-super powerful variable
    const [listOfRestaurants,setListOfRestaurant]= useState(resList);


    // Normal JS variable 
    // let listOfRestaurants = null;

    //Normal js variable
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4
                        );
                        setListOfRestaurant(filteredList);
                }} 
                >
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                listOfRestaurants.map((restaurant) =>(
                <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
               ))}

            </div>
        </div>
    );
};

export default Body;