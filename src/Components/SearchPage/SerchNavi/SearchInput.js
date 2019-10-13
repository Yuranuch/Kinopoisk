import React, {Component} from 'react';
import styles from "./SearchNavi.module.css";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormControls/FormsControls";
import {NavLink} from "react-router-dom";

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
                    <div className={styles.logoInfo}>
                        <NavLink to="/search">
                            <span className={styles.tagline}>Choose a movie</span>
                            <span className={styles.taglineBack}>for the evening</span>
                        </NavLink>
                    </div>
                    <div className={styles.searchInput}>
                        <div className={styles.inputWrapp}>
                            <Field className={styles.inputStyle}
                                   name={"search"}
                                   type="text"
                                   component={Input}
                                   placeholder="enter film"
                                   onChange={this.searchFilm}
                                   validate={requiredField}
                            />
                        </div>
                    </div>
                    <div>
                        <button className={styles.buttonWrap} onClick={this.onSearchFilmClick}>Search</button>
                    </div>
                    <div>
                        <select onChange={this.searchYear} className={styles.select} name="filmYear" id="">

                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
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