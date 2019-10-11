import React from 'react';
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={`${styles.navItem} ${styles.active}`}>
                <NavLink to="/search" activeClassName={styles.active}>SearchPage</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to="/detail" activeClassName={styles.active}>DetailsPage</NavLink>
            </div>


        </div>
    );
}

export default Navbar;
