import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {Field, reduxForm} from "redux-form"
import styles from "./SearchNavi.module.css"
import {requiredField} from "../../../utils/validators/validators"
import {Input} from "../../Common/formControls/FormsControls"

class SearchInput extends Component {

    state = {
        optionsData: [
            {id: 0, optionValue: "Select year", optionData: "Select year"},
            {id: 1, optionValue: "1998", optionData: 1998},
            {id: 2, optionValue: "1999", optionData: 1999},
            {id: 3, optionValue: "2000", optionData: 2000},
            {id: 4, optionValue: "2001", optionData: 2001},
            {id: 5, optionValue: "2002", optionData: 2002},
            {id: 6, optionValue: "2003", optionData: 2003},
            {id: 7, optionValue: "2004", optionData: 2004},
            {id: 8, optionValue: "2006", optionData: 2005},
            {id: 9, optionValue: "2007", optionData: 2007},
            {id: 10, optionValue: "2008", optionData: 2008},
            {id: 11, optionValue: "2009", optionData: 2009},
            {id: 12, optionValue: "2010", optionData: 2010},
            {id: 13, optionValue: "2011", optionData: 2011},
            {id: 14, optionValue: "2012", optionData: 2012},
            {id: 15, optionValue: "2013", optionData: 2013},
            {id: 16, optionValue: "2014", optionData: 2014},
        ],
    }

    searchFilm = e => {
        const newFilmName = e.currentTarget.value
        this.props.getFilmName(newFilmName)

    }

    searchYear = e => {
        const newYear = e.currentTarget.value
        this.props.getYear(newYear)
    }

    onSearchFilmClick = () => {
        this.props.searchFilmClick()
    }

    render() {

        const optionsData = this.state.optionsData.map(o => <option key={o.id} value={o.optionValue}>{o.optionData}</option>)

        return (<form className={styles.alignWrap} onSubmit={this.props.handleSubmit}>

                <div className={styles.searchWrap}>
                    <div className={styles.logoInfo}>
                        <NavLink to="/search">
                            <span className={styles.tagline}>Choose a movie</span>
                            <span className={styles.taglineBack}>for the evening</span>
                        </NavLink>
                    </div>
                    <div className={styles.searchInput}>
                        <div className={styles.inputWrap}>
                            <Field className={styles.inputStyle}
                                   name={"search"}
                                   type="text"
                                   component={Input}
                                   placeholder="enter film"
                                   onChange={this.searchFilm}
                                   validate={requiredField}/>
                            {this.props.error && <div className={styles.summaryError}>{this.props.error}</div>}
                        </div>
                    </div>
                    <div>
                        <button className={styles.buttonWrap} onClick={this.onSearchFilmClick}>Search</button>
                    </div>
                    <div>
                        <Field
                            onChange={this.searchYear}
                            className={styles.select}
                            name={"filmYear"}
                            component={"select"}
                            id="">
                            {optionsData}
                        </Field>
                    </div>
                </div>
                <div>
                    <button className={styles.reset} onClick={this.props.reset}>Reset</button>
                </div>
            </form>
        )
    }
}

const SearchInputReduxForm = reduxForm({form: "login"})(SearchInput)

export default SearchInputReduxForm