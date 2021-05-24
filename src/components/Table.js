// 'use strict';
import React, { useRef, useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Table.css";
import { ClientSideRowModelModule } from "ag-grid-community";
import $ from "jquery";
import GenderCellRenderer from "./GenderCellRenderer.js";
import NewTable from "./NewTable";

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

function getDatePicker() {
  function Datepicker() {}
  Datepicker.prototype.init = function (params) {
    this.eInput = document.createElement("input");
    this.eInput.value = params.value;
    this.eInput.classList.add("ag-input");
    this.eInput.style.height = "100%";
    $(this.eInput).datepicker({ dateFormat: "dd/mm/yy" });
  };
  Datepicker.prototype.getGui = function () {
    return this.eInput;
  };
  Datepicker.prototype.afterGuiAttached = function () {
    this.eInput.focus();
    this.eInput.select();
  };
  Datepicker.prototype.getValue = function () {
    return this.eInput.value;
  };
  Datepicker.prototype.destroy = function () {};
  Datepicker.prototype.isPopup = function () {
    return false;
  };
  return Datepicker;
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
      country: "Australia",
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

  function createNewRowData() {
    var newData = {
      id: "",
      name: "",
      email: "",
      gender: "Select",
      DOB: "Pick",
      country: "Select",
      city: "",
    };
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
    // Handle click event for action cells
    // console.log(params);

    if (params.column.colId === "action") {
      params.api.applyTransaction({
        remove: [params.node.data],
      });
    }
  }

  const genderChange = (gender) => {
    console.log("Gender Change", gender);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "350px", width: "100%" }}>
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
          genderCellRenderer: GenderCellRenderer,
          CountryDropDown: CountryDropDown,
          DeleteButton: DeleteButton,
          // datePicker: getDatePicker
        }}
        components={{ datePicker: getDatePicker() }}
        modules={ClientSideRowModelModule}
        onCellClicked={onCellClicked}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        onGridReady={onGridReady}
      >
        <AgGridColumn field="id" checkboxSelection={true} />
        <AgGridColumn field="name" editable={true} />
        <AgGridColumn field="email" editable={true} />
        <AgGridColumn
          field="gender"
          editable={true}
          singleClickEdit={true}
          cellRenderer="genderCellRenderer"
          cellEditor="agSelectCellEditor"
          cellEditorParams={{
            values: ["Male", "Female"],
            cellEditor: "genderCellRenderer",
          }}
        />
        <AgGridColumn
          field="DOB"
          singleClickEdit={true}
          editable={true}
          cellEditor="datePicker"
          filter="agDateColumnFilter"
          filterParams={filterParams}
        />
        <AgGridColumn
          field="country"
          editable={true}
          cellEditor="agSelectCellEditor"
          singleClickEdit={true}
          cellEditorParams={{
            values: ["USA", "India", "Australia"],
            cellEditor: "agSelectCellEditor",
          }}
        />
        <AgGridColumn field="city" editable={true} />
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
