import React, {Component} from 'react';
import styles from './SearchPage.module.css'
import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";
import * as axios from "axios"
import {
    clearAll,
    currentPageClick,
    getFilmName, getFilmsThunkCreator,
    getYear,
    setFilms, setTotalPageCount,
    toggleIsFetching
} from "../../redux/reducer";
import Preloader from "../Common/Preloader/Preloader";
import {filmsAPI} from "../../api/api";

class SearchPage extends Component {

    searchFilmClick = () => {
        this.props.getFilmsThunkCreator(this.props.filmName, this.props.year, this.props.currentPage)
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
        this.props.toggleIsFetching(true)
        this.props.currentPageClick(pageNumber)
        filmsAPI.getFilms(this.props.filmName, this.props.year, pageNumber)
            .then(res => {
                this.props.toggleIsFetching(false)
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
                            {films.length === 0 ? <h1 className={styles.startMessage}>Please enter film name</h1> : ""}
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
        },
        getFilmsThunkCreator: (film, year,currentPage) => {
            dispatch (getFilmsThunkCreator(film, year,currentPage))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


