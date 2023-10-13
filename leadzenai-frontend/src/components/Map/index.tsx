import GoogleMapReact from 'google-map-react';

export default function Map({lat, long}:{lat: string, long: string}){
  const defaultProps = {
    center: {
      lat: +lat | 10.99835602,
      lng: +long | 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', minWidth: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}