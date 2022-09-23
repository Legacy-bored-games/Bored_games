//Google Maps component
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const API = process.env.REACT_APP_API_KEY;

function Map() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <div>
      <iframe
        title="map"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/view?key=${API}&zoom=9&center=52.5200%2C13.4050`}
      ></iframe>
    </div>
  );
}

export default Map;
