import React, { useState } from "react";
import "./App.css";
import { Title } from "./Component/Title.jsx";
import { Form } from "./Component/Form.jsx";
import { Table } from "./Component/Table.jsx";
import { Hours } from "./Component/Hours.jsx";

const totalWeekHours = 7 * 24;

function App() {
  const [taskList, setTaskList] = useState([]);
  // const [totalHours, setTotalHours] = useState(0);
  // const [badHour, setBadHours] = useState(0);

  const getTaskObject = (taskObj) => {
    if (totalHours + +taskObj.hour > totalWeekHours) {
      return alert("Sorry Boss, not enough hour to add the task");
    }
    setTaskList([...taskList, taskObj]);
  };

  const deleteTask = (deleteId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = taskList.filter((item) => item.id !== deleteId);
      setTaskList(updatedItems);
    }
  };

  const switchTask = (id, type) => {
    const updatedItems = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(updatedItems);
  };

  const totalHours = taskList.reduce((total, item) => total + +item.hour, 0);
  const badHours = taskList
    .filter((item) => item.type === "bad")
    .reduce((total, item) => total + +item.hour, 0);

  return (
    <>
      <div className="wrapper vh-100 pt-5">
        <div className="container">
          <Title />
          <Form getTaskObject={getTaskObject} />
          <Table
            itemList={taskList}
            switchTask={switchTask}
            deleteTask={deleteTask}
          />
          <Hours totalHours={totalHours} badHours={badHours} />
        </div>
      </div>
    </>
  );
}

export default App;
