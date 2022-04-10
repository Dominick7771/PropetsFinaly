import React from 'react';
import paw from '../../../assets/png/paw.png';
import style from '../../../css_moduls/registration_css/registration.footer.module.css';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const FooterInBtn = (props) => {

    const dispatch = useDispatch();
    const {push} = useHistory()
    const auth = getAuth();

    const Authorization = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch({
                    type: 'SET_USER', payload: {
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken
                    }
                })
                push('/home')
                dispatch({type: 'SET_MODAL', payload: false})
            })
            .catch(() => alert('Invalid user!'))
    };

    return (
        <div className={'col-6 d-flex justify-content-evenly'}>
            <button className={`${style.btnCancel} d-flex mb-2 align-items-center justify-content-center`}
                    onClick={() => dispatch({type: 'SET_MODAL', payload: false})}>Cancel
            </button>
            <button disabled={!props.emailValid.inputValid || !props.passwordValid.inputValid}
                    className={`${style.btnSubmit} ${(!props.emailValid.inputValid || !props.passwordValid.inputValid) ? `${style.btnSubmitUnavailable}` : ''}`}
                    onClick={() => Authorization(props.email, props.password)}>
                <img className={` ${style.paw}`} src={paw} alt={paw}/>
                <span className={'m-auto'}>Submit</span>
            </button>
        </div>
    );
};

export default FooterInBtn;