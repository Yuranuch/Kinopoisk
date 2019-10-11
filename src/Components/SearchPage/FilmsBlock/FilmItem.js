import React from 'react';
import styles from './FilmItem.module.css'
import {NavLink} from "react-router-dom";

function FilmItem(props) {
    return (
        <div className={styles.filmsContainer}>
            <div>id- {props.imdbID}</div>
            <div>Name- {props.Title}</div>
            <div>Year- {props.Year}</div>
            <div className={styles.filmPoster}><NavLink to={'/detail/' + props.imdbID}><img
                src={props.Poster}/></NavLink></div>
        </div>

    );
}

export default FilmItem;
