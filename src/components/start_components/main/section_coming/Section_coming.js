import React from 'react';
import Comming from "./Comming";
import About_coming from "./About_coming";
import Logo from "./Logo";
import style from '../../../../css_moduls/start_css/section_coming.module.css'

const SectionComing = () => {
    return (
        <section className={`${style.colorSection} container-fluid`}>
            <div className={`row justify-content-center align-items-center pb-2 pt-2`}>
                <div className={'d-flex col-10 align-items-center'}>
                    <Comming/>
                    <div className={`row align-items-center col-6 justify-content-between`}>
                        <About_coming/>
                        <Logo/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionComing;