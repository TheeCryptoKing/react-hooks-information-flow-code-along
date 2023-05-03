import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// When the div in the Child component is clicked, it will use the onChangeColor variable to determine what function to run
// onChangeColor is a prop that is passed down from the Parent component, which references the handleChangeColor function
// The handleChangeColor function is the function that will actually run when the div is clicked, and will update state in the Parent component

// Sibling components cannot pass data to each other directly
// Data can only flow up and down between parent and child

