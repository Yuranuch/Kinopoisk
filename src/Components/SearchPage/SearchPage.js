import React, {Component} from 'react';
import styles from './SearchPage.module.css'
import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";
import * as axios from "axios"
import {
    clearAll,
    currentPageClick,
    getFilmName,
    getYear,
    setFilms, setTotalPageCount,
    toggleIsFetching
} from "../../redux/reducer";
import Preloader from "../Common/Preloader/Preloader";

class SearchPage extends Component {



    searchFilmClick = () => {

        axios.get(`http://www.omdbapi.com/?apikey=711ef504&s=${this.props.filmName}&y=${this.props.year}&page=${this.props.currentPage}`)
            .then(res => {
                this.props.setFilms(res.data.Search)
                this.props.setTotalPageCount(res.data.totalResults)
            })
    }

    resetSettings = (clear) => {
        this.props.clearAll(clear)
    }

    getYear = (newYear) => {
        this.props.getYear(newYear)
    }
    getFilmName = (newFilmName) => {
        this.props.getFilmName(newFilmName)
    }

    currentPageClick = (pageNumber) => {

        this.props.currentPageClick(pageNumber)

        axios.get(`http://www.omdbapi.com/?apikey=711ef504&s=${this.props.filmName}&y=${this.props.year}&page=${pageNumber}`)
            .then(res => {

                this.props.setFilms(res.data.Search)

            })
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
                                resetSettings={this.resetSettings}
                                getYear={this.getYear}
                                getFilmName={this.getFilmName}
                    />

                    <div className={styles.filmsBlockWrapper}>
                        <div className={styles.paginationWrap}>
                            <div className={styles.pagination}>
                                {pages.map(p =><span onClick={()=>{this.currentPageClick(p)}}
                                                     className={this.props.currentPage===p &&
                                                     styles.selectedPage}>{p}</span>)}
                            </div>
                            <h1>{films.length === 0 ? "Please enter film name" : ""}</h1>
                        </div>
                        <div className={styles.filmsBlock}>

                        {filmsData}

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
        currentPage: state.filmsPagesPage.currentPage,
        year: state.filmsPagesPage.year,
        filmName: state.filmsPagesPage.filmName
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
        },
        getYear: (year) => {
            dispatch(getYear(year))
        },
        getFilmName: (filmName) => {
            dispatch (getFilmName(filmName))
        },
        setTotalPageCount: (total) => {
            dispatch (setTotalPageCount(total))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


