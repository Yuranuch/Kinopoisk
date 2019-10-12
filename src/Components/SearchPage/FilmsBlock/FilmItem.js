import React from 'react';
import styles from './FilmItem.module.css'
import {NavLink} from "react-router-dom";

function FilmItem(props) {
    return (
        <div className={styles.filmsContainer}>
            <NavLink to={'/detail/' + props.imdbID}>
                <div className={styles.filmsAlign}>
                    {/*<div>id- {props.imdbID}</div>*/}
                    <div className={styles.title}>{props.Title}</div>
                    <div className={styles.filmPoster}>

                        <img src={props.Poster !== "N/A" ? props.Poster
                            : "https://serial-go.com/uploads/no_poster.jpg"}/>
                    </div>
                    <div className={styles.yearTitle}>{props.Year}</div>

                </div>
            </NavLink>
        </div>
    );
}

export default FilmItem;
