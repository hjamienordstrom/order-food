import {Fragment} from "react";
import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Yummy</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
};

export default Header
