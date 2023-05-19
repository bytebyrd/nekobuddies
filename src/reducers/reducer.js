import { SET_SEARCH_TERM } from "../actions/constants"
const initialState = {
    searchTerm: "",
}

const initialRobotState = {
    robots: []
}

function searchFieldReducer(state = initialState, action ={}){
    switch(action.type){
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload }
        default: 
         return state;
    }
}

function robotReducer(state = initialRobotState, action ={}){
    switch (action.type){
        case "SET_ROBOTS":
            return { ...state, robots: action.payload }
        default:
            return state;
    }
}

export { searchFieldReducer, robotReducer }