import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
const opencage = require('opencage-api-client');

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;


export default class Maps extends Component {
  constructor(props) {
      super(props);
      this.state = {
        markers: [],
        input: "Madrid"
      }
}

updateInput = (e) => {
  this.setState({
    input: e.target.value
  })
  
}
addMarker = (e) => {
  const {markers} = this.state
  markers.push(e.latlng)
  console.log(e.latlng);
  this.setState({markers})
}  


addLocation = () => {
    opencage 
    .geocode({ q: this.state.input, key: OCD_API_KEY })
    .then(data => {
      console.log(data.results);
      // if (data.results.length > 0){
        // console.log("Found: " + data.results[0].formatted);
        // const latlng = data.results[0].geometry;
        // const {markers} = this.state
        // markers.push(latlng)
        // console.log(latlng);
        // this.setState({markers})
        // let mapInst =  this.refs.map.leafletElement;
        // mapInst.flyTo(latlng, 12);
    // } else alert("No results found!!");
    // }
    // )  
    // .catch(error => {
    //   console.log('error', error.message);
    }); 
};

render() {
    return (
        <div>
        {/* {this.props.bookList.map((book, index) => 
          <button key={index} onClick={() => this.updateLocation(book.location)}>Search!</button>
        )} */}
        <label for="input">Search books by city
          <input type="text" id="input" placeholder="Enter a city name" onChange={e => this.updateInput(e)} />
        </label>
          <button onClick={this.addLocation()}>Search!</button>
        <Map center={[41.38879, 2.15899]} zoom={15} onClick={this.addMarker}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            
            <Marker position={[41.38879, 2.15899]}>
                <Popup>
                    Book Name
                    <img width="150" />
                </Popup>
            </Marker>
        </Map>
    
        </div>
        )
    };
}
