import { useEffect, useRef } from "react";
import { Map } from "mapbox-gl";
import { initMap } from "../utils/initMap";
import { generateNewMarker } from "../utils/generateNewMarker";
import BerlinLatLng from "../data/BerlinLatLng.json";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);
  //   const mapInitRef2 = useRef<Map | null>(null);
  //   const mapInitRef3 = useRef<Map | null>(null);

  const BLL0 = () => {
    const a = Number(BerlinLatLng.map((BL0) => BL0.capitalInfo.latlng[0]));
    console.log(a);
    return a;
  };
  const BLL1 = () => {
    const b = Number(BerlinLatLng.map((BL0) => BL0.capitalInfo.latlng[1]));
    console.log(b);
    return b;
  };
  //   BLL.capitalInfo.latlng[1];

  //   BLL();
  //Berlin, Germany
  useEffect(() => {
    const c = BLL0();
    const d = BLL1();
    console.log(c);
    console.log(d);
    if (container.current) {
      mapInitRef.current = initMap(
        container.current,
        // [-100.31019063199852, 25.66901932031443]
        // [13.404954, 52.520008]
        [d, c]
      );
    }
  }, []);

  //   // Paris, France
  //   useEffect(() => {
  //     if (container.current) {
  //       mapInitRef2.current = initMap(
  //         container.current,
  //         // [-100.31019063199852, 25.66901932031443]
  //         [2.349014, 48.864716]
  //       );
  //     }
  //   }, []);

  //   // Brussels
  //   useEffect(() => {
  //     if (container.current) {
  //       mapInitRef3.current = initMap(
  //         container.current,
  //         // [-100.31019063199852, 25.66901932031443]
  //         [4.34878, 50.85045]
  //       );
  //     }
  //   }, []);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("dblclick", ({ lngLat }) =>
        generateNewMarker({ map: mapInitRef.current!, ...lngLat })
      );

    return () => {
      mapInitRef.current?.off("dblclick", generateNewMarker);
    };
  }, []);
  //   /////////////////////////
  //   useEffect(() => {
  //     mapInitRef2.current &&
  //       mapInitRef2.current.on("dblclick", ({ lngLat2 }) =>
  //         generateNewMarker({ map: mapInitRef2.current!, ...lngLat2 })
  //       );

  //     return () => {
  //       mapInitRef2.current?.off("dblclick", generateNewMarker);
  //     };
  //   }, []);
  //   ////////////////////////////////

  //   /////////////////////////
  //   useEffect(() => {
  //     mapInitRef3.current &&
  //       mapInitRef3.current.on("dblclick", ({ lngLat3 }) =>
  //         generateNewMarker({ map: mapInitRef3.current!, ...lngLat3 })
  //       );

  //     return () => {
  //       mapInitRef3.current?.off("dblclick", generateNewMarker);
  //     };
  //   }, []);
  //   ////////////////////////////////

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
  //   ////////////////////////////////
  //   useEffect(() => {
  //     mapInitRef2.current &&
  //       mapInitRef2.current.on("load", () =>
  //         generateNewMarker({
  //           map: mapInitRef2.current!,
  //           ...mapInitRef2.current!.getCenter(),
  //         })
  //       );

  //     return () => {
  //       mapInitRef2.current?.off("load", generateNewMarker);
  //     };
  //   }, []);
  //   ///////////////////////////////

  //   ////////////////////////////////
  //   useEffect(() => {
  //     mapInitRef3.current &&
  //       mapInitRef3.current.on("load", () =>
  //         generateNewMarker({
  //           map: mapInitRef3.current!,
  //           ...mapInitRef3.current!.getCenter(),
  //         })
  //       );

  //     return () => {
  //       mapInitRef3.current?.off("load", generateNewMarker);
  //     };
  //   }, []);
  //   ///////////////////////////////
};
