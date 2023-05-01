import React from "react";
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchTerm: ""
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState(() => ({ robots: data })))
    }

    setSearchTerm(searchTerm) {
        console.log(searchTerm)
        this.setState(() => ({ searchTerm }))
    }
    render() {
        const { robots, searchTerm } = this.state;
        return !robots.length
            ?
            <h1 className="tc">Loading</h1>
            :
            <div className="App tc">
                <h1 className="f1 ma0 pa2">Nekobuddies</h1>
                <SearchBox onSearchTermChange={this.setSearchTerm} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={robots} filter={searchTerm} />
                    </ErrorBoundary>
                </Scroll>
            </div>
    }
}
export default App;

