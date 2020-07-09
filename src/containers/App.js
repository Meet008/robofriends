import React, { Component } from "react";
import { connect } from "react-redux";
import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   robots: [],
  //   //   //searchfield: "",
  //    };

  componentDidMount() {
    //   console.log(this.props.store);
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((users) => {
    //       this.setState({ robots: users });
    //     });
    // }

    this.props.onRequestRobots();

    // onSearchChange = (event) => {
    //   this.setState({ searchfield: event.target.value });
  }
  render() {
    //const { robots, searchfield } = this.state;
    //const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending === true) {
      return <h1 className="tc">Loading..</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
