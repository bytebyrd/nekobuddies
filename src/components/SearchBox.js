import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../actions/actions';
const SearchBox = (props) => {
    const dispatch = useDispatch()
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue br3 br--right mb3 outline-0'
                type="search"
                placeholder='search robot'
                onChange={(e) => {
                     dispatch(setSearchTerm(e.target.value))
                    // props.onSearchTermChange(e.target.value)
                }}>
            </input>
        </div>

    )
};


export default SearchBox;