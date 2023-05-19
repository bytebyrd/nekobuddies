import { SET_SEARCH_TERM } from "./constants";

export const setSearchTerm = (input) => ({
    type: SET_SEARCH_TERM,
    payload: input
});