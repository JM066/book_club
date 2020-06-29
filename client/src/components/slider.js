// import React from 'react';
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// class MySlider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           lastCover1: this.props.books[this.props.books.length -1].cover,
//           lastCover2: this.props.books[this.props.books.length -2].cover,
//           lastCover3: this.props.books[this.props.books.length -3].cover
//         };
//       }
    


//     // getBookclub = () => {
//     //   fetch(`/books/${id}`)
//     //     .then(response => response.json())
//     //     .then(response => {
//     //       this.setState({ latestEntry: response });
//     //     });
//     // };


//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <div>
//           <img src={this.state.lastCover1}/>
//         </div>
//         <div>
//           <img src={this.state.lastCover1}/>
//         </div>
//         <div>
//         <img src={this.state.lastCover3}/>
//         </div>
//       </Slider>
//     );
//   }
// }
// export default MySlider;