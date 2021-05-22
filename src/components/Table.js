import React, { Component, useRef, useState } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Table.css";
import { ClientSideRowModelModule } from "ag-grid-community";

import BtnCellRenderer from "./BtnCellRenderer";
import { AllCommunityModules } from "ag-grid-react";

import NewTable from "./NewTable";

function GenderDropDown(props) {
  const [gender, setgender] = useState(props.value);
  return (
    <div>
      <select value={gender}>
        <option value="male"> Male </option>
        <option value="female"> Female </option>
      </select>
    </div>
  );
}

function DeleteButton() {
  return (
    <div>
      <button className="action-button delete" data-action="delete">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png"
          style={{ height: "25px", width: "25px" }}
        ></img>
      </button>
    </div>
  );
}

function CountryDropDown(props) {
  return (
    <div>
      <select>
        <option value="India"> India </option>
        <option value="USA"> USA </option>
      </select>
    </div>
  );
}

export default function Table() {
  const [newData, setnewData] = useState([]);
  const gridRef = useRef(null);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const rowData = [
    {
      id: "1",
      name: "jad",
      email: "sgunasjkf@gmail.com",
      gender: "Male",
      DOB: "02/10/1998",
      country: "India",
      city: "kfs",
    },
    {
      id: "2",
      name: "asdfkl",
      email: "sgunasjkf@gmail.com",
      gender: "Female",
      DOB: "02/10/1998",
      country: "USA",
      city: "kfs",
    },
    {
      id: "3",
      name: "vzc",
      email: "sgunasjkf@gmail.com",
      gender: "Male",
      DOB: "02/10/1998",
      country: "INDIA",
      city: "kfs",
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    resizable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    flex: 1,
  };
  const filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      const dateAsString = cellValue;
      const dateParts = dateAsString.split("/");
      const cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
  };

  var newCount = 1;
  function createNewRowData() {
    var newData = {
      id: "",
      name: "",
      email: "",
      gender: "",
      DOB: "",
      country: "",
      city: "",
    };
    newCount++;
    return newData;
  }

  const addItems = (addIndex) => {
    var newItems = [createNewRowData()];
    var res = gridApi.applyTransaction({
      add: newItems,
      addIndex: addIndex,
    });
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setnewData(selectedData);
  };

  const onRemoveSelected = () => {
    var selectedRowData = gridApi.getSelectedRows();
    gridApi.applyTransaction({ remove: selectedRowData });
  };
  const onRemoveNonSelected = () => {
    var selectedRowData = gridApi.getSelectedRows();
    gridApi.setRowData(selectedRowData);
  };

  function onCellClicked(params) {
    console.log(params.event.target.dataset.action);
    // Handle click event for action cells
    if (params.column.colId === "action") {
      params.api.applyTransaction({
        remove: [params.node.data],
      });
    }
  }

  return (
    <div className="ag-theme-alpine" style={{ height: "250px", width: "100%" }}>
      <button className="button_1" onClick={onButtonClick}>
        Get Data
      </button>
      <button className="button_1" onClick={addItems}>
        Add Row{" "}
      </button>
      <button className="button_1" onClick={onRemoveSelected}>
        Delete selected Row
      </button>
      <button className="button_1" onClick={onRemoveNonSelected}>
        Delete Non Selected Row{" "}
      </button>
      <button className="button_1" onClick={onButtonClick}>
        Submit{" "}
      </button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        frameworkComponents={{
          GenderDropDown: GenderDropDown,
          CountryDropDown: CountryDropDown,
          DeleteButton: DeleteButton,
        }}
        modules={ClientSideRowModelModule}
        onCellClicked={onCellClicked}
        editType="fullRow"
        suppressClickEdit={true}
        modules={AllCommunityModules}
        defaultColDef={defaultColDef}
        // sideBar={"filters"}
        rowSelection="multiple"
        onGridReady={onGridReady}
      >
        <AgGridColumn field="id" checkboxSelection={true} />
        <AgGridColumn field="name" />
        <AgGridColumn field="email" />
        <AgGridColumn
          field="gender"
          editable={true}
          cellRenderer="GenderDropDown"
        />
        <AgGridColumn
          field="DOB"
          minWidth={190}
          filter="agDateColumnFilter"
          filterParams={filterParams}
        />
        <AgGridColumn field="country" cellRenderer="CountryDropDown" />
        <AgGridColumn field="city" />
        <AgGridColumn
          field="action"
          editable={false}
          cellRenderer="DeleteButton"
        />
      </AgGridReact>
      <br />
      <br />
      <h1>Submitted Data</h1>
      <br />
      <NewTable newData={newData} />
    </div>
  );
}