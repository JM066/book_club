import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
const opencage = require('opencage-api-client');
const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;

export default class BookMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: null
        }
  }
  
  componentDidMount() {
      this.addLocation(this.props.book)
  }
  
addLocation = (book) => {
    opencage.geocode({ q: book.location, key: OCD_API_KEY })
    .then(data => {
    console.log(data);
//     if (data.results.length > 0){
//       console.log("Found: " + data.results[0].formatted);
//       const latlng = data.results[0].geometry;
//       const {marker} = this.state
//       markers.push(latlng)
//       console.log(latlng);
//       this.setState({marker})
//       // let mapInst =  this.refs.map.leafletElement;
//       // mapInst.flyTo(latlng, 12);
//   } else alert("No results found!!");
//   })  
//   .catch(error => {
//     console.log('error', error.message);
  })
}
  
  render() {
      if (!this.state.marker) {
          return null
      } 
      return (
        <div>
            
       
        </div>
          )
      }
  }