import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; 

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 20.0, 
  lng: -60.0,
};

const markers = [
  { name: 'Hawaii', position: { lat: 20.7967, lng: -156.3319 } },
  { name: 'Cancun, Mexico', position: { lat: 21.1619, lng: -86.8515 } },
  { name: 'Puerto Vallarta, Mexico', position: { lat: 20.6534, lng: -105.2253 } },
  { name: 'Delhi, India', position: { lat: 28.6139, lng: 77.2090 } },
  { name: 'Ajmer, India', position: { lat: 26.4499, lng: 74.6399 } },
  { name: 'Australia', position: { lat: -25.2744, lng: 133.7751 } },
  { name: 'St. Martin', position: { lat: 18.0708, lng: -63.0501 } },
  { name: 'Bahamas', position: { lat: 25.0343, lng: -77.3963 } },
  { name: 'Puerto Rico', position: { lat: 18.2208, lng: -66.5901 } },
];

export default function TravelMap() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} title={marker.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}