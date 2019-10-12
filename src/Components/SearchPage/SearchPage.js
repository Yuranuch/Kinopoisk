import React, {Component} from 'react';
import styles from './SearchPage.module.css'
import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";
import * as axios from "axios"
import {clearAll, currentPageClick, setFilms, toggleIsFetching} from "../../redux/reducer";
import Preloader from "../Common/Preloader/Preloader";

class SearchPage extends Component {

    searchFilmClick = (filmName, year) => {
        axios.get(`http://www.omdbapi.com/?apikey=711ef504&s=${filmName}&y=${year}&page=1`)
            .then(res => {
                debugger
                this.props.setFilms(res.data.Search)
            })
    }

    resetSettings = (clear) => {
        this.props.clearAll(clear)
    }

    currentPageClick = () => {

    }



    render() {
        const pageCount = this.props.totalFilmsCount/this.props.pageSize
        const pages = []
        for (let i=1; i<=pageCount; i++)
            pages.push(i)

        const {films=[]}=this.props
        const filmsData = films.map(f =>
            <FilmItem imdbID={f.imdbID} Title={f.Title} Year={f.Year} Poster={f.Poster}/>)
        return (
            <div className={styles.searchPage}>
                {this.props.isFetching ? <Preloader/> : null}
                <div className={styles.search}>
                    <SearchNavi searchFilmClick={this.searchFilmClick}

                                resetSettings={this.resetSettings}/>

                    <div className={styles.filmsBlockWrapper}>

                        <div className={styles.filmsBlock}>

                        {filmsData}
                        <h1>{films.length === 0 ? "Enter correct film name" : ""}</h1>
                    </div>
                        <div className={styles.paginationWrap}>
                            <div className={styles.pagination}>
                                {pages.map(p =><span onClick={()=>{this.props.currentPageClick(p)}}
                                                     className={this.props.currentPage===p && styles.selectedPage}>{p}</span>)}
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        films: state.filmsPagesPage.films,
        isFetching: state.filmsPagesPage.isFetching,
        pageSize: state.filmsPagesPage.pageSize,
        totalFilmsCount: state.filmsPagesPage.totalFilmsCount,
        currentPage: state.filmsPagesPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (films) => {
            dispatch(setFilms(films))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        },
        clearAll: (clear) => {
            dispatch(clearAll(clear))
        },
        currentPageClick: (currentPage) => {
            dispatch(currentPageClick(currentPage))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


