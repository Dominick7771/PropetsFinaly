import React, {useEffect} from 'react';
import style from '../css_moduls/home_css/home.module.css'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {useDispatch} from "react-redux";

const Autocomplete = ({isLoaded}) => {

    const dispatch = useDispatch()

    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        init,
        clearSuggestions,
    } = usePlacesAutocomplete({
        initOnMount: false,
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect =
        ({description}) =>
            () => {
                setValue(description, false);
                clearSuggestions();

                getGeocode({address: description})
                    .then((results) => getLatLng(results[0]))
                    .then(({lat, lng}) => {
                        dispatch({type: 'SET_COORDINATES', payload: {lat, lng}})
                    })
                    .catch((error) => {
                        console.log("😱 Error: ", error);
                    });
                dispatch({type: 'SET_LOCATION', payload: description})
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: {main_text, secondary_text},
            } = suggestion;

            return (
                <li className={`${style.listItem}`} key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    useEffect(() => {
        if(isLoaded) {
            init()
        }
    },[isLoaded, init])

    return (
        <div ref={ref}>
            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.middleTextarea}`} cols={'17'}
                      rows={'2'} placeholder="Florentin Street, Tel Aviv" name="location"
                      onChange={handleInput} disabled={!ready} value={value}/>
            {status === "OK" && <ul className={`${style.suggestions}`}>{renderSuggestions()}</ul>}
        </div>
    );
};

export default Autocomplete;