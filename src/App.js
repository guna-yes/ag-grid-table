import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function App() {
  return (
    <div className="App" style={{ padding: "1em" }}>
      <h1>Top Rankers Assignments</h1>
      <Table />
    </div>
  );
}

export default App;
