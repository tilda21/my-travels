import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.destination} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.country}</cite>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;



