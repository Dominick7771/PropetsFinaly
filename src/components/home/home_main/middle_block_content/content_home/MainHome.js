import React from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';
import {Route, Switch} from "react-router-dom";
import NavHome from "../../left_block_nav/NavHome";
import PromoHome from "../../right_block_promo/PromoHome";
import NewsWallHome from "./NewsWallHome";
import Lost from "../content_lost/Lost"
import Found from "../content_found/Found"
import Hotels from "../content_hotels/Hotels"
import Walking from "../content_walking/Walking"
import Favorites from "../content_favorites/Favorites";
import Fostering from "../content_fostering/Fostering";
import VetHelp from "../content_vethelp/VetHelp";
import FoundPet from "../../../../Ankets/FoundPet";
import LostPet from "../../../../Ankets/LostPet";
import CreatePost from "../../../../Ankets/CreatePost";
import PersonalArea from "../content_personal_area/PersonalArea";

const MainHome = () => {
    return (
        <main className={`container-fluid`}>
            <div className={`row justify-content-center align-items-center`}>
                <div className={`${style.heightMain} d-flex`}>
                    <NavHome/>
                    <Switch>
                        <Route exact path={'/home'} component={NewsWallHome}/>
                        <Route exact path={'/lost'} component={Lost}/>
                        <Route exact path={'/found'} component={Found}/>
                        <Route exact path={'/hotels'} component={Hotels}/>
                        <Route exact path={`/walking`} component={Walking}/>
                        <Route exact path={'/fostering'} component={Fostering}/>
                        <Route exact path={'/vethelp'} component={VetHelp}/>
                        <Route exact path={'/favorites'} component={Favorites}/>
                        <Route exact path={'/foundpet'} component={FoundPet}/>
                        <Route exact path={'/lostpet'} component={LostPet}/>
                        <Route exact path={'/newpost'} component={CreatePost}/>
                        <Route exact path={'/personalarea'} component={PersonalArea}/>
                    </Switch>
                    <PromoHome/>
                </div>
            </div>
        </main>
    );
};

export default MainHome;