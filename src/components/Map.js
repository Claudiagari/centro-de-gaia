import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import logo from '../assets/images/logo-gaia.png'
import markerlogo from '../assets/images/marker-logo.png'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
      
        initialCenter={{ lat:-12.121540, lng:-77.028482, }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Centro de Gaia'}
          icon={ markerlogo } 
          
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div> 
          <img src={logo}  className="d-inline-block logo" alt="logo"/>
            <span className="textMap">{this.state.selectedPlace.name}</span> <br/>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJ6tVO-B5eAGv0gvYmPOgk4cWAtp5JbJw',
  language : 'spanish'

  
})(MapContainer);