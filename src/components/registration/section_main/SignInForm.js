import React, {useState} from 'react';
import style from "../../../css_moduls/registration_css/registration.main.module.css";
import AgreePersonalData from "../section_footer/AgreePersonalData";
import FooterInBtn from "../section_footer/Footer_InBtn";
import {useDispatch} from "react-redux";
import {useInput} from "../../../utils/hooks";

const SignInForm = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const emailValid = useInput('', {isEmpty: true, isEmail: true})
    const passwordValid = useInput('', {isEmpty: true, minLength: 8, maxLength: 14})

    return (
        <>
            <div className={`${style.heightFormAuth} row d-flex flex-column justify-content-center mb-4`}>
                <div className={'col-6'}>
                    <div className={'text-center'}>

                        {(emailValid.isDirty && emailValid.isEmpty) && <div className={`${style.errorText}`}>The field cannot be empty</div>}
                        {(emailValid.isDirty && emailValid.emailError) && <div className={`${style.errorText}`}>Wrong email</div>}

                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email" autoComplete="on"
                               onChange={(e => {
                                   setEmail(e.target.value)
                                   emailValid.onChange(e)
                               })} required
                               onBlur={e => {emailValid.onBlur(e)}}/>
                    </div>
                    <div className={'text-center'}>
                        {(passwordValid.isDirty && passwordValid.isEmpty) && <div className={`${style.errorText}`}>The field cannot be empty</div>}
                        {(passwordValid.isDirty && (passwordValid.minLengthError || passwordValid.maxLengthError)) &&
                        <div className={`${style.errorText}`}>The password must be between 8 and 14 characters long</div>}

                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" autoComplete="on"
                               onChange={(e => {
                                   setPassword(e.target.value)
                                   passwordValid.onChange(e)
                               })} required
                               onBlur={e => {passwordValid.onBlur(e)}}/>
                    </div>
                </div>
            </div>
            <div className={`${style.forgotPwd} ${style.marginInForm} col-6 text-center`}>
                <a href={'#'}>Forgot password?</a>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <AgreePersonalData/>
                <FooterInBtn emailValid={emailValid} passwordValid={passwordValid} email={email} password={password}/>
            </div>
        </>
    );
};

export default SignInForm;