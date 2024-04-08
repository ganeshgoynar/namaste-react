import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent component Did Mount");
        //Api call
    }
    render(){
        console.log("parent render");
        return(
           
            <div>
            <h1>About Class Component</h1>
            
            <UserClass name={"first"} location={"Mumbai Class"} />
            
        </div>
        )
    }
}



// const About =()=>{
//     return (
//         <div>
//             <h1>About</h1>
            
//             <UserClass name={"Ganesh goynar"} location={"Mumbai Class"} />
//         </div>
//     )
// }
export default About;