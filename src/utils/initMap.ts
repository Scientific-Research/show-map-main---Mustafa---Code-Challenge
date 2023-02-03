import { Map } from "mapbox-gl";
import { getEnvironments } from "./getEnviroments";

const { VITE_KEY } = getEnvironments();

// const GERMANY_BOUNDS: [[number, number], [number, number]] = [
//   [3, 40],
//   [16, 56],
// ];
export const initMap = (
  container: HTMLDivElement,
  coords: [number, number]
) => {
  const map = new Map({
    container,
    // style: 'mapbox://styles/mapbox/dark-v10',
    style: "mapbox://styles/mapbox/streets-v12",
    pitchWithRotate: false,
    center: coords,
    zoom: 6,
    accessToken: VITE_KEY as string,
    doubleClickZoom: false,
    // fitBounds:{GERMANY_BOUNDS},
    // containerStyle:{ width: "100%", height: "100%" }
  });
  return map;
};
