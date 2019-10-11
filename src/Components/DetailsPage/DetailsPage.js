import React, {Component} from 'react';
import styles from './DetailsPage.module.css'
import * as axios from "axios";
import {connect} from "react-redux";
import {getFilm, setFilms, toggleIsFetching} from "../../redux/reducer";
import {withRouter} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

class DetailsPage extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        let filmId = this.props.match.params.filmId;
        if (!filmId) {
            filmId = "tt0372784"
        }
        axios.get(`http://www.omdbapi.com/?apikey=bcb1b6a3&i=${filmId}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.getFilm(res.data)
            })
    }

    render() {
        return (
            <div className={styles.detail}>
                {this.props.isFetching ? <Preloader/> : null}
                <h1><b>title</b> {this.props.profile.Title}</h1>
                <p><b>year</b> {this.props.profile.Year}</p>
                <p><b>poster</b> <img src={this.props.profile.Poster} alt=""/></p>
                {/*<div>{this.props.profile.Poster}</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        films: state.films,
        isFetching: state.isFetching,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getFilm: (film) => {
            dispatch(getFilm(film))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

let WithUrlDataContainerComponent = withRouter(DetailsPage)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
