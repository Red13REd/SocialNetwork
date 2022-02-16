import classes from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionsType, StateType} from "./redax/state";
import React from "react";


export type appPostType = {
    State: StateType
    dispatch: (action: ActionsType) => void

}


const App: React.FC<appPostType> = ({State, dispatch}) => {

    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <Nav/>
                <div className={classes.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs State={State.messagesPage}
                                                                   dispatch={dispatch}/>}/>
                        <Route path="/profile" element={<Profile
                            State={State.profile}
                            dispatch={dispatch}
                        />}/>
                        {/*<Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
