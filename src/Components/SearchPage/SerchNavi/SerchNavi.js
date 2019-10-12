import React, {Component} from 'react';
import styles from './SearchNavi.module.css'
import SearchInputReduxForm from "./SearchInput";



class SearchNavi extends Component {
    constructor (props) {
        debugger
        super(props)
    }


    onSubmit = (formData) => {
        console.log(formData)
    }

    onResetSettings = () => {
        const clearSettings = []
        this.props.resetSettings(clearSettings)
    }

    render() {
        return (
            <div className={styles.searchContainer}>
                <div className={styles.serching}>
                    <SearchInputReduxForm onSubmit={this.onSubmit} serchFilmClick={this.props.serchFilmClick}/>

                </div>

                <div>
                    <select name="filmYear" id="">
                        <option value="">2000</option>
                        <option value="">2001</option>
                        <option value="">2002</option>
                    </select>
                </div>

                <div>
                    <button onClick={this.onResetSettings}>Reset</button>
                </div>
            </div>

        );
    }
}



export default SearchNavi;
