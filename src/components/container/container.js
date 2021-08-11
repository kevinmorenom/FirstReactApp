import React, { useEffect, useState ,useRef}  from "react";
import Card from "../card/card";
import "./container.css";

function Container() {

    let inputValue = useRef('5');
    let inputRef = useRef('5');

    let [multiplier, setCount] = useState('5');

    const multiply=()=>{
        setCount(inputRef.current.value);
        console.log(inputRef.current.value);
          
    }

  return (
    <div>
        <input ref={inputRef} onChange={event => inputValue.current = event.target.value } placeholder="Ingrese multiplicador"  type="number"></input>
        <button onClick={multiply}>Multiplicar</button>
        
      <div className="card-container">
        <Card className="card_child card--orange"  base="1" multiplier={multiplier}></Card>
        <Card className="card_child card--blue"  base="2" multiplier={multiplier}></Card>
        <Card className="card_child card--green"  base="3" multiplier={multiplier}></Card>
        <Card className="card_child card--red"  base="4" multiplier={multiplier}></Card>
        <Card className="card_child card--coral"  base="5" multiplier={multiplier}></Card>
      </div>
    </div>
  );
}

export default Container;
