import React, { useState } from 'react';

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Generate a unique ID for each task (you can use a more robust method if needed)
      title,
      desc,
    };
    setMainTask([...mainTask, newTask]);
    setDesc('');
    setTitle('');
  };

  let renderTask = <h2>No Task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t) => (
      <div key={t.id}>
        <h2>{t.title}</h2>
        <p>{t.desc}</p> 
      </div>
    ));
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your task"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
      <hr />
      <div>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default InputForm;
