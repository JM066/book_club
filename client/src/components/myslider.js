import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class myslider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={30}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}><img src="https://images-na.ssl-images-amazon.com/images/I/41f3BaNahUL._SX323_BO1,204,203,200_.jpg"/></Slide>
            <Slide index={1}><img src="https://m.media-amazon.com/images/I/51GAFkml+FL.jpg"/></Slide>
            <Slide index={2}><img src="https://images-na.ssl-images-amazon.com/images/I/51e2-LIM3aL._SX324_BO1,204,203,200_.jpg"/></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      );
    }
  }