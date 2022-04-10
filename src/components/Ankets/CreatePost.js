import React, {useEffect, useState} from 'react';
import style from "../../css_moduls/home_css/home.module.css";
import {useDispatch, useSelector} from "react-redux";
import paw from "../../assets/png/paw.png";
import {addDoc, collection} from "firebase/firestore";
import {db, storage} from "../../utils/firebase";
import {NavLink} from "react-router-dom";
import arrowUp from "../../assets/png/arrow-up.png";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {v4 as uuidv4} from "uuid";
import OneImage from "./OneImage";

const CreatePost = () => {

    const images = useSelector(state => state.imgpost)
    const [text, setText] = useState()
    const [download, setDownload] = useState(false)
    const dispatch = useDispatch()
    let userInfo = localStorage.getItem('user')
    let initial = JSON.parse(userInfo)

    useEffect(() => {
        setDownload(images.images.length)
    }, [images.images])

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target.files
        uploadFiles(file)
    }

    const uploadFiles = (file) => {
        for (let i = 0; i < file.length; i++) {
            if (!file[i]) return
            const storageRef = ref(storage, `/images/${uuidv4()}`)
            const uploadTask = uploadBytesResumable(storageRef, file[i])

            uploadTask.on('state_changed', (snapshot) => {},
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => dispatch({type: 'SET_IMG', payload: url}))
                })
        }
    }

    const addBase = () => {
        try {
            const docRef = addDoc(collection(db, "post"), {
                Name: initial.displayName,
                Text: text,
                Date: Date.now(),
                Images: images,
                PhotoURL: initial.photoURL,
                uid: initial.uid,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Your new post!</span> Simply
                text, add photos and publish.</h1>
            <div className={`${style.postCard} row d-flex`}>
                <div className={`d-flex mb-1`}>
                    <div className={`${style.smallerTextBlack} col-2 text-end`}>
                        <label htmlFor="text">Text:</label>
                        <p className={`${style.littleGreenText}`}>up to 1500 char</p>
                    </div>
                    <textarea className={`col-9 ms-2 ${style.smallerTextBlack} ${style.biggestTextarea}`} cols={'17'}
                              rows={'20'} name={'text'} placeholder={'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid at consectetur eligendi eos est impedit in ipsam iste nam nulla officiis porro, quis sequi ullam. Eligendi hic illum quaerat.'}
                              onChange={e => setText(e.target.value)}/>
                </div>
                <div className={`d-flex justify-content-start mb-1 mt-2`}>
                    <div className={`${style.smallerTextBlack} col-2 text-end`}>
                        <label htmlFor="text">Photos:</label>
                        <p className={`${style.littleGreenText}`}>up to 4 images</p>
                    </div>
                    <div className={`col-5 row d-flex flex-wrap justify-content-center align-items-center`}>
                            {images.images.map((item, index) => <OneImage key={index} item={item}/>)}
                    </div>
                    <div className={`d-flex row col-5`}>
                        <div className={`col-6 text-center`}>
                            <img className={`${style.addFileIcon}`} src={arrowUp} alt={''}/>
                            <p className={`${style.smallerTextBlack}`}>Drag and drop photos or</p>
                            <label className={`${style.addFileLabel}`} htmlFor={'fileInput'}>Browse</label>
                        </div>
                        <div className={`${style.divInput} col-6 mb-3`}>
                            <input className={`${style.addFileInput}`} onChange={formHandler} type={'file'} id={'fileInput'}
                                   name={'fileInput'} multiple accept={'image/*, image/jpeg'}/>
                        </div>
                        <span className={`${style.smallerTextBlack} text-center`}>{download} images download</span>
                    </div>
                </div>
                <div className={`row d-flex align-items-center mb-1 mt-1`}>
                    <div className={`col-1`}>
                        <img className={`${style.avatarImg}`} src={initial.photoURL} alt={'dog'}/>
                    </div>
                    <div className={`col-8 ps-4`}>
                        <h3 className={`${style.titleSemiBoldGreen}`}>{initial.displayName}</h3>
                    </div>
                    <div className={`col-3`}>
                        <NavLink to={'/home'} className={`${style.btnHeader}`} onClick={() => {
                            addBase();
                            dispatch({type:'REMOVE_IMG', payload: []})
                        }}>
                            <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                            <span className={'m-auto'}>Publish</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;