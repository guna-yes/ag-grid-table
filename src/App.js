import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import NewTable from "./components/NewTable";

function App() {
  return (
    <div className="App" style={{ margin: "4em" }}>
      <h1>Top Rankers Assignments</h1>
      <Table />
     
    </div>
  );
}

export default App;
