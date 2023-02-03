import { Popup, Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {

    const popUp = new Popup({ closeButton: false, anchor: 'right', })
        .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

    new Marker({ color: '#63df29', scale: 2.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)
}