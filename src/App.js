import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

/*
function App() {
  return (
    // This markup is JSX syntaxes which stands for JavaScript XML - it describes what the UI is going to look like
    // Default banner that comes with react project
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Called only once when an instance of a class is created
  constructor() {
    super();
    console.log('App - Constructor');
    // if you need to set the state directly, you can do so in constructor
    //this.state = this.props.something
  }

  // This method is called after our component is rendered into the DOM and it's the perfect place to make Ajax calls to get data from the server
  componentDidMount() {
    // Ajax call
    //this.setState({ movies });
    console.log('App - Mounted');
  }

  // Event Handler
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log('App - Rendered');

    return (<React.Fragment>
      {/* Render bootstrap template navigation bar by adding nav bar component */}
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        {/* Lift the state */}
        <Counters 
          // Pass counter state object to children 
          counters={this.state.counters}
          // Raise 3 events
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </main>
      </React.Fragment>);
  }
}

export default App;
