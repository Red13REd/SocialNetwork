import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.img}
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="This is logo"/>
    </header>
}

export default Header