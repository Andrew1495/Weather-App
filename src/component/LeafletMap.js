import { MapContainer, TileLayer} from "react-leaflet";
import * as L from "leaflet";

const LeafletMap = (({forcast}) =>{
    if (forcast){
    
        let coord = [forcast.lat, forcast.lon]
    console.log(coord)
   
        return (
            <MapContainer center={coord} zoom={12}scrollWheelZoom={false} key={Date.now()}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        )
    }})




export default LeafletMap;