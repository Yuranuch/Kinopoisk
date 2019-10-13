import React, {Component} from "react"
import styles from "./DetailsPage.module.css"
import {connect} from "react-redux"
import {setFilmId, toggleIsFetching} from "../../redux/reducer"
import {NavLink, withRouter} from "react-router-dom"
import Preloader from "../Common/Preloader/Preloader"

class DetailsPage extends Component {

    componentDidMount() {
        let filmId = this.props.match.params.filmId
        this.props.setFilmId(filmId)
    }

    render() {
        return (
            <div className={styles.detail}>
                {this.props.isFetching ? <Preloader/> : null}
                <div>
                    <h1>{this.props.profile.Title}</h1>
                    <div><b>Year</b> - {this.props.profile.Year}</div>
                    <div><b>Runtime</b> - {this.props.profile.Runtime}</div>
                    <div><b>BoxOffice</b> - {this.props.profile.BoxOffice}</div>
                    <div><b>Actors</b> - {this.props.profile.Actors}</div>
                </div>
                <NavLink className={styles.back} to="/search">Back</NavLink>
                <div>
                    <img src={this.props.profile.Poster !== "N/A" ? this.props.profile.Poster :
                        "https://serial-go.com/uploads/no_poster.jpg"} alt=""/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.filmsPagesPage.profile,
        films: state.filmsPagesPage.films,
        isFetching: state.filmsPagesPage.isFetching,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        },
        setFilmId: (filmId) => {
            dispatch(setFilmId(filmId))
        }
    }
}

const WithUrlDataContainerComponent = withRouter(DetailsPage)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)
