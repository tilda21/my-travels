import React from "react";
import Travels from "./Travels";
import "./App.css";

const Travel = (travels) => (
  <figure className="Travel-figure">
    <img className="Travel-figure-img" src={travels.image} alt={travels.trip} />
    <figcaption>
      <blockquote>{travels.destination}</blockquote>
      <cite>{travels.country}</cite>
     
    </figcaption>
  </figure>
);

export default Travel;



