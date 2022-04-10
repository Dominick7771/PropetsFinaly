import React, {useEffect, useRef, useState} from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../utils/firebase";

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
}

const Map = ({center}) => {

    const [coordinates, setCoordinates] = useState([])
    const baseCollectionCoordinates = collection(db, "coordinates");

    useEffect(() => {
        const getBase = async () => {
            const data = await getDocs(baseCollectionCoordinates)
            setCoordinates(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        }
        getBase()
    }, [])

    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return (
        <>
            <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={center}
                zoom={17}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                {coordinates.map((pos, index) => {
                    return <Marker key={index} position={pos.Coordinates}/>
                })}
            </GoogleMap>
        </>
    );
};

export default Map