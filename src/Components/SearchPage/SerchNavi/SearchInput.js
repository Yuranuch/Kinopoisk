import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {Field, reduxForm} from "redux-form"
import styles from "./SearchNavi.module.css"
import {requiredField} from "../../../utils/validators/validators"
import {Input} from "../../Common/formControls/FormsControls"



class SearchInput extends Component {

    state = {
        optionsData: [
            {optionValue: "Select year", optionData: "Select year"},
            {optionValue: "1998", optionData: 1998},
            {optionValue: "1999", optionData: 1999},
            {optionValue: "2000", optionData: 2000},
            {optionValue: "2001", optionData: 2001},
            {optionValue: "2001", optionData: 2001},
            {optionValue: "2002", optionData: 2002},
            {optionValue: "2003", optionData: 2003},
            {optionValue: "2004", optionData: 2004},
            {optionValue: "2006", optionData: 2005},
            {optionValue: "2007", optionData: 2007},
            {optionValue: "2008", optionData: 2008},
            {optionValue: "2009", optionData: 2009},
            {optionValue: "2010", optionData: 2010},
            {optionValue: "2011", optionData: 2011},
            {optionValue: "2012", optionData: 2012},
            {optionValue: "2013", optionData: 2013},
            {optionValue: "2014", optionData: 2014},
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

        const optionsData = this.state.optionsData.map(o => <option value={o.optionValue}>{o.optionData}</option>)

        return (<form className={styles.alignWrapp} onSubmit={this.props.handleSubmit}>

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
                                   validate={requiredField} />
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