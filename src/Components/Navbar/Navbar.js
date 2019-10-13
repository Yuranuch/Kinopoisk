import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import logo from "./../../assets/images/batman_PNG4.webp"

function Navbar() {
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbar}>
                <div className={styles.logoInfo}>
                        <NavLink to="/search">
                            <span className={styles.tagline}>Choose a movie</span>
                            <span className={styles.taglineBack}>for the evening</span>
                        </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
