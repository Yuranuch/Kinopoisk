import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./FilmItem.module.css"

function FilmItem(props) {
    return (
        <div className={styles.filmsContainer}>
            <NavLink to={'/detail/' + props.imdbID}>
                <div className={styles.filmsAlign}>
                    <div className={styles.filmPoster}>
                        <img src={props.Poster !== "N/A" ? props.Poster
                            : "https://serial-go.com/uploads/no_poster.jpg"}/>
                    </div>
                    <div className={styles.frontInfo}>
                        <div className={styles.title}>{props.Title}</div>
                    </div>
                    <div className={styles.frontInfoYear}>
                        <div className={styles.yearTitle}>{props.Year}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default FilmItem
