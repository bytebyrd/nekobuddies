import React, { useEffect } from "react";
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { useSelector, useDispatch } from "react-redux";
import { populateRobots } from "../actions/actions";
function App() {
    const robots = useSelector( state => state.robots.robots)
    const dispatch = useDispatch();
    //connect to external system (API) and fetch the users
    useEffect(() => {
        let requestActive = {
            active: false
        }
        dispatch(populateRobots(requestActive))
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => {
        //         if(!active){
        //             console.log("data fetched")
        //             setRobots(data)
        //         }
        //     });
        //called on unmounting => prevent multiple setRobots calls
        return () => {
            requestActive.active = true;
        }
    }, [])
    return !robots.length
        ?
        <h1 className="tc">Loading</h1>
        :
        <div className="App tc">
            <h1 className="f1 ma0 pa2">Nekobuddies</h1>

            <SearchBox />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={robots} />
                </ErrorBoundary>
            </Scroll>
        </div>
}
export default App;

