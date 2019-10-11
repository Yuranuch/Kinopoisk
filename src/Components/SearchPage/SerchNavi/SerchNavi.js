import React from 'react';
import styles from './SearchNavi.module.css'


function SearchNavi() {
    return (
            <div className={styles.searchContainer}>
                <input type="text" placeholder="enter film"/>
                <select name="filmYear" id="">
                    <option value="">2000</option>
                    <option value="">2001</option>
                    <option value="">2002</option>
                </select>
                <button>Search</button>
                <button>Reset</button>
            </div>

    );
}

export default SearchNavi;
