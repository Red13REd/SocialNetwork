import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const newClassName = (navData:any)=>navData.isActive? classes.active : classes.item

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" className={newClassName}>Profile</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to="/dialogs" className={newClassName }>Messages</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to="/users" className={newClassName }>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={newClassName }>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={newClassName }>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={newClassName}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;