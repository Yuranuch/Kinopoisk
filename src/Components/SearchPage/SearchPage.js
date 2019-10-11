import React, {Component} from 'react';
import styles from './SearchPage.module.css'
import preloader from '../../assets/images/preloader.gif'
import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";
import * as axios from "axios"
import {setFilms, toggleIsFetching} from "../../redux/reducer";


class SearchPage extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get("http://www.omdbapi.com/?apikey=711ef504&s=Batman&page=1")
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setFilms(res.data.Search)
            })

    }


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
                {this.props.isFetching? <img src={preloader}/>:null}
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
        films: state.films,
        isFetching: state.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (films) => {
            dispatch(setFilms(films))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


