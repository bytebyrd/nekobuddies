import { SET_SEARCH_TERM } from "./constants";

export const setSearchTerm = (input) => ({
    type: SET_SEARCH_TERM,
    payload: input
});

const setRobots = (robots) => ({
    type: "SET_ROBOTS",
    payload: robots
})
export const populateRobots = (requestActive) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => {
                if (!requestActive.active) {
                    dispatch(setRobots(data))
                }
            })
    }
}