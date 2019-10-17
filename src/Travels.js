import React from "react";
import Travel from "./Travel";

const travels = [
  {
    trip: "Funchal",
    destination:"Madeira",
    country: "Portugal",
    image: "http://www.dorisol.com/media/grupo-dorisol-bannermadeira-destination-dorisol-hotels-ponta-sao-lourenco-nature1.jpg"

  },
  {
    trip: "São Miguel",
    destination: "Açores",
    country: "Portugal",
    image: "https://www.geekyexplorer.com/wp-content/uploads/2019/07/sao-miguel-itinerary-road-trip-local-tips.jpg"

  },
  {
    trip: "Boavista",
    destination: "Porto",
    country: "Portugal",
    image: "https://scontent.flis8-1.fna.fbcdn.net/v/t31.0-8/10463806_603501403081422_2596563637590896468_o.jpg?_nc_cat=110&_nc_oc=AQkcB7LgVAR3-BGPHngiSIQdUgpWJ3U7gKWQh20epbzLU259em0DvQ5i2i4NgFFpTLk&_nc_ht=scontent.flis8-1.fna&oh=16a22a39204f1fa96e31818b480fa421&oe=5E23D6EE"

  },
  {
    trip: "Chiado",
    destination: "Lisboa",
    country: "Portugal",
    image: "https://dicasdelisboa.com.br/wp-content/uploads/2015/03/bairrochiadoemlisboa.jpg"

  },
  {
    trip: "Vilamoura",
    destination: "Algarve",
    country: "Portugal",
    image: "https://www.algarvefun.com/wp-content/uploads/2018/04/tivoli-marina-vilamoura_panoramic_view_21.jpg"

  }
];

const Travels = () => (
    
      travels.map(travels => 
        {return (
          <Travel 
            key = {travels.trip}
            trip = {travels.trip}
            destination = {travels.destination}
            country = {travels.country}
            image ={travels.image}
          
          />
        )}
      )
    
  );

export default Travels;

