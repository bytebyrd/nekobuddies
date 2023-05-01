import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue br3 br--right mb3 outline-0'
                type="search"
                placeholder='search robot'
                onChange={(e) => {
                    props.onSearchTermChange(e.target.value)
                }}>
            </input>
        </div>

    )
};


export default SearchBox;