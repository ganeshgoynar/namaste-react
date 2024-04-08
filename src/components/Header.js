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
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to ="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
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