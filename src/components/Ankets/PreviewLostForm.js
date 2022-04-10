import React from 'react';
import style from "../../css_moduls/home_css/home.module.css";
import avatar from "../../assets/png/avatar.jpg";
import {FacebookIcon, FacebookShareButton} from "react-share";
import edit from "../../assets/png/edit.png";
import {NavLink} from "react-router-dom";
import paw from "../../assets/png/paw.png";
import {useDispatch, useSelector} from "react-redux";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../utils/firebase";
import phone from "../../assets/png/phone.png";
import fb from "../../assets/png/facebook.png";
import email from "../../assets/png/email.png";

const PreviewLostForm = () => {

    const dispatch = useDispatch()
    const anket = useSelector(state => state.anketa)
    const shareUrl = 'https://www.google.com/'

    const addBase = () => {
        try {
            const docRef = addDoc(collection(db, "lost"), {
                Type: anket.type,
                Sex: anket.sex,
                Location: anket.location,
                Height: anket.height,
                Description: anket.description,
                Features: anket.features,
                Contacts: [anket.contacts.phone, anket.contacts.email, anket.contacts.facebook],
                Breed: anket.breed,
                Color: anket.color,
                Name: anket.name,
                Images: anket.images,
                photoURL: anket.photoURL,
                data: Date.now(),
                dateString: timePost(),
                found: false,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const addBaseCoordinates = () => {
        dispatch({type: 'SET_ANKET', payload: {finish: false, edit: false}})
        dispatch({type: 'SET_ANKET_NULL', payload: null})
        try {
            const docRef = addDoc(collection(db, "coordinates"), {
                Coordinates: anket.coordinates
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const timePost = () => {
        const date = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleString("en-US", options)
    }

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column align-items-center col-6 overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold} ${style.postCardTitle}`}><span className={`${style.titleBold}`}>Preview and Publish. </span>Please
                share the post to your FB to be more effective</h1>
            <div className={`${style.postCard} d-flex`}>
                <div className={`col-5`}>
                    <img className={`${style.imgPreview}`} src={anket.images[0]} alt={anket.type}/>
                </div>
                <div className={`col-7 ps-3 pe-3`}>
                    <span className={`${style.titleBigBold}`}>{anket.type}, {anket.breed}</span>
                    <div className={`d-flex`}>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallerTextGreen}`}>Color: <span
                                className={`${style.smallerTextBlack}`}>{anket.color}</span></h2>
                            <h2 className={`${style.smallerTextGreen}`}>Sex: <span
                                className={`${style.smallerTextBlack}`}>{anket.sex}</span></h2>
                            <h2 className={`${style.smallerTextGreen}`}>Height: <span
                                className={`${style.smallerTextBlack}`}>{anket.height}</span></h2>
                        </div>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallerTextGreen}`}>Distinctive features <span
                                className={`${style.smallerTextBlack}`}>{anket.features}</span></h2>
                        </div>
                    </div>
                    <div>
                        <h2 className={`${style.smallerTextGreen}`}>Description: <span
                            className={`${style.smallerTextBlack}`}>{anket.description}</span></h2>
                    </div>
                    <hr className={`mt-3 mb-0`}/>
                    <div className={`mb-2`}>
                        <span className={`${style.smallerTextBlack}`}>{anket.location}</span>
                    </div>
                    <div className={`d-flex`}>
                        <div className={`${style.avatarImg} col-1`}>
                            <img src={avatar} alt={''}/>
                        </div>
                        <div className={`d-flex flex-column col-7 ps-3`}>
                            <div>
                                <span className={`${style.titleSemiBoldGreen}`}>{anket.name}</span>
                            </div>
                            <div>
                                <span className={`${style.smallerTextBlack}`}>{timePost()}</span>
                            </div>
                        </div>
                        <div className={`col-4 d-flex justify-content-evenly align-items-center`}>
                            <a href={`tel: ${anket.contacts.phone}`}><img className={`${style.contactsBtn}`} src={phone}
                                                                          alt={''}/></a>
                            <a href={`https://${anket.contacts.facebook}`} target={'_blank'}><img
                                className={`${style.contactsBtnFb}`} src={fb} alt={''}/></a>
                            <a href={`mailto: ${anket.contacts.email}`}><img className={`${style.contactsBtn} mt-1`}
                                                                             src={email} alt={''}/></a></div>
                    </div>
                </div>
            </div>
            <span className={`${style.titleSemiBoldGreen} ${style.postCardTitle}`}>Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two weeks. To make it active again follow the instructions you’ll get in email.</span>
            <div className={`${style.postCardTitle} d-flex justify-content-between`}>
                <FacebookShareButton url={shareUrl} quote={`I lost my pet!\n${anket.type}, ${anket.breed}\nColor: ${anket.color}\nSex: ${anket.sex}\nHeight: ${anket.height}\nDistinctive features: ${anket.features}\nDescription: ${anket.description}\n Location: ${anket.location}\nMy contacts: ${anket.contacts.email}, ${anket.contacts.phone}\n`}
                hashtag={'#propets'}>
                    <FacebookIcon round={true} size={15}/>
                    <span className={`${style.smallerTextBlack} ps-1`}>Share to Facebook</span>
                </FacebookShareButton>
                <div className={'d-flex'}>
                    <button className={`${style.btnEdit} me-2`}
                            onClick={() => dispatch({type: 'SET_ANKET', payload: {finish: false, edit: true}})}>
                        <img className={`${style.editIcon}`} src={edit} alt={''}/>
                        <span className={'m-auto'}>Edit</span>
                    </button>
                    <NavLink to='/lost' className={`${style.btnHeader}`}
                             onClick={() => {
                                 addBase();
                                 addBaseCoordinates()
                             }}>
                        <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                        <span className={'m-auto'}>Publish</span>
                    </NavLink>
                </div>
            </div>
            <span className={`${style.littleGreyText} ${style.postCardTitle} text-end`}>By clicking “Publish”, you agree to us processing your information in accordance with these terms.</span>
        </div>
    );
};

export default PreviewLostForm;