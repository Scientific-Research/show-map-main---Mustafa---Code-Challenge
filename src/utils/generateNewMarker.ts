import { Popup, Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {

    const popUp = new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

    new Marker({ color: 'green', scale: 2.5 })
        .setLngLat([13.4, 52.52])
        .setPopup(popUp)
        .addTo(map)

        new Marker({ color: 'red', scale: 2.5 })
        .setLngLat([2.33, 48.87])
        .setPopup(popUp)
        .addTo(map)

        new Marker({ color: 'blue', scale: 2.5 })
        .setLngLat([4.33, 50.83])
        .setPopup(popUp)
        .addTo(map)
}
export const generateNewMarker2 = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {

    const popUp = new Popup({ closeButton: false, anchor: 'right', })
        .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

    new Marker({ color: '#63df29', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)
}

// export const generateNewMarker3 = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {

//     const popUp3 = new Popup({ closeButton: false, anchor: 'right', })
//         .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

//     new Marker({ color: '#63df29', scale: 1.5 })
//         .setLngLat([lng, lat])
//         .setPopup(popUp3)
//         .addTo(map)
// }