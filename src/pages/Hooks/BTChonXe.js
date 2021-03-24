import React, { useState } from "react";

export default function BTChonXe() {
  const [imgSrc,setImgSrc] = useState('./img/imgBlackCar.jpg');
  const changeColor = (color) =>{
    setImgSrc(`./img/img${color}Car.jpg`)
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img style={{width:'100%'}} height={300} src={imgSrc} alt={imgSrc}></img>
        </div>
        <div className="col-4 m-auto d-flex justify-content-around">
          <button
            style={{ background: "black" }}
            onClick={() => {
              changeColor("Black");
            }}
          >
            Black
          </button>
          <button
            style={{ background: "red" }}
            onClick={() => {
              changeColor("Red");
            }}
          >
            Red
          </button>
          <button
            style={{ background: "silver" }}
            onClick={() => {
              changeColor("Silver");
            }}
          >
            Silver
          </button>
        </div>
      </div>
    </div>
  );
}
