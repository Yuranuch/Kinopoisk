import React from 'react';
import styles from './FilmItem.module.css'


function FilmItem(props) {
    return (
        <div  className={styles.filmsContainer}>

            <div>id- {props.id}</div>
            <div>Name- {props.title}</div>
            <div>Year- {props.year}</div>
            <div className={styles.filmPoster}><img src={props.src}/></div>
        </div>

    );
}

export default FilmItem;
