import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
const opencage = require('opencage-api-client');

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;


export default class Maps extends Component {
  constructor(props) {
      super(props);
      this.state = {
        markers: [40.4608414, -3.8610358],
        input: "Madrid"
      }
}
// updateMarkers = () => {
  // return this.props.bookList.map((book, index) => {
    // return this.addLocation()
  // })
// }

addLocation = (e) => {
  e.preventDefault();
    opencage 
    .geocode({ q: this.state.input, key: OCD_API_KEY })
    .then(data => {
      console.log(data);
      if (data.results.length > 0){
        console.log("Found: " + data.results[0].formatted);
        const latlng = data.results[0].geometry;
        const {markers} = this.state
        markers.push(latlng)
        console.log(latlng);
        this.setState({markers})
        // let mapInst =  this.refs.map.leafletElement;
        // mapInst.flyTo(latlng, 12);
    } else alert("No results found!!");
    })  
    .catch(error => {
      console.log('error', error.message);
    });
    return (
      <Marker position={this.state.markers}>
      <Popup>
          Book Name
          <img width="150" />
      </Popup>
    </Marker> 
    )
};

render() {
    return (
        <div>
        <button onClick={e => this.addLocation(e)}>Search!</button>
        <Map center={[39.8751109, -8.240628]} zoom={5} >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                   attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            {/* {this.state.markers.map((marker, index) => {
            }) 
            } */}
            {/* {this.updateMarkers()} */}
        </Map>
        </div>
        )
    }
}

