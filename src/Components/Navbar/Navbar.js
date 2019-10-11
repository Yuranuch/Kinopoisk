import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import logo from "./../../assets/images/batman_PNG4.webp"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/search"><img src={logo}/></NavLink>
            </div>
        </div>
    );
}

export default Navbar;
