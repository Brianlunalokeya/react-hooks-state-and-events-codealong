import React, {useState} from "react";

function Toggle() {
  const [isOn, setIson] = useState(false);

  function handleClick() {
    setIson((isOn) => !isOn);
  }
   
  const buttonStyle = {
    background: isOn ? "red" : "white",
  };


  return <button onClick={handleClick} style={buttonStyle}>
  {isOn ? "ON" : "OFF"}</button>
}

export default Toggle;
