import React, {Component} from 'react';
import styles from "./SearchNavi.module.css";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormControls/FormsControls";

class SearchInput extends Component {
    state = {
        filmName: ""
    }

    searchFilm = e => {
        const newFilm = e.currentTarget.value
        this.setState({
            filmName: newFilm
        })
    }

    onSearchFilmClick = () => {
        this.props.serchFilmClick(this.state.filmName)
    }

    render() {
        return (<form onSubmit={this.props.handleSubmit}>
                <div>
                    <div className={styles.searchInput}>
                        <div className={styles.inputWrapp}>
                        <Field className={styles.inputStyle}
                            name={"search"}
                            type="text"
                            component={Input}
                            placeholder="enter film"
                            onChange={this.searchFilm}
                            validate = {requiredField}
                        />
                    </div>

                        <button className={styles.buttonWrap} onClick={this.onSearchFilmClick}>SEARCH</button>

                    </div>


                </div>
            </form>
        )
    }
}

const SearchInputReduxForm =reduxForm({form:'login'})(SearchInput)

export default SearchInputReduxForm