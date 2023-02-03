import { Popup, Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {

    const popUp = new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

    new Marker({ color: '#63df29', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)
}
// export const generateNewMarker2 = ({ lat2, lng2, map2 }: { lng2: number, lat2: number, map2: Map }) => {

//     const popUp2 = new Popup({ closeButton: false, anchor: 'right', })
//         .setHTML(`<div class="popup">You click here: <br/>[${lng2},  ${lat2}]</div>`)

//     new Marker({ color: '#63df29', scale: 1.5 })
//         .setLngLat([lng2, lat2])
//         .setPopup(popUp2)
//         .addTo(map2)
// }

// export const generateNewMarker3 = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {

//     const popUp3 = new Popup({ closeButton: false, anchor: 'right', })
//         .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

//     new Marker({ color: '#63df29', scale: 1.5 })
//         .setLngLat([lng, lat])
//         .setPopup(popUp3)
//         .addTo(map)
// }