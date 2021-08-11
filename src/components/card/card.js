import React, { useEffect,useState } from "react";
import "./card.css";

function Card(props) {

  let base= parseInt(props.base);
  let multiplier= parseInt(props.multiplier);
  let result = base* multiplier;
    

  return (
    <div className={props.className} >
    {base} x {multiplier} = {result}
    </div>
  );
}

export default Card;