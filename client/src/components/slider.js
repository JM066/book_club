import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.css';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

  render() {
    return (

    <div>
       
      <CarouselProvider naturalSlideWidth={500} naturalSlideHeight={30} totalSlides={3}>
    <Slider>
        <Slide index={0}>
          <div className="slide-one"> 
          <img src="https://images-na.ssl-images-amazon.com/images/I/41+M6sayf6L._SX309_BO1,204,203,200_.jpg"/>
          <h1>Everything I Know About Love</h1>
          <p>Dolly Alderton</p>
          </div>
        
        </Slide>
          
        <Slide className="slide-two" index={1}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51mN3bY0JjL._SX332_BO1,204,203,200_.jpg"/>
          </Slide>
        <Slide className="slide-three" index={2}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51jXWPV1PoL._SX316_BO1,204,203,200_.jpg"/>
        </Slide>
    </Slider>
    <div className="slider-button">
    <ButtonBack>Pre</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    </div>




      </CarouselProvider>

    </div>
    );
  }
}