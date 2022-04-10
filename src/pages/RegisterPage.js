import React, {useEffect} from 'react';
import style from "../css_moduls/registration_css/registration.module.css";
import Section_header_logo from "../components/registration/section_header/Section_header_logo";
import Section_header_welcome from "../components/registration/section_header/Section_header_welcome";
import SingInUp from "../components/registration/section_main/SingInUp";

const RegisterPage = () => {

    return (
        <section className={`${style.box} container-fluid pt-3`}>
            <Section_header_logo/>
            <Section_header_welcome/>
            <SingInUp/>
        </section>
    );
};

export default RegisterPage;
