import React from 'react';
import FoundForm from "./FoundForm";
import {useSelector} from "react-redux";
import EditFoundForm from "./EditFoundForm";
import PreviewFoundForm from "./PreviewFoundForm";
import Found from "../home/home_main/middle_block_content/content_found/Found";

const FoundPet = () => {

    const selector = useSelector(state => state.map)
    if(selector.finish === false && selector.edit === false) {
        return <FoundForm/>
    }
    else if (selector.finish === true && selector.edit === false) {
        return <PreviewFoundForm/>
    }
    else if (selector.finish === false && selector.edit === true) {
        return <EditFoundForm/>
    } else {
        return <Found/>
    }
};

export default FoundPet;