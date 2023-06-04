import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /*
  state = {
    // The list of counters as well as the methods that modify or mutate the state such as handleIncrement, handleReset, handleDelete event handlers that are usually triggered by user input
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Event Handler
  handleIncrement = (counter) => {
    // console.log(counter);
    // Spread operator (...) to clone array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // to update the state, we need to add counterId parameter here, so we know which counter we need to remove from this list
  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    // Create a new array
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // Overwrite the counters property with this counters constant
    // this.setState({ counters: counters });
    // Also because the key and value are the same, we can simplify this code like this
    this.setState({ counters });
  };
  */

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    console.log("Counters - Rendered");

    return (
      <div>
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        <button
          //   onClick={this.handleReset}
          //   onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          // this.props.counters.map((counter) => (
          // this.state.counters.map((counter) => (
          // This key attribute is used internally by react so we won't be able to access it in our counter component
          <Counter
            key={counter.id}
            // onDelete={this.handleDelete}
            // onDelete={this.props.onDelete}
            onDelete={onDelete}
            // onIncrement={this.handleIncrement}
            // onIncrement={this.props.onIncrement}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          />
          //   <Counter key={counter.id} value={counter.value} id={counter.id}>
          //     <h4>Title</h4>
          //     <h4>Counter #{counter.id}</h4>
          //   </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
