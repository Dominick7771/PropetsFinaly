import React, {useEffect} from 'react';
import Header from "../components/start_components/header/Header";
import Main from "../components/start_components/main/Main";
import Footer from "../components/start_components/footer/Footer";

const StartPage = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default StartPage;