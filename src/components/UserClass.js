import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
              usrInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photo.com"
              }   
        }
       console.log(this.props.name +"child constructor")
    }
    async componentDidMount(){
        console.log(this.props.name +"child component Did Mount");
        const data = await fetch("https://api.github.com/users/ganeshgoynar");
        const json = await data.json();

        this.setState({
            usrInfo:json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("component Did Update");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        
       
        console.log(this.props.name+"child render");
        const {name,location,avatar_url}=this.state.usrInfo;
        return(
            <div className="user-card">
                
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@ganeshgoynar</h4>       
            </div>
    );
    }
}

export default UserClass;

/**
 * --Mounting lifecycle---
 * constructor(dummy)
 * Render(dummy)
 *  <HTML Dummy>
 * Component Did Mount
 *  <api call>
 *  <this.setState>-> State variable is updated
 * 
 * ----- UPDATE
 *      render(API data)
 *      <HTML (new API data)
 *      componentDid update
 */