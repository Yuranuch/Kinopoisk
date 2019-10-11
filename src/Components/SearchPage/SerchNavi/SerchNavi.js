import React from 'react';
import styles from './SearchNavi.module.css'


function SearchNavi() {
    return (
            <div className={styles.searchContainer}>
                <div><input type="text" placeholder="enter film"/></div>
                <div><select name="filmYear" id="">
                    <option value="">2000</option>
                    <option value="">2001</option>
                    <option value="">2002</option>
                </select></div>
                <div><button>Search</button></div>
                <div><button>Reset</button></div>
            </div>

    );
}

export default SearchNavi;
