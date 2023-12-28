import React, { useState } from 'react'

const TodoList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  }

  const addTodo = () => {
    setTaskList([...taskList, task]);
    setTask('');
  }

  const removeTask = (index) => {
    const updateTaskList = [...taskList]
    updateTaskList.splice(index, 1);
    setTaskList(updateTaskList);
  }

  console.log(taskList);
  return (
    <div className='container p-2 text-center border'>
      <h1>TODO List</h1>
      <input type="text" onChange={handleTask} value={task} />
      <button className='m-1' onClick={addTodo}>ToDo</button>
      {taskList.map((item, index) => (
        <div className='container p-2 m-1 text-start border' key={index}>
          <input type="checkbox" />
          <label>{index + 1}. {item}</label>
          <button className='m-1' onClick={() => removeTask(index)}>X</button>
        </div>
      ))}

    </div>
  )
}

export default TodoList;