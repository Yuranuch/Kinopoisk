import React, {Component} from 'react';
import styles from './SearchNavi.module.css'


class SearchNavi extends Component {
    state = {
        filmName: ""
    }

    searchFilm = (e) => {
        let newFilm = e.currentTarget.value
        this.setState({
            filmName: newFilm
        })
    }

    onSerchFilmClick =() => {
        this.props.serchFilmClick(this.state.filmName)
    }

    render() {
        return (
            <div className={styles.searchContainer}>
                <div className={styles.serching}>
                    <div className={styles.searchInput}>
                        <input
                            type="text"
                            placeholder="enter film"
                            onChange={this.searchFilm}
                        />
                    </div>
                    <div>
                    <button onClick={this.onSerchFilmClick}>Search</button>
                </div>
                </div>

                <div><select name="filmYear" id="">
                    <option value="">2000</option>
                    <option value="">2001</option>
                    <option value="">2002</option>
                </select></div>

                <div>
                    <button>Reset</button>
                </div>
            </div>

        );
    }
}

export default SearchNavi;
