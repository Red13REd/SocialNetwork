import classes from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StoreType} from "./redax/state";
import React from "react";
import { DialogsContainer} from "./components/Dialogs/DialogsContainer";


export type appPostType = {
    store: StoreType
}


const App: React.FC<appPostType> = ({store}) => {

    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Header/>
                <Nav/>
                <div className={classes.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer store={store}/>}/>
                        <Route path="/profile" element={<Profile store={store}/>}/>
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
