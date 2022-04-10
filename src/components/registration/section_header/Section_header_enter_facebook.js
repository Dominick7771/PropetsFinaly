import React from 'react';
import style from '../../../css_moduls/registration_css/section_header.module.css';
import facebook from '../../../assets/png/facebook.png'
import {getAuth, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const SectionHeaderEnterFacebook = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    const dispatch = useDispatch();
    const {push} = useHistory()

    const signInWithFacebook = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                const user = result.user
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
            .catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <div className={'col-5'}>
            <button className={`${style.btnFacebook}`} onClick={signInWithFacebook}>
                <img className={`${style.fb}`} src={facebook} alt={'facebook'}/>
                <span className={'m-auto'}>Enter with Facebook</span>
            </button>
        </div>
    );
};

export default SectionHeaderEnterFacebook;