import React from "react";
import "./App.css";
import EmployeeFormContainer from "./components/EmployeeFormContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Employee Form</h1>
        <EmployeeFormContainer />
      </div>
    </div>
  );
}

export default App;
