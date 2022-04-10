import React from 'react';
import Section_welcome from "./section_welcome/Section_welcome";
import Section_tagline from "./section_tagline/Section_tagline";
import Section_info from "./section_info/Section_info";
import Section_coming from "./section_coming/Section_coming";

const Main = () => {
    return (
        <>
            <Section_welcome/>
            <Section_tagline/>
            <Section_info/>
            <Section_coming/>
        </>
    );
};

export default Main;