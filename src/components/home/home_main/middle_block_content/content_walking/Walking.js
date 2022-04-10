import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";
import PostCard from "../content_home/PostCard";
import {sortObject} from "../../../../../utils/utils";

const Walking = () => {

    const dispatch = useDispatch()
    const [base, setBase] = useState([])
    const baseCollectionRefTree = query(collection(db, "walking"));

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}})
        const getBase = async () => {
            const data = await getDocs(baseCollectionRefTree)
            setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('Date')));
        }
        getBase()
    }, [])

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Walking. </span>No time tonight? We have a solution!</h1>
            {base.map((user, index) => <PostCard user={user} key={index}/>)}
        </div>
    );
};

export default Walking;