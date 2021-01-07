import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log("App constructor");
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (id) => {
    // console.log("button clicked", id);
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    // console.log("counter");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(counters[index]);
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    // console.log("counter");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    // console.log(index);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalcounters={this.state.counters.length}></Navbar>
        <main className="container"></main>
        <Counters
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          counters={this.state.counters}
        ></Counters>
      </React.Fragment>
    );
  }
}

export default App;
