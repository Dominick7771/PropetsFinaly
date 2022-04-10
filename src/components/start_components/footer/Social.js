import React from 'react';
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";
import style from "../../../css_moduls/start_css/footer.module.css"


const Social = () => {
    return (
        <div className={`${style.widthSocial}`}>
            <div>
                <a href={'#'}><img className={`m-2`} src={facebook} alt='facebook'/></a>
                <a href={'#'}><img className={`m-2`} src={instagram} alt='instagram'/></a>
            </div>
            <div>
                <p className={`${style.colorWhite} ${style.smallerText}`}>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
            </div>
        </div>
    );
};

export default Social;