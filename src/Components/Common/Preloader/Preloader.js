import React from "react"
import preloader from "../../../assets/images/739.gif"
import styles from "./Preloader.module.css"

function Preloader() {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader