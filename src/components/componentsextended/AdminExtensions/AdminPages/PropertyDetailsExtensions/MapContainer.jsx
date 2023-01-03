import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap= ({ latitude, longitude }) =>{
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: latitude, lng: longitude },
    map,
    title: 'Office'
    });

    
    return marker;
   };

  const defaultProps = {
    center: {
      lat: 31.5204,
      lng: 74.3587
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%', overflow: 'hidden' }}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyDvUaqDhgX3_kIiNjLmH_9qtRap25rcDjk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
      >
        <AnyReactComponent
          lng={31.5204}
          lat={74.3587}
          text="Head Office"
        />
        
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;