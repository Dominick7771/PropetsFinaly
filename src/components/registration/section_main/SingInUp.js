import React, {useState} from 'react';
import style from '../../../css_moduls/registration_css/registration.main.module.css';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const SingInUp = () => {

    const [state, setState] = useState(true)

    const signInUp = (state) => {
        if (state === true) {
            return <SignUpForm/>
        } else {
            return <SignInForm/>
        }
    }

    return (
        <div className={`${style.buttonsStyle} mb-4`}>
            <button className={state ? `${style.active}` : ``} onClick={() => setState(true)}>Sign up</button>
            <button className={state ? `` : `${style.active}`} onClick={() => setState(false)}>Sign in</button>
            {signInUp(state)}
        </div>
    );
};

export default SingInUp;