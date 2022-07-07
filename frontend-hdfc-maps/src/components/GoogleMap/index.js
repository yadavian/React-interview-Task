import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    console.log(props.coords.longitude,props.coords.latitude)
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat:props.coords.latitude, lng: props.coords.longitude }}
        >
            {props.isMarkerShown &&
            <>{
                props.data.map((d,i)=>{
                    return(
                        <Marker position={{ lat: d.location.lat, lng: d.location.lng }} />
                    )
                })
            }</>}
        </GoogleMap>
    )
}

))

export default MyMapComponent
