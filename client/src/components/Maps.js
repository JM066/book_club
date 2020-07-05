import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import BookMarker from "./components/BookMarker";

export default class Maps extends Component {
  constructor(props) {
      super(props);
      this.state = {
        markers: [],
        input: ""
      }
}

componentDidMount() {
  console.log("child arrived")
}
// // updateMarkers = () => {
//   // return this.props.bookList.map((book, index) => {
//     // return this.addLocation()
//   // })
// // }


render() {
    return (
      <div>
      <Map center={[39.8751109, -8.240628]} zoom={5} >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
          {this.props.bookList.map((book, index) => {
            return (
              <BookMarker book={book} key={index} />
            ) 
        })
        }
          {/* {this.state.markers.map((, index) => {
            <Marker position={this.state.marker}>
              <Popup>
                Book Name
              <img width="150" />
              </Popup>
            </Marker>           
            })  
          } */}
      </Map>
      </div>
        )
    }
}

