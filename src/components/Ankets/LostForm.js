import React, {useState} from 'react';
import style from '../../css_moduls/home_css/home.module.css';
import anketa from '../../assets/png/anketa.png';
import paw from '../../assets/png/paw.png';
import AddImages from "./AddImages";
import {useDispatch} from "react-redux";
import {useJsApiLoader} from "@react-google-maps/api";
import {googleConfig} from "../../utils/google";
import Autocomplete from "../../utils/autocomplete";
const libraries = ['places']

const LostForm = () => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-Map-script',
        googleMapsApiKey: googleConfig,
        libraries
    })

    const timePost = () => {
        const date = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleString("en-US", options)
    }

    let userAut = localStorage.getItem('user')
    let authUser = JSON.parse(userAut)
    let userInfo = localStorage.getItem('userInfo')
    let initial = JSON.parse(userInfo)

    const [type, setType] = useState('')
    const [sex, setSex] = useState('')
    const [breed, setBreed] = useState('')
    const [color, setColor] = useState('')
    const [height, setHeight] = useState('')
    const [features, setFeatures] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState(initial.phone)
    const [email, setEmail] = useState(initial.email)
    const [facebook, setFacebook] = useState(initial.facebook)
    const dispatch = useDispatch()

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Lost your buddy?</span> Keep
                calm and complete the form.</h1>
            <div className={`${style.lostFoundForm} row d-flex`}>
                <div className={'col-6 d-flex flex-column'}>
                    <div className={`mb-1`}>
                        <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="type">Type:</label>
                        <select defaultValue={'Choose'} className={`${style.select} ms-2`} name={"type"}
                                onChange={e => setType(e.target.value)}>
                            <option value={'Choose'} disabled>Choose</option>
                            <option value={'Dog'}>Dog</option>
                            <option value={'Cat'}>Cat</option>
                            <option value={'Rabbit'}>Rabbit</option>
                            <option value={'Parrot'}>Parrot</option>
                        </select>
                    </div>
                    <div className={`mb-1`}>
                        <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="sex">Sex:</label>
                        <select defaultValue={'Choose'} className={`${style.select} ms-2`} name={"sex"}
                                onChange={e => setSex(e.target.value)}>
                            <option value={'Choose'} disabled>Choose</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                        </select>
                    </div>
                    <div className={`mb-1`}>
                        <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="breed">Breed:</label>
                        <input className={'col-7'} type="text" placeholder="Golden Retriever" name="breed"
                               onChange={e => setBreed(e.target.value)}/>
                    </div>
                    <div className={`mb-1`}>
                        <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="color">Color:</label>
                        <input className={'col-7'} type="text" placeholder="Beige" name="color"
                               onChange={e => setColor(e.target.value)}/>
                    </div>
                    <div className={`mb-1`}>
                        <label className={`${style.smallerTextBlack} col-3 text-end`}
                               htmlFor="height">Height:</label>
                        <select defaultValue={'Choose'} className={`${style.select} ms-2`} name={"height"}
                                onChange={e => setHeight(e.target.value)}>
                            <option value={'Choose'} disabled>Choose</option>
                            <option value={'45-70 cm'}>45-70 cm</option>
                            <option value={'20-45 cm'}>20-45 cm</option>
                            <option value={'0-20 cm'}>0-20 cm</option>
                        </select>
                    </div>
                    <div className={`d-flex mb-1`}>
                        <div className={`${style.smallerTextBlack} col-3 text-end`}>
                            <label htmlFor="features">Distinctive features:</label>
                            <p className={`${style.littleGreenText}`}>up to 60 char</p>
                        </div>
                        <textarea className={`ms-2 ${style.smallerTextBlack} ${style.smallTextarea}`} cols={'17'}
                                  rows={'3'} name={'features'}
                                  placeholder={'blue collar with stars, no left ear, damaged tail.'}
                                  onChange={e => setFeatures(e.target.value)}/>
                    </div>
                    <div className={`d-flex mb-1`}>
                        <div className={`${style.smallerTextBlack} col-3 text-end`}>
                            <label htmlFor="description">Description:</label>
                            <p className={`${style.littleGreenText}`}>up to 150 char</p>
                        </div>
                        <textarea className={`ms-2 ${style.smallerTextBlack} ${style.bigTextarea}`} cols={'17'}
                                  rows={'6'} name={'description'}
                                  placeholder={'brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}
                                  onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className={`d-flex mb-1`}>
                        <label className={`${style.smallerTextBlack} col-3 text-end`}
                               htmlFor="location">Location:</label>
                        <Autocomplete isLoaded={isLoaded}/>
                    </div>
                </div>
                <div className={'col-6 text-center'}>
                    <img className={`${style.anketImg}`} src={anketa} alt={''}/>
                    <hr className={`${style.hrLine}`}/>
                    <AddImages/>
                </div>
                <hr className={`${style.hrLine}`}/>
                <div className={`mb-3`}>
                    <div className={`mb-1 row`}>
                        <label className={`${style.smallerTextBlack} col-2 text-end`}
                               htmlFor="contacts">Contacts:</label>
                        <input className={`col-3`} type="tel" placeholder="Phone"
                               value={phone}
                               onChange={e => setPhone(e.target.value)}/>
                        <input className={`col-3`} type="email" placeholder="Email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input className={`col-3`} type="text" placeholder="Facebook profile"
                               value={facebook}
                               onChange={e => setFacebook(e.target.value)}/>
                    </div>
                </div>
                <div className={`row d-flex align-items-center mb-1 mt-1`}>
                    <div className={`col-1`}>
                        <img className={`${style.avatarImg}`} src={authUser.photoURL} alt={'dog'}/>
                    </div>
                    <div className={`col-8 ps-4`}>
                        <h3 className={`${style.titleSemiBoldGreen}`}>{authUser.displayName}</h3>
                    </div>
                    <div className={`col-3`}>
                        <button className={`${style.btnHeader}`} onClick={() => {
                            dispatch({
                                type: 'SET_ANKETA_INFO', payload: {
                                    name: authUser.displayName, type: type, sex: sex, breed: breed, color: color, height: height,
                                    features: features, description: description,
                                    contacts: {phone: phone, email: email, facebook: facebook},
                                    date: Date.now(), found: false, dateString: timePost(), photoURL: authUser.photoURL
                                }
                            })
                            dispatch({type: 'SET_ANKET', payload: {finish: true, edit: false}})
                        }}>
                            <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                            <span className={'m-auto'}>Publish</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LostForm;