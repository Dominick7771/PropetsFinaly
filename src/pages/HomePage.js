import React, {useEffect, useState} from 'react';
import HomeHeader from "../components/home/home_header/HomeHeader";
import MainHome from "../components/home/home_main/middle_block_content/content_home/MainHome";
import {getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../utils/firebase";

const HomePage = () => {

    const auth = getAuth();
    const userReg = useSelector(state => state.registration)
    const dispatch = useDispatch()
    let userInfo = localStorage.getItem('user')
    let initial = JSON.parse(userInfo)

    const update = () => {
        if (userReg.name !== null) {
            updateProfile(auth.currentUser, {
                displayName: userReg.name,
                photoURL: 'https://firebasestorage.googleapis.com/v0/b/propets-f5334.appspot.com/o/avatar%2F715417e4-4e05-42d4-9ded-ce4429c93739?alt=media&token=6d173635-a4fb-46fe-ba3d-6036ab68e79e'
            })
                .then()
                .catch((error) => {
                    console.log(error)
                });
            onAuthStateChanged(auth, (user) => {
                user['displayName'] = userReg.name;
                user['photoURL'] = 'https://firebasestorage.googleapis.com/v0/b/propets-f5334.appspot.com/o/avatar%2F715417e4-4e05-42d4-9ded-ce4429c93739?alt=media&token=6d173635-a4fb-46fe-ba3d-6036ab68e79e';
                localStorage.setItem('user', JSON.stringify(user))
            })
        }
    }

    const getUserInfo = async () => {
        const userInfoRef = doc(db, initial.uid, "userInfo");
        const userInfoSnap = await getDoc(userInfoRef);
        if(userInfoSnap.data() === undefined) {
            const docRef = setDoc(doc(db, initial.uid, 'userInfo'), {
                email: '',
                phone: '',
                facebook: '',
                uid: initial.uid
            });
            localStorage.setItem('userInfo', JSON.stringify({email: '', phone: '', facebook: '', uid: initial.uid}))
            dispatch({type: 'SET_STATUS_LOADING', payload: true})
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfoSnap.data()))
            dispatch({type: 'SET_STATUS_LOADING', payload: true})
        }
    }

    useEffect(() => {
        update()
        getUserInfo()
    }, [])

    return (
        <>
            <HomeHeader/>
            <MainHome/>
        </>
    )
}

export default HomePage;