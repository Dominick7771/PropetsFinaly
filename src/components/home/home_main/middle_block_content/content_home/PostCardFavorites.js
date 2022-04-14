import React, {useState} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css'
import avatar from '../../../../../assets/png/avatar.jpg';
import {getAuth} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";

const PostCardFavirites = (props) => {

    const [isOpen, setOpen] = useState(true)
    const auth = getAuth()

    const getImg = (item) => {
        if (item.length === 1) {
            return <img src={item} alt={"user's photo"}/>
        } else {
            return item.map((item, index) => <img key={index} src={item} alt={"user's photo"}/>)
        }
    }

    const addPostFavorites = () => {
        try {
            const docRef = addDoc(collection(db, auth.currentUser.uid), {
                posts: props.user.id
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const getDate = (time) => {
        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        time = new Date(time)
        return time.toLocaleString("en-US", options)
    }

    return (
        <div className={`${style.postCard} row d-flex`}>
            <div className={`${style.avatarImg} col-1`}>
                <img src={props.user.PhotoURL} alt={'avatar'}/>
            </div>
            <div className={`col-10 d-flex flex-column`}>
                <h3 className={`${style.titleSemiBold}`}>{props.user.Name}</h3>
                <p className={`${style.smallerText}`}>{getDate(props.user.Date)}</p>
                <div className={`row mb-2 mt-1 text-center`}>
                    <div className={`${style.picturePost} d-flex flex-row flex-wrap justify-content-center`}>
                        {getImg(props.user.Images.images)}
                    </div>
                </div>
                <p className={`${style.textPost} ${isOpen ? '' : `${style.textPostOpen}`}`}>{props.user.Text}</p>
                <button onClick={() => setOpen(!isOpen)} className={`${style.greenLink} text-end`}>Show more</button>
            </div>
        </div>
    );
};

export default PostCardFavirites;