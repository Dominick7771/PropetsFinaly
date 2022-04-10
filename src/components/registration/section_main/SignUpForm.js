import React, {useState} from 'react';
import style from '../../../css_moduls/registration_css/registration.main.module.css';
import {useDispatch} from "react-redux";
import AgreePersonalData from "../section_footer/AgreePersonalData";
import Footer_UpBtn from "../section_footer/Footer_UpBtn";
import {useInput} from "../../../utils/hooks";

const SignUpForm = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [passwordFirst, setPasswordFirst] = useState()
    const [passwordSecond, setPasswordSecond] = useState()

    const nameValid = useInput('', {isEmpty: true})
    const emailValid = useInput('', {isEmpty: true, isEmail: true})
    const passwordFirstValid = useInput('', {isEmpty: true, minLength: 8, maxLength: 14})
    const passwordSecondValid = useInput('', {isEmpty: true, minLength: 8, maxLength: 14})


    const compare = (passwordFirst, passwordSecond) => {
        if (passwordFirst !== passwordSecond) {
            alert("Passwords doesn't match")
        }
        dispatch({type: 'SET_USER_PASSWORD', payload: passwordSecond})
    }

    return (
        <>
            <div className={`${style.heightFormRegister} ${style.marginUpForm} row align-items-center`}>
                <div className={'col-6'}>
                    <div className={'text-center'}>
                        {(nameValid.isDirty && nameValid.isEmpty) && <div className={`${style.errorText}`}>The field cannot be empty</div>}

                        <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                        <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name" autoComplete="on"
                               onChange={(e) => {
                                   setName(e.target.value)
                                   nameValid.onChange(e)
                               }} required
                               onBlur={(e) => {
                                   dispatch({type: 'SET_USER_NAME', payload: name})
                                   nameValid.onBlur(e)
                               }}/>
                    </div>
                    <div className={'text-center'}>
                        {(emailValid.isDirty && emailValid.isEmpty) && <div className={`${style.errorText}`}>The field cannot be empty</div>}
                        {(emailValid.isDirty && emailValid.emailError) && <div className={`${style.errorText}`}>Wrong email</div>}

                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email" autoComplete="on"
                               onChange={(e) => {
                                   setEmail(e.target.value)
                                   emailValid.onChange(e)
                               }} required
                               onBlur={(e) => {
                                   dispatch({type: 'SET_USER_EMAIL', payload: email})
                                   emailValid.onBlur(e)
                               }}/>
                    </div>
                    <div className={'text-center'}>
                        {(passwordFirstValid.isDirty && passwordFirstValid.isEmpty) && <div className={`${style.errorText}`}>The field cannot be empty</div>}
                        {(passwordFirstValid.isDirty && (passwordFirstValid.minLengthError || passwordFirstValid.maxLengthError)) &&
                        <div className={`${style.errorText}`}>The password must be between 8 and 14 characters long</div>}

                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" autoComplete="on"
                               onChange={(e) => {
                                   setPasswordFirst(e.target.value)
                                   passwordFirstValid.onChange(e)
                               }}
                               onBlur={(e) => passwordFirstValid.onBlur(e)} required/>
                    </div>
                    <div className={'text-center'}>
                        {(passwordSecondValid.isDirty && passwordSecondValid.isEmpty) && <div className={`${style.errorText}`}>The field cannot be empty</div>}
                        {(passwordSecondValid.isDirty && (passwordSecondValid.minLengthError || passwordSecondValid.maxLengthError)) &&
                        <div className={`${style.errorText}`}>The password must be between 8 and 14 characters long</div>}

                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" autoComplete="on"
                               onChange={(e) => {
                                   setPasswordSecond(e.target.value)
                                   passwordSecondValid.onChange(e)
                               }} required
                               onBlur={(e) => {
                                   compare(passwordFirst, passwordSecond)
                                   passwordSecondValid.onBlur(e)
                               }}/>
                    </div>
                </div>
                <div className={`${style.textPwd} col-6 d-flex flex-column justify-content-center`}>
                    <p>Password must have at least 8 characters with at least one Capital letter, at least one lower
                        case
                        letter and at least one number or special character.</p>
                    <p>Please re-enter your password</p>
                </div>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <AgreePersonalData/>
                <Footer_UpBtn nameValid={nameValid} emailValid={emailValid} passwordFirstValid={passwordFirstValid}
                              passwordSecondValid={passwordSecondValid}/>
            </div>
        </>
    );
};

export default SignUpForm;