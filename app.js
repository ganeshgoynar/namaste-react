/**
 * <div id="parent">
 *      <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *      </div>
 * <div id="child2">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(object)=> HTML that the browsewr understand
 * React.createElemnt => Object => when we render this element on Dom it is=> HTML Element
 */

import React from "react";
import ReactDOM from "react-dom/client";



//React Element


const Title =()=> (
    <h1 className="head" tabIndex="1">
        Namaste React using JSX       
    </h1>
    );


const HeadingComponent = () => ( 
    <div id="container"> 
    {Title()}
    <Title/>
    
    <h1 className="heading">Namaste React Functional components</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
