import React from 'react';
import styles from './FilmItem.module.css'
import {NavLink} from "react-router-dom";

function FilmItem(props) {
    return (
        <div className={styles.filmsContainer}>
            {/*<div>id- {props.imdbID}</div>*/}
            <div className={styles.title}>{props.Title}</div>
            <div className={styles.filmPoster}>
                <NavLink to={'/detail/' + props.imdbID}>
                    <img src={props.Poster !== "N/A" ? props.Poster
                        : "https://serial-go.com/uploads/no_poster.jpg"}/>
                </NavLink>
            </div>



            <div className={styles.yearTitle}>{props.Year}</div>
        </div>

    );
}

export default FilmItem;
