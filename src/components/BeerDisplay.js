import React from "react";

const Beer = (props) => {
    return(
    <div>
    <h1>
        Beer Name: {props.beer.name}
    </h1>
     <img src={props.beer.image_url}/>
     <p>{props.beer.description}</p>
     <p> Malt Ingredients: {props.beer.ingredients.malt.map(item => (
        <p>{item.name}</p>
     ))}
     </p>
     </div>)
};

export default Beer;