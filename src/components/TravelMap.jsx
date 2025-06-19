import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 44.9778,
  lng: -93.2650,
};

export default function TravelMap() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
        <Marker position={{ lat: 44.9778, lng: -93.2650 }} />
      </GoogleMap>
    </LoadScript>
  );
}