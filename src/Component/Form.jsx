import React, { useState } from "react";

// const initialState = "";

export const Form = ({ getTaskObject }) => {
  // const [task, setTask] = useState(initialState);
  // const [hour, setHour] = useState(initialState);

  // const taskChange = (e) => {
  //   const { value } = e.target;
  //   setTask(value);
  // };

  // const hourChange = (e) => {
  //   const { value } = e.target;
  //   setHour(value);
  // };

  const [form, setForm] = useState({});

  //use this function to replace above two individual functions for better programming
  //[name] is used instead of name only to get the value of name instead of property like name = task/hr. This helps to get value of e.target from form where each form field is assigned a name property like name="task"

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const taskObject = {
      task: form.task,
      hour: form.hour,
      id: randomIdGenerator(),
      type: "entry",
    };

    getTaskObject(taskObject);

    setForm({
      task: "",
      hour: "",
    });
  };

  const randomIdGenerator = () => {
    let id = "";
    const idLength = 6;
    const str =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

    for (let i = 0; i < idLength; i++) {
      const randomPosition = Math.floor(Math.random() * str.length);
      id += str[randomPosition];
    }
    return id;
  };

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2 mt-5 shadow-lg border p-5 rounded">
          <div className="col-md-7">
            <input
              type="text"
              name="task"
              className="form-control"
              placeholder="Task"
              value={form.task}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="hour"
              className="form-control"
              placeholder="Hours"
              value={form.hour}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add New Task</button>
          </div>
        </div>
      </form>
    </>
  );
};
