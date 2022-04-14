import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import save from '../../../../../assets/png/save.png';
import pencil from '../../../../../assets/png/pencil.png';
import camera from '../../../../../assets/png/camera.png';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAuth, updateProfile} from "firebase/auth";
import {updateDoc, doc, query, collection, where, getDocs} from "firebase/firestore";
import {db, storage} from "../../../../../utils/firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {v4 as uuidv4} from "uuid";
import PostCard from "../content_home/PostCard";
import {sortObject} from "../../../../../utils/utils";
import Loading from "../../../../Loading";

const PersonalArea = () => {

    const auth = getAuth()
    let user = localStorage.getItem('user')
    let initial = JSON.parse(user)
    let userInfo = localStorage.getItem('userInfo')
    let initialInfo = JSON.parse(userInfo)
    const [button, setButton] = useState(false)
    const [state, setState] = useState(true)
    const [userName, setUserName] = useState(initial.displayName)
    const [image, setImage] = useState(initial.photoURL)
    const [email, setEmail] = useState(initialInfo.email)
    const [phone, setPhone] = useState(initialInfo.phone)
    const [facebook, setFacebook] = useState(initialInfo.facebook)
    let obj = {email: email, phone: phone, facebook: facebook, uid: initial.uid}
    const dispatch = useDispatch()
    const [base, setBase] = useState([])
    const baseCollectionMyPosts = query(collection(db, "post"), where("uid", "==", initial.uid))

    const formHandler = (e) => {
        e.preventDefault();
        setButton(true)
        const file = e.target.files[0]
        uploadFiles(file)
    }

    const uploadFiles = (file) => {
        if (!file) return
        const storageRef = ref(storage, `/avatar/${uuidv4()}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setImage(url)
                        setButton(false)
                    })

            })
    }

    const addUserInfo = () => {
        try {
            const updateUserRef = doc(db, initial.uid, "userInfo");
            const docRef = updateDoc(updateUserRef, {
                email: email,
                phone: phone,
                facebook: facebook,
                uid: initial.uid
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: image,
        })
    }

    const updateStorage = () => {
        localStorage.setItem('user', JSON.stringify(auth.currentUser))
        localStorage.setItem('userInfo', JSON.stringify(obj))
    }

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}});
        updateUser()
        addUserInfo()
    }, [userName, email, phone, facebook, image])

    useEffect(() => {
        const getBase = async () => {
            const data = await getDocs(baseCollectionMyPosts)
            setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject("Date")))
        }
        getBase()
    }, [])

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Your profile. </span>Change,
                edit and manage your data.</h1>
            <div className={`${style.buttonsStyle} mt-4 p-0 row d-flex align-items-center`}>
                <button className={`${state ? `${style.active}` : ``} col-6`} onClick={() => setState(true)}>My
                    profile
                </button>
                <button className={`${state ? `` : `${style.active}`} col-6`}
                        onClick={() => setState(false)}>Activities
                </button>
            </div>
            {state ?
                <>
                    <div className={`${style.postCard} mt-0 row d-flex align-items-center`}>
                        <div className={`row d-flex align-items-center mt-3 ms-1 position-relative`}>
                            <div className={`${style.cameraDiv} position-absolute`}>
                                <img className={`${style.cameraImg}`} src={camera} alt={''}/>
                            </div>
                            <div className={`${style.avatarImg} col-1 `}>
                                <label htmlFor={'photoInput'}><img src={initial.photoURL} alt={''}/></label>
                                <input className={`${style.photoInput}`} onChange={formHandler} type={'file'}
                                       id={'photoInput'}
                                       name={'photoInput'} multiple accept={'image/*, image/jpeg'}/>
                            </div>
                            <div className={`col-10 d-flex flex-row`}>
                                <input className={`${style.inputEditName} me-2`} type={'text'} name={'userName'}
                                       value={userName}
                                       onChange={e => setUserName(e.target.value)}/>
                                <img className={`${style.iconEditName}`} src={pencil} alt={''}/>
                            </div>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`} htmlFor="email">Email:</label>
                            <input className={'col-6'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`} htmlFor="phone">Phone:</label>
                            <input className={'col-6'} type="text" placeholder="000-000-00-00" name="phone"
                                   value={phone}
                                   onChange={e => setPhone(e.target.value)}/>
                        </div>
                        <div className={`mb-5`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`} htmlFor="fbLink">FB
                                link:</label>
                            <input className={'col-6'} type="text" placeholder="https://www.facebook.com/helenjohnson"
                                   name="fbLink"
                                   value={facebook}
                                   onChange={e => setFacebook(e.target.value)}/>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-end ${style.postCardTitle}`}>
                        <NavLink to='/home' className={`${style.btnEdit} me-2`}>
                            <span className={'m-auto'}>Cancel</span>
                        </NavLink>
                        {button ?
                            <Loading/> :
                            <button className={`${style.btnHeader}`} onClick={updateStorage}>
                                <img className={`${style.iconBtn}`} src={save} alt={''}/>
                                <span className={'m-auto'}>Save changes</span>
                            </button>}
                    </div>
                </>
                :
                <div>
                    {base.map((user, index) => <PostCard user={user} key={index}/>)}
                </div>}
        </div>
    );
};

export default PersonalArea;