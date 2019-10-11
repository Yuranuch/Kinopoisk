import React, {Component} from 'react';
import styles from './DetailsPage.module.css'
import * as axios from "axios";
import {connect} from "react-redux";
import {getFilm, setFilms} from "../../redux/reducer";
import {withRouter} from "react-router-dom";

class DetailsPage extends Component {

    constructor(props) {
        debugger
        super(props)
    }

    componentDidMount() {

        axios.get("http://www.omdbapi.com/?apikey=bcb1b6a3&i=tt0372784")
            .then(res => {
                debugger
                this.props.getFilm(res.data)
            })
    }

    render() {
        return (
            <div className={styles.detail}>
                <h1><b>title</b> {this.props.profile.Title}</h1>
                <p><b>year</b> {this.props.profile.Year}</p>
                <p><b>poster</b> <img src={this.props.profile.Poster} alt=""/></p>
                {/*<div>{this.props.profile.Poster}</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getFilm: (film) => {
            dispatch(getFilm(film))
        }
    }
}

let WithUrlDataContainerComponent = withRouter (DetailsPage)

export default connect ( mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent);
