import React, {useEffect, useState} from 'react';
import style from '../../../../css_moduls/home_css/home.module.css';
import img_dental_care from '../../../../assets/png/dental_care.png';
import img_pet_hotel from '../../../../assets/png/pet_hotel.png';
import img_pet_hotel_2 from '../../../../assets/png/pet_hotel_2.png';
import {useDispatch, useSelector} from "react-redux";
import {defaultCenter, getBrowserLocation} from "../../../../utils/geolocation";
import {useJsApiLoader} from "@react-google-maps/api";
import {googleConfig} from "../../../../utils/google";
import Map from "../../../../maps/Map";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../utils/firebase";
const libraries = ['places']

const PromoHome = () => {

    const [center, setCenter] = useState(defaultCenter)
    const [coordinates, setCoordinates] = useState([])
    const baseCollectionCoordinates = collection(db, "coordinates")
    const dispatch = useDispatch()

    useEffect(() => {
        const getBase = async () => {
            const data = await getDocs(baseCollectionCoordinates)
            setCoordinates(data.docs.map(doc => ({...doc.data()})));
        }
        getBase()
    }, [])

    const {isLoaded} = useJsApiLoader({
        id: 'google-Map-script',
        googleMapsApiKey: googleConfig,
        libraries
    })

    useEffect(() => {
        getBrowserLocation()
            .then((curLoc) => {
                setCenter(curLoc)
            })
            .catch((defaultLocation) => {
                setCenter(defaultLocation)
            })
    }, [])

    const map = useSelector(state => state.map)

    if(map.map === false) {
        return (
            <div className={`${style.mainGreenBack} d-flex flex-column col-3 justify-content-start pb-2 pt-2 align-items-end`}>
                <img className={`m-auto`} src={img_dental_care} alt={'dental_care'}/>
                <img className={`m-auto`} src={img_pet_hotel} alt={'pet_hotel'}/>
                <img className={`m-auto`} src={img_pet_hotel_2} alt={'pet_hotel_2'}/>
            </div>
        );
    } else {
        return (
            <div className={`d-flex flex-column col-3 pb-2 pt-2`}>
                <div className={`${style.blockBtns}`}>
                    <input placeholder='Location' className={`${style.searchBtn} ${style.smallBtn}`}
                           onChange={e => dispatch({type: 'SET_FILTER_LOCATION', payload: e.target.value})}/>
                </div>
                <div className={`${style.blockMap} pt-3 ps-2`}>
                    <div className={`w-100 h-100`}>
                        {isLoaded ? <Map center={center}/> : <h1>Loading</h1>}
                    </div>
                </div>
            </div>
        )
    }
};

export default PromoHome;