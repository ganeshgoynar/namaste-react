import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestuarantMenu =()=>{

        const {resId} = useParams();
        
        const resInfo = useRestaurantMenu(resId)

        if (resInfo === null) return <Shimmer />;
    
        const  { name,cuisines,costForTwoMessage } = 
        resInfo?.cards[2]?.card?.card?.info;

        const  itemCards  = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REFULAR?.cards[2]?.card?.card;
        
        console.log(itemCards);
        return (
        
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} -{costForTwoMessage}</p>
           
            <h2>Menu</h2>
            {/* <ul>{itemCards.map((item)=>(<li>{item.card.info.name}</li>))}</ul> */}
        </div>
    )
}
export default RestuarantMenu;