import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter class, because counter is a default export, we don't need curly braces around it
// import Counter from './components/counter';
// import Counters from './components/counters';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// JSX expression
// const element = <h1>Hello World</h1>;
// console.log(element);

// ReactDOM.render(element, document.getElementById('root'));

// Choose which component to render in the DOM properly
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Counter />, document.getElementById('root'));
// ReactDOM.render(<Counters />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
