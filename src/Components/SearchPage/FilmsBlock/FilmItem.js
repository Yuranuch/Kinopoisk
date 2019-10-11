import React from 'react';
import styles from './FilmItem.module.css'


function FilmItem(props) {
    return (
        <div  className={styles.filmsContainer}>

            <div>id- {props.id}</div>
            <div>Name- {props.Title}</div>
            <div>Year- {props.Year}</div>
            <div className={styles.filmPoster}><img src={props.Poster}/></div>
        </div>

    );
}

export default FilmItem;
