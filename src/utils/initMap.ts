import { Map } from "mapbox-gl";
import { getEnvironments } from "./getEnviroments";

const { VITE_KEY } = getEnvironments();

// const GERMANY_BOUNDS: [[number, number], [number, number]] = [
//   [3, 40],
//   [16, 56],
// ];
export const initMap = (
  container: HTMLDivElement,
  coords1: [number, number],
  // coords: [[number, number], [number, number]]
  coords: [number, number]
) => {
  const map = new Map({
    container,
    // style: 'mapbox://styles/mapbox/dark-v10',
    style: "mapbox://styles/mapbox/streets-v12",
    pitchWithRotate: false,
    center: coords,
    // center: coords,

    // center:coords1,
    zoom: 5,
    accessToken: VITE_KEY as string,
    doubleClickZoom: false,
    // fitBounds:{GERMANY_BOUNDS},
    // containerStyle:{ width: "100%", height: "100%" }
  });
  return map;
};
