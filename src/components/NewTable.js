import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Table.css";
export default function NewTable(props) {
  const gridRef = useRef(null);


  const [rowData, setrowData] = useState([]);

  useEffect(() => {
    setrowData(props.newData);
  }, [props.newData]);
  console.log(rowData);
  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "250px", width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        defaultColDef={defaultColDef}
      >
        <AgGridColumn field="id" />
        <AgGridColumn field="name" />
        <AgGridColumn field="email" />
        <AgGridColumn field="gender" />
        <AgGridColumn field="DOB" minWidth={190} />
        <AgGridColumn field="country" />
        <AgGridColumn field="city" />
      </AgGridReact>
      <div
        className="footer"
        style={{ display: "flex", justifyContent: "center" }}
      >
     @assignment done by Settivaripalli Gunasekhar
    </div>
    </div>
  );
}
