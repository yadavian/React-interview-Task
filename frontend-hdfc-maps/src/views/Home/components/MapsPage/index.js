import React from 'react'
import BankLocationBox from '../../../../components/BankLocationBox'
import MyMapComponent from '../../../../components/GoogleMap';
import { useGeolocated } from "react-geolocated";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { BiSearch } from 'react-icons/bi';

const MapsPage = () => {
    const [location, setlocation] = React.useState([])
    const [address, setaddress] = React.useState('')
    const [loading, setloading] = React.useState(true)

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });


    const getHDFC = async () => {
        try {
            if (coords) {
                const postData = {
                    lat: coords.latitude, long: coords.longitude
                }
                const data = await axios.post('http://localhost:4444/', postData)
                console.log(data)
                setlocation(data.data)
            }

        } catch (error) {
            console.log("jjj" + error)
        }

    }

    const getCurrentAddress = async () => {
        try {
            if (coords) {
                const postData = {
                    lat: coords.latitude, long: coords.longitude
                }
                const data = await axios.post('http://localhost:4444/current', postData)
                console.log(data)
                setaddress(data.data)
            }

        } catch (error) {
            console.log("jjj" + error)
        }

    }
    React.useEffect(() => {
        // console.log(getHDFC())
        getHDFC()
        getCurrentAddress()
        setloading(false)
    }, [coords])


    return (

        <div>
            {
                loading && (
                    <ReactLoading type="bubbles" color="blue" height={667} width={375} />
                )
            }
            <div style={{ display: "flex", flexDirection: "column", height: "90vh" }}>
                <div style={{ flex: 0.1,margin : "10px 20px" }}>
                    <div style={{display : "flex",justifyContent : "space-between",alignItems : "center"}}>
                        <input type="text" placeholder='Current Location' style={{ width: "90%", height: "60%", margin: "5px 0px", borderRadius: "5px" }} value={address} />
                        <BiSearch size={20}/>
                    </div>
                </div>
                <div style={{ flex: 0.4 }}>
                    <MyMapComponent
                        coords={coords}
                        data={location}
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC68H9SdF9KiJWStgwPugHIgY_IILwefRo&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `50%` }} />}
                        containerElement={<div style={{ height: `250px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div style={{ flex: 0.5 }}>
                    <div style={{ height: "300px", overflow: "scroll" }}>

                        {location && location.map((value, index) => {
                            return (
                                <BankLocationBox key={index} branch_name={value.name} address={value.address} id={value.id} />
                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MapsPage