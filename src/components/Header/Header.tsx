import classes from './Header.module.css'
import {InitialStateType, userDataType} from "../../redax/authReducer";
import {profileType} from "../../redax/profileReducer";
import {NavLink} from "react-router-dom";
// @ts-ignore
import ava from '../../assets/img/userAvatar.png'

type HeaderType = {
    state: InitialStateType
    setAuthUserData: (data: userDataType) => void
    setUserProfile: (profile: profileType) => void
}

const Header = (props: HeaderType) => {

    return <header className={classes.header}>
        <img className={classes.img}
             src="https://cdn.logo.com/hotlink-ok/logo-social.png"
             alt="This is logo"/>
        <div className={classes.loginBlock}>
            {props.state.isAuth ? <div> {props.state.login}<img
                src={props.state.profile?.photos.small ?? ava}/>
            </div> : <NavLink to={"/login"}>Login</NavLink>}
        </div>

    </header>
}

export default Header