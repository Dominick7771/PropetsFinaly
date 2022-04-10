import './App.css';
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import {Route, Switch, useHistory} from "react-router-dom";
import Modal from "./utils/modal";
import {getAuth, onAuthStateChanged} from "firebase/auth";

function App() {

    const {push} = useHistory()
    const auth = getAuth()

    onAuthStateChanged(auth,(user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            push('/home')
        }
    })

    return (
        <>
            <Switch>
                <Route exact path={'/'} component={StartPage}/>
                <Route exact path={['/home', '/:nav']} component={HomePage}/>
            </Switch>
            <Modal/>
        </>
    );
}

export default App;
