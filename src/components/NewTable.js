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

  const onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "50%", width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        resizable={true}
        enableBrowserTooltips={true}
         onFirstDataRendered={onFirstDataRendered}
      >
        <AgGridColumn field="id" tooltipField="id" />
        <AgGridColumn field="name" />
        <AgGridColumn field="email" />
        <AgGridColumn field="gender" />
        <AgGridColumn field="DOB" />
        <AgGridColumn field="country" />
        <AgGridColumn field="city" />
      </AgGridReact>
      <br />
      <div
        className="footer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        @Assignment done by &nbsp;
        <strong>
          <em>Settivaripalli Gunasekhar</em>
        </strong>
        <br />
      </div>
    </div>
  );
}
