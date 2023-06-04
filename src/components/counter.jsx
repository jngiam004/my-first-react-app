// With jsx extension instead of just j/s, you would get better code completion
// You can immediately see a compilation error here when you add button tag along with existing h1 tag, you have a red underline, JSX expressions must have one parent element because when compile can't interpret 2 elements tag side by side, return multiple root elements from the render method.
// So one solution is to wrap the 2 elements with a div

// Multi-cursor editing allows you to change all instances in one go, select a piece of code and press ctrl + D, put cursor at text, press f2 and rename

// React.Fragment targets the children tag, hence removing the parent div tag.

// pretty format shortcut: Shift + Alt + F

// Using Simple React Snippets extensions plugin feature for optimal productivity, shortcuts to quicky generate code - with acronym abbreviations
// imrc - import React library
// cc - generate child class inherit parent class
// sfc - create stateless functional component
import React, { Component } from "react";

// Child class Counter inherits from parent class Component
class Counter extends Component {
  // Add a property call a local state and set it to an object
  // This piece of code is executed only once when an instance of a counter component is created
  /*
  state = {
    // count: 0,
    value: this.props.counter.value,
    // This will generate a random 200 by 200 pixel image
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  */

  // Defining css styling properties
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // Conditional rendering
  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  */

  // Add a constructor
  /*
  constructor() {
    super();
    // console.log("Constructor", this);
    // Set the value of this, this bind method will return a new instance of the handleIncrement function, so will always referencing the current object
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  // Event Handler
  /*
  handleIncrement() {
    // For this object keyword, there is no access to it, it is undefined as it uses strict mode
    console.log("Increment Clicked", this);
  }
  */

  // Arrow functions don't remind the this keyword, they inherited
  /*
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.value + 1 });
  };
  */

  /*
  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    // This method tells react that we're updating the state of this component then it will figure out what part of the state is changed and based on that it will bring the DOM in sync with the virtual DOM
    // You have to explicitly tell react what is changed so that they are aware of the state changes
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  */

  // This method is called after a component is updated which means we ahve new state or new props so we can compare this new state/props with the old state/props
  // and if there is a change, we can make an AJAX request to get new data from the server
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  // This method is called just before a component is removed from the DOM
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    // Note that we are modifying a variable so we cannot use a constant, must use let
    // use extract to target a portion of your code to refactor code to a method
    // let classes = this.getBadgeClasses();

    // console.log("props", this.props);
    console.log("Counter - Rendered");

    // This is a JSX expression, not a string which eventually gets compiled to calls to react that create element, React.createElement('h1',...), so will return a new react element
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* This reference the current object */}
        {/* <span>{2 + 2}</span> */}
        {/* <span>{this.state.count}</span> */}
        {/* Inline style */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        {/* <span className={classes}>{this.formatCount()}</span> */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}

        {this.props.children}
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          //   onClick={this.handleIncrement}
          // onClick={this.doHandleIncrement}
          //   onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          //   onClick={() => this.props.onDelete(this.props.id)}
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
      //   <React.Fragment>
      //     <h1>Hello World</h1>
      //     <button>Increment</button>
      //   </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // When you have a code repetition of this.state.value like this, it is a perfect opportunity to use object destructuring
  formatCount() {
    // const { value: value } = this.state;
    // const { value } = this.state;
    const { value } = this.props.counter;
    // const x = <h1>Zero</h1>;
    // return value === 0 ? x : value;
    return value === 0 ? "Zero" : value;
    // return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
