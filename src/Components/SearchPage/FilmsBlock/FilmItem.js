import React from 'react';
import styles from './FilmItem.module.css'


function FilmItem(props) {
    return (
        <div  className={styles.filmsContainer}>
            <span>{props.id}</span>
            <span>{props.title}</span>
            <span>{props.year}</span>
            <span><img src={props.src}/></span>
        </div>

    );
}

export default FilmItem;
