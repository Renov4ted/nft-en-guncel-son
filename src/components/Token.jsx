import React from "react";
import resimToken from "../assets/resimToken.jpg";

function Token() {
  return(
  <div id="TokenId" className="MainDiv">

  <img className="TokenImg" src={resimToken}></img>
  
  </div>
  )
}
export default Token;