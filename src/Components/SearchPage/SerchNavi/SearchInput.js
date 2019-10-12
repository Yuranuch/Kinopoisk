import React, {Component} from 'react';
import styles from "./SearchNavi.module.css";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormControls/FormsControls";

class SearchInput extends Component {


    searchFilm = e => {
        const newFilmName = e.currentTarget.value
        this.props.getFilmName(newFilmName )
    }

    searchYear = e => {
        const newYear = e.currentTarget.value
       this.props.getYear(newYear)
    }

    onSearchFilmClick = () => {
        this.props.searchFilmClick()

    }

    render() {
        return (<form onSubmit={this.props.handleSubmit}>
                <div className={styles.searchWrap}>
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
                    <div>
                        <select onChange={this.searchYear} className={styles.select} name="filmYear" id="">
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="2014">2014</option>
                        </select>

                    </div>


                </div>
            </form>
        )
    }
}

const SearchInputReduxForm =reduxForm({form:'login'})(SearchInput)

export default SearchInputReduxForm