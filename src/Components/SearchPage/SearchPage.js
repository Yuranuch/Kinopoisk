import React, {Component} from 'react';
import styles from './SearchPage.module.css'

import FilmItem from "./FilmsBlock/FilmItem";
import SearchNavi from "./SerchNavi/SerchNavi";
import {connect} from "react-redux";


class SearchPage extends Component {
    render() {
        const filmsData = this.props.films.map(f =><FilmItem id={f.id} title={f.title} year={f.year} src={f.src} />)
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

const mapStateToProps = (state)=> {
    debugger
    return {
        films: state.films
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


