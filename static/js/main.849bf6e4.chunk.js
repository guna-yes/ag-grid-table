(this.webpackJsonpag_grid=this.webpackJsonpag_grid||[]).push([[0],{17:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var n=i(1),l=i.n(n),o=i(5),c=i.n(o),a=(i(23),i.p,i(24),i(4)),r=i(2),d=(i(16),i(8),i(9),i(17),i(3)),s=i(6),u=i.n(s),j=(i(33),i(0)),m=function(e){console.log(e);var t="Male"===e.value?"male.png":"female.png",i="https://www.ag-grid.com/example-assets/genders/".concat(t);return Object(j.jsxs)("span",{children:[Object(j.jsx)("img",{src:i}),e.value]})};function b(e){var t=Object(n.useRef)(null),i=Object(n.useState)([]),l=Object(a.a)(i,2),o=l[0],c=l[1];Object(n.useEffect)((function(){c(e.newData)}),[e.newData]),console.log(o);return Object(j.jsxs)("div",{className:"ag-theme-alpine",style:{height:"50%",width:"100%"},children:[Object(j.jsxs)(r.AgGridReact,{ref:t,rowData:o,resizable:!0,enableBrowserTooltips:!0,onFirstDataRendered:function(e){e.api.sizeColumnsToFit()},children:[Object(j.jsx)(r.AgGridColumn,{field:"id",tooltipField:"id"}),Object(j.jsx)(r.AgGridColumn,{field:"name"}),Object(j.jsx)(r.AgGridColumn,{field:"email"}),Object(j.jsx)(r.AgGridColumn,{field:"gender"}),Object(j.jsx)(r.AgGridColumn,{field:"DOB"}),Object(j.jsx)(r.AgGridColumn,{field:"country"}),Object(j.jsx)(r.AgGridColumn,{field:"city"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"footer",style:{display:"flex",justifyContent:"center"},children:["@Assignment done by \xa0",Object(j.jsx)("strong",{children:Object(j.jsx)("em",{children:"Settivaripalli Gunasekhar"})}),Object(j.jsx)("br",{})]})]})}function g(){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"action-button delete","data-action":"delete",children:Object(j.jsx)("img",{src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png",style:{height:"25px",width:"25px"}})})})}function p(){function e(){}return e.prototype.init=function(e){this.eInput=document.createElement("input"),this.eInput.value=e.value,this.eInput.classList.add("ag-input"),this.eInput.style.height="100%",u()(this.eInput).datepicker({dateFormat:"dd/mm/yy"})},e.prototype.getGui=function(){return this.eInput},e.prototype.afterGuiAttached=function(){this.eInput.focus(),this.eInput.select()},e.prototype.getValue=function(){return this.eInput.value},e.prototype.destroy=function(){},e.prototype.isPopup=function(){return!1},e}function f(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],l=t[1],o=Object(n.useRef)(null),c=Object(n.useState)(null),s=Object(a.a)(c,2),u=s[0],f=s[1],O=Object(n.useState)(null),h=Object(a.a)(O,2),x=(h[0],h[1]),y={comparator:function(e,t){var i=t.split("/"),n=new Date(Number(i[2]),Number(i[1])-1,Number(i[0]));return e.getTime()===n.getTime()?0:n<e?-1:n>e?1:void 0}};return Object(j.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(j.jsxs)("div",{id:"myGrid",style:{width:"100%",height:"45%"},className:"ag-theme-alpine",children:[Object(j.jsxs)("button",{className:"button_1",onClick:function(e){var t=[{id:"id",name:"Name",email:"Email",gender:"Gender",DOB:"DOB",country:"Country",city:"City"}];u.applyTransaction({add:t,addIndex:e})},children:["Add Row"," "]}),Object(j.jsx)("button",{className:"button_1",onClick:function(){var e=u.getSelectedRows();u.applyTransaction({remove:e})},children:"Delete selected Row"}),Object(j.jsxs)("button",{className:"button_1",onClick:function(){var e=u.getSelectedRows();u.setRowData(e)},children:["Delete Non Selected Row"," "]}),Object(j.jsxs)("button",{className:"button_1",onClick:function(e){var t=o.current.api.getSelectedNodes().map((function(e){return e.data}));l(t)},children:["Submit"," "]}),Object(j.jsxs)(r.AgGridReact,{onFirstDataRendered:function(e){e.api.sizeColumnsToFit()},style:{color:"red"},ref:o,rowData:[{id:"1",name:"John Snow",email:"john@gmail.com",gender:"Male",DOB:"02/10/1998",country:"India",city:"WinterFell"},{id:"2",name:"Arya",email:"aarya@gmail.com",gender:"Female",DOB:"02/10/1998",country:"USA",city:"Bravos"},{id:"3",name:"Tyrion",email:"tyrion@gmail.com",gender:"Male",DOB:"02/10/1998",country:"Australia",city:"Kings Landing"}],resizable:!0,enableBrowserTooltips:!0,frameworkComponents:{genderCellRenderer:m,DeleteButton:g},components:{datePicker:p()},modules:d.ClientSideRowModelModule,onCellClicked:function(e){"action"===e.column.colId&&e.api.applyTransaction({remove:[e.node.data]})},defaultColDef:{sortable:!0,editable:!0,filter:!0,floatingFilter:!0,singleClickEdit:!0},rowSelection:"multiple",onGridReady:function(e){f(e.api),x(e.columnApi)},children:[Object(j.jsx)(r.AgGridColumn,{field:"id",checkboxSelection:!0,tooltipField:"id"}),Object(j.jsx)(r.AgGridColumn,{field:"name",suppressSizeToFit:!0,editable:!0,tooltipField:"name"}),Object(j.jsx)(r.AgGridColumn,{field:"email",editable:!0,tooltipField:"email"}),Object(j.jsx)(r.AgGridColumn,{tooltipField:"gender",field:"gender",editable:!0,singleClickEdit:!0,cellRenderer:"genderCellRenderer",cellEditor:"agSelectCellEditor",cellEditorParams:{values:["Male","Female"],cellEditor:"genderCellRenderer"}}),Object(j.jsx)(r.AgGridColumn,{tooltipField:"DOB",field:"DOB",singleClickEdit:!0,editable:!0,cellEditor:"datePicker",filter:"agDateColumnFilter",filterParams:y}),Object(j.jsx)(r.AgGridColumn,{tooltipField:"country",field:"country",editable:!0,cellEditor:"agSelectCellEditor",singleClickEdit:!0,cellEditorParams:{values:["USA","India","Australia"],cellEditor:"agSelectCellEditor"}}),Object(j.jsx)(r.AgGridColumn,{field:"city",editable:!0}),Object(j.jsx)(r.AgGridColumn,{field:"action",editable:!1,floatingFilter:!1,cellRenderer:"DeleteButton"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Submitted Data"}),Object(j.jsx)("br",{}),Object(j.jsx)(b,{newData:i})]})})}var O=function(){return Object(j.jsxs)("div",{className:"App",style:{padding:"1em"},children:[Object(j.jsx)("h1",{children:"Top Rankers Assignments"}),Object(j.jsx)(f,{})]})},h=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),n(e),l(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),h()}},[[36,1,2]]]);
//# sourceMappingURL=main.849bf6e4.chunk.js.map