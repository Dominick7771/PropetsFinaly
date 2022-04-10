import React from 'react';
import LostForm from "./LostForm";
import {useSelector} from "react-redux";
import Lost from "../home/home_main/middle_block_content/content_lost/Lost";
import PreviewLostForm from "./PreviewLostForm";
import EditLostForm from "./EditLostForm";

const LostPet = () => {

    const selector = useSelector(state => state.map)
    if(selector.finish === false && selector.edit === false) {
        return <LostForm/>
    }
    else if (selector.finish === true && selector.edit === false) {
        return <PreviewLostForm/>
    }
    else if (selector.finish === false && selector.edit === true) {
        return <EditLostForm/>
    } else {
        return <Lost/>
    }

};

export default LostPet;