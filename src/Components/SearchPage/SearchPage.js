import React, {Component} from 'react';
import styles from './SearchPage.module.css'

import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";
import * as axios from "axios"
import {setFilm, setFilms} from "../../redux/reducer";


class SearchPage extends Component {
    componentDidMount() {
        debugger
        axios.get("http://www.omdbapi.com/?apikey=711ef504&s=Batman&page=1")
            .then(res => {
                debugger
                this.props.setFilms(res.data.Search)
            })
            .catch(error => {
                debugger
            })
    }

    render() {
        const filmsData = this.props.films.map(f => <FilmItem id={f.id} Title={f.Title} Year={f.Year}
                                                              Poster={f.Poster}/>)
        return (
            <div className={styles.search}>
                <SearchNavi/>
                <div className={styles.filmsBlock}>
                    {filmsData}
                </div>
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


