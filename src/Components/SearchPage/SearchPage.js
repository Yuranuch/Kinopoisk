import React, {Component} from "react"
import {connect} from "react-redux"
import styles from "./SearchPage.module.css"
import FilmItem from "./FilmsBlock/FilmItem"
import SearchNavi from "./SerchNavi/SerchNavi"

import {
    currentPageClick,
    getFilmName, getFilmsThunkCreator,
    getYear,
    setPageThunkCreator,
    toggleIsFetching
} from "../../redux/reducer"
import Preloader from "../Common/Preloader/Preloader"

class SearchPage extends Component {

    searchFilmClick = () => {
        this.props.getFilmsData(this.props.filmName, this.props.year, this.props.currentPage)
    }

    getYear = (newYear) => {
        this.props.getYear(newYear)
    }
    getFilmName = (newFilmName) => {
        this.props.getFilmName(newFilmName)
    }

    currentPageClick = (pageNumber) => {
        this.props.setPage(this.props.filmName, this.props.year, pageNumber)
    }

    render() {
        const pageCount = this.props.totalFilmsCount / this.props.pageSize
        const pages = []

        for (let i = 1; i <= pageCount; i++)
            pages.push(i)

        const {films = []} = this.props
        const filmsData = films.map(f =>
            <FilmItem key={f.imdbID} imdbID={f.imdbID} Title={f.Title} Year={f.Year} Poster={f.Poster}/>)

        return (
            <div className={styles.searchPage}>
                {this.props.isFetching ? <Preloader/> : null}
                <div className={styles.search}>
                    <SearchNavi
                        searchFilmClick={this.searchFilmClick}
                        resetSettings={this.resetSettings}
                        getYear={this.getYear}
                        getFilmName={this.getFilmName}/>
                    <div className={styles.filmsBlockWrapper}>
                        {films.length === 0 ? <h1 className={styles.startMessage}>Please enter film name</h1> : ""}
                        <div className={styles.filmsBlock}>
                            {filmsData}
                        </div>
                        {films.length !== 0 ?<div className={styles.paginationWrap}>
                            <div className={styles.pagination}>
                                {
                                    pages.map(p => {
                                        return <span key={p} onClick={() => {this.currentPageClick(p)}}
                                                     className={this.props.currentPage === p ? styles.selectedPage: ""}>{p}</span>
                                    })
                                }
                            </div>
                        </div>: ""}
                    </div>
                </div>
            </div>
        )
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
        filmName: state.filmsPagesPage.filmName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        },
        currentPageClick: (currentPage) => {
            dispatch(currentPageClick(currentPage))
        },
        getYear: (year) => {
            dispatch(getYear(year))
        },
        getFilmName: (filmName) => {
            dispatch(getFilmName(filmName))
        },
        getFilmsData: (film, year, currentPage) => {
            dispatch(getFilmsThunkCreator(film, year, currentPage))
        },
        setPage: (film, year, pageNumber) => {
            dispatch(setPageThunkCreator(film, year, pageNumber))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)


