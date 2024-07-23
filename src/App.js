import React from "react";
import "./App.css";
import EmployeeFormContainer from "./components/EmployeeFormContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Form</h1>
        <EmployeeFormContainer />
      </header>
    </div>
  );
}

export default App;
