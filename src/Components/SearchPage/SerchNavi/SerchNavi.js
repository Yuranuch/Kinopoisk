import React, {Component} from 'react';
import styles from './SearchNavi.module.css'
import SearchInputReduxForm from "./SearchInput";



class SearchNavi extends Component {

    onSubmit = (formData) => {
        console.log(formData)
    }

    onResetSettings = () => {
        const clearSettings = []
        this.props.resetSettings(clearSettings)
    }

    render() {
        return (
    <div className={styles.searchContainerWrapper}>
            <div className={styles.searchContainer}>
                <div className={styles.serching}>
                    <SearchInputReduxForm onSubmit={this.onSubmit}
                                          getYear={this.props.getYear}
                                          getFilmName={this.props.getFilmName}
                                          searchFilmClick={this.props.searchFilmClick}/>
                </div>

                <div>
                    <button className={styles.reset} onClick={this.onResetSettings}>Reset</button>
                </div>
            </div>
</div>
        );
    }
}



export default SearchNavi;
