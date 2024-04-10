import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =()=>{

    
    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();
    
    //if no dependency array = >useEffect is called on every render component
    //if dependency array is empty =[] =>useEffect  is called on inital render(just once)
    // if dependency array is [btnNameReact]=>called everytime btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect")
    },[btnNameReact]);
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container  ">
            <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-3">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to ="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to ="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{ 
                        btnNameReact==="Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                        }}
                        >
                            {btnNameReact}      
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;