import { useEffect, useRef } from "react";
import { Map } from "mapbox-gl";
import { initMap } from "../utils/initMap";
import {
  generateNewMarker,
  generateNewMarker2,
} from "../utils/generateNewMarker";
import BerlinLatLng from "../data/BerlinLatLng.json";
import ParisLatLng from "../data/ParisLatLng.json";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);
  const mapInitRef2 = useRef<Map | null>(null);

  const BLL0 = () => {
    const a = Number(BerlinLatLng.map((BL0) => BL0.capitalInfo.latlng[0]));
    console.log(a);
    return a;
  };
  const BLL1 = () => {
    const b = Number(BerlinLatLng.map((BL1) => BL1.capitalInfo.latlng[1]));
    console.log(b);
    return b;
  };

  //Berlin, Germany
  useEffect(() => {
    const c = BLL0();
    const d = BLL1();
    console.log(c);
    console.log(d);
    if (container.current) {
      mapInitRef.current = initMap(
        container.current,
      [d, c],

        // [-100.31019063199852, 25.66901932031443]
        // [13.404954, 52.520008]
        [2.33, 48.87]
      );
    }
  }, []);

  //   useEffect(() => {
  //     mapInitRef.current &&
  //       mapInitRef.current.on("dblclick", ({ lngLat }) =>
  //         generateNewMarker({ map: mapInitRef.current!, ...lngLat })
  //       );

  //     return () => {
  //       mapInitRef.current?.off("dblclick", generateNewMarker);
  //     };
  //   }, []);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("load", () =>
        generateNewMarker({
          map: mapInitRef.current!,
          ...mapInitRef.current!.getCenter(),
        })
      );
    return () => {
      mapInitRef.current?.off("load", generateNewMarker);
    };
  }, []);
};
