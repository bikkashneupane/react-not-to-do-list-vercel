import React, { useState, useEffect } from "react";
const totalWeekHours = 7 * 24;

export const Table = ({ itemList = [], switchTask, deleteTask }) => {
  // const [items, setItems] = useState(itemList);
  // const [hour, setHour] = useState(0);
  // const [badHour, setBadHour] = useState(0);

  // useEffect(() => {
  //   setItems(itemList);
  // }, [itemList]);

  // useEffect(() => {
  //   calculateHour();
  //   calculateBadHour();
  // }, [items]);

  // useEffect(() => {
  //   calculateBadHour();
  // }, [items]);

  // const deleteTask = (deleteId) => {
  //   if (window.confirm("Are you sure you want to delete this item?")) {
  //     const updatedItems = items.filter((item) => item.id !== deleteId);
  //     setItems(updatedItems);
  //   }
  // };

  // const switchTask = (id, type) => {
  //   const updatedItems = items.map((item) => {
  //     if (item.id === id) {
  //       item.type = type;
  //     }
  //     return item;
  //   });
  //   setItems(updatedItems);
  // };

  const displayEntryRow = () => {
    const tempList = itemList.filter((item) => item.type === "entry");
    return tempList.map((item, index) => (
      <tr key={item.id}>
        <th>{index + 1}</th>
        <td>{item.task}</td>
        <td>{item.hour} hrs</td>
        <td className="text-end">
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(item.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            className="btn btn-success"
            onClick={() => switchTask(item.id, "bad")}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </td>
      </tr>
    ));
  };

  const displayBadRow = () => {
    const tempList = itemList.filter((item) => item.type === "bad");
    return tempList.map((item, index) => (
      <tr key={item.id}>
        <th>{index + 1}</th>
        <td>{item.task}</td>
        <td>{item.hour} hrs</td>
        <td className="text-end">
          <button
            className="btn btn-warning"
            onClick={() => switchTask(item.id, "entry")}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(item.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  };

  // const calculateHour = () => {
  //   const total = items.reduce((total, item) => total + +item.hour, 0);
  //   setHour(total);
  // };

  // const calculateBadHour = () => {
  //   const tempList = items.filter((item) => item.type === "bad");
  //   const badHours = tempList.reduce((total, item) => total + +item.hour, 0);
  //   setBadHour(badHours);
  // };

  return (
    <>
      <div className="row mt-5 gap-2">
        {/* Entry list */}
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <table className="table table-custom table-hover border">
            <tbody id="table-entry-list">{displayEntryRow()}</tbody>
          </table>
        </div>

        {/* Bad list */}
        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <table className="table table-custom table-hover border">
            <tbody id="table-not-to-do-lsit">{displayBadRow()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};
