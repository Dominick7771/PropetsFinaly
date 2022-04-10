import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";
import {collection, getDocs, query, getDoc, doc} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";
import PostCard from "../content_home/PostCard";
import {sortObject} from "../../../../../utils/utils";

const Favorites = () => {

    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    let user = localStorage.getItem('user')
    let initial = JSON.parse(user)
    const baseCollectionIdRef = query(collection(db, initial.uid));

    const getIdPost = async () => {
        const data = await getDocs(baseCollectionIdRef)
        const base = (data.docs.map(doc => ({...doc.data()}).posts));
        for (let i = 0; i < base.length; i++) {
            const getOnePostRef = doc(db, "post", base[i]);
            const docSnap = await getDoc(getOnePostRef);
            setPosts(post => post.concat(docSnap.data()).sort(sortObject('Date')))
        }
    }

    useEffect( () => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}});
        user = localStorage.getItem('user')
        getIdPost()
    }, [])

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto`}>
            {posts.map((user, index) => <PostCard user={user} key={index}/>)}
        </div>
    );
};

export default Favorites;