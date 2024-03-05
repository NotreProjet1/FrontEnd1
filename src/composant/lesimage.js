// photos.js

import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

function Photos() {
  const imageStyle = {
    width: '100%', // Largeur à 100%
    maxHeight: '450px', // Hauteur maximale de 300 pixels (ajustez selon vos besoins)
    objectFit: 'cover', // Ajustement de l'objet pour couvrir l'espace tout en conservant les proportions
  };

  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://blog.hubspot.com/hubfs/Site%20owners%20building%20carousel%20slider%20in%20Bootstrap%20CSS.jpg' style={imageStyle} alt='...' />
        <div className="carousel-caption">
          <h1>Titre de l'image 1</h1>
          <p>Description de l'image 1</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://www.conseilsmarketing.com/wp-content/uploads/2020/11/Depositphotos_70367809_xl-2015-1.jpg' style={imageStyle} alt='...' />
        <div className="carousel-caption">
          <h1>Titre de l'image 2</h1>
          <p>Description de l'image 2</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://www.cnam-hauts-de-france.fr/storage/FC-Technicien-informatique-DEUST-IOSI-Lille_Slider-scaled.jpg' style={imageStyle} alt='...' />
        <div className="carousel-caption">
          <h1>Titre de l'image 3</h1>
          <p>Description de l'image 3</p>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Photos;
