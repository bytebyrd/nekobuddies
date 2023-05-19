import { SET_SEARCH_TERM } from "../actions/constants"
const initialState = {
    searchTerm: "",
}

function searchFieldReducer(state = initialState, action ={}){
    switch(action.type){
        case SET_SEARCH_TERM:
            return { searchTerm: action.payload }
        default: 
         return state;
    }
}

export { searchFieldReducer }