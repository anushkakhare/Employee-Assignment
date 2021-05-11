import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

var data = [
  {
    empId: 1,
    empName: "Ramesh",
    mgrdId: 3,
  },
  {
    empId: 3,
    empName: "Pravin",
    mgrdId: 104,
  },
  {
    empId: 2,
    empName: "Suresh",
    mgrdId: 3,
  },
  {
    empId: 6,
    empName: "Sandeep",
    mgrdId: 2,
  },
  {
    empId: 4,
    empName: "Rahul",
    mgrdId: 1,
  },
  {
    empId: 5,
    empName: "Mahesh",
    mgrdId: 2,
  },
  {
    empId: 104,
    empName: "Vishal",
    mgrdId: null,
  },
];

var obj = {};
var root = 0;
for (let i = 0; i < data.length; i++) {
  if (Object.keys(obj).includes(data[i].empId.toString()) === false) {
    obj[data[i].empId] = { name: data[i].empName, children: null };
  } else if (obj[data[i].empId].name === null) {
    obj[data[i].empId].name = data[i].empName;
  }
  if (data[i].mgrdId != null) {
    if (Object.keys(obj).includes(data[i].mgrdId.toString()) === false) {
      let l = [];
      l.push(data[i].empId);
      obj[data[i].mgrdId] = { name: null, children: l };
    } else if (obj[data[i].mgrdId].children == null) {
      let l = [];
      l.push(data[i].empId);
      obj[data[i].mgrdId].children = l;
    } else {
      obj[data[i].mgrdId].children.push(data[i].empId);
    }
  } else {
    root = data[i].empId;
  }
}
console.log(obj);

ReactDOM.render(
  <React.StrictMode>
    <App key={root} id={root} obj={obj} />
  </React.StrictMode>,
  document.getElementById("root")
);
