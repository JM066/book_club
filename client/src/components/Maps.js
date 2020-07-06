import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
// import BookMarker from "./components/BookMarker";

export default class Maps extends Component {
  constructor(props) {
      super(props);
      this.state = {
      
      }
}

render() {
    return (
      <div>
      <Map center={[39.8751109, -8.240628]} zoom={5} >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
     
          {this.props.bookList.map((marker, index) => 
            <Marker key={index} position={marker.location}>
                   <Popup> 
                      {marker.title}
                      <img width="150" />
                    </Popup>
            </Marker>           
            )  
          }
      </Map>
      </div>
        )
    }
}

