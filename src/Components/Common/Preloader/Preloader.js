import preloader from "../../../assets/images/preloader.gif";
import React from 'react';
import styles from "./Preloader.module.css"

function Preloader() {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt="" />
        </div>
    );
}

export default Preloader;