import classes from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType} from "./redax/state";
import React from "react";


export type appPostType = {
    State: StateType
    addPoststate: (text: string) => void
}


const App: React.FC<appPostType> = ({State, addPoststate}) => {

    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <Nav/>
                <div className={classes.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs State={State.messagesPage}/>}/>
                        <Route path="/profile" element={<Profile State={State.profile} addPoststate={addPoststate} />}/>
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
