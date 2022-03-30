import classes from './App.module.css';
import Nav from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/headerContainer";


export type appPostType = {}


const App: React.FC<appPostType> = ({}) => {

    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <HeaderComponent/>
                <Nav/>
                <div className={classes.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
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
