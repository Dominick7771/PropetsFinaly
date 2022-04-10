import React from 'react';
import lost from "../../../assets/png/lost.png";
import found from "../../../assets/png/found.png";
import vetHelp from "../../../assets/png/vetHelp.png";
import hotels from "../../../assets/png/hotels.png";
import walking from "../../../assets/png/walking.png";
import fostering from "../../../assets/png/fostering.png";
import style from '../../../css_moduls/start_css/footer.module.css'

const Links = () => {
    return (
        <div className={`${style.widthLinks}`}>
            <div className={`${style.heightLinks} row g-2`}>
                <div className={`col-1 d-flex flex-column justify-content-between`}>
                    <img className={`${style.imgSize}`} src={lost} alt='lost'/>
                    <img className={`${style.imgSize}`} src={found} alt='found'/>
                    <img className={`${style.imgSize}`} src={vetHelp} alt='vetHelp'/>
                </div>
                <div className={`col-5 d-flex flex-column justify-content-between m-0 ps-2`}>
                    <a href={'#'}><span className={`${style.colorWhite} ${style.smallText}`}>Lost</span></a>
                    <a href={'#'}><span className={`${style.colorWhite} ${style.smallText}`}>Found</span></a>
                    <a href={'#'}><span className={`${style.colorWhite} ${style.smallText}`}>VetHelp</span></a>
                </div>
                <div className={`col-1 d-flex flex-column justify-content-between`}>
                    <img className={`${style.imgSize}`} src={hotels} alt='hotels'/>
                    <img className={`${style.imgSize}`} src={walking} alt='walking'/>
                    <img className={`${style.imgSize}`} src={fostering} alt='fostering'/>
                </div>
                <div className={`col-5 d-flex flex-column justify-content-between m-0 ps-2`}>
                    <a href={'#'}><span className={`${style.colorWhite} ${style.smallText}`}>Hotels</span></a>
                    <a href={'#'}><span className={`${style.colorWhite} ${style.smallText}`}>Walking</span></a>
                    <a href={'#'}><span className={`${style.colorWhite} ${style.smallText}`}>Fostering</span></a>
                </div>
            </div>
        </div>
    );
};

export default Links;