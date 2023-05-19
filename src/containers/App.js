import React, { useState, useEffect } from "react";
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //connect to external system (API) and fetch the users
    useEffect(() => {
        let active = false;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                if(!active){
                    console.log("data fetched")
                    setRobots(data)
                }
            });
        //called on unmounting => prevent multiple setRobots calls
        return () => {
            active = true;
        }
    }, [])
    return !robots.length
        ?
        <h1 className="tc">Loading</h1>
        :
        <div className="App tc">
            <h1 className="f1 ma0 pa2">Nekobuddies</h1>
            <SearchBox onSearchTermChange={setSearchTerm} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={robots} filter={searchTerm} />
                </ErrorBoundary>
            </Scroll>
        </div>
}
export default App;

