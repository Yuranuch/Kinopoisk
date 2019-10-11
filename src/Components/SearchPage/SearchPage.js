import React, {Component} from 'react';
import styles from './SearchPage.module.css'

import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";
import * as axios from "axios"
import {setFilms} from "../../redux/reducer";


class SearchPage extends Component {
    // componentDidMount() {
    //
    //     axios.get("http://www.omdbapi.com/?apikey=711ef504&s=Batman&page=1")
    //         .then(res => {
    //             this.props.setFilms(res.data.Search)
    //         })
    //
    // }


    serchFilmClick = (filmName) => {
        axios.get(`http://www.omdbapi.com/?apikey=711ef504&s=${filmName}&page=1`)
            .then(res => {
                this.props.setFilms(res.data.Search)
            })
    }

    render() {
        const filmsData = this.props.films.map(f => <FilmItem imdbID={f.imdbID} Title={f.Title} Year={f.Year}
                                                              Poster={f.Poster}/>)
        return (
            <div>
                <div className={styles.search}>
                    <SearchNavi serchFilmClick={this.serchFilmClick}/>
                    <div className={styles.filmsBlock}>
                        {filmsData}
                    </div>
                </div>
                <h1>{this.props.films.length === 0 ?  "enter film name" : ""}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (films) => {
            dispatch(setFilms(films))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


