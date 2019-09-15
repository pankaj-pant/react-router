import React, { useState } from 'react';
import './App.css';
import ToDoTable from './ToDoTable'

function ToDoList() {
  const [desc, setDesc] = useState({dates : '', description : ''})
  const [toDos, setToDos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setToDos([...toDos, desc]);
    setDesc({dates : "", description : ""});
  }

  const inputChanged = (event) => {
    setDesc({...desc,
      [event.target.name] : event.target.value
    });
  }

  const deleteButton = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    setToDos(toDos.filter((toDo, index) => parseInt(event.target.id) !== index));
  }

  return (
    <div className="App">
      <h1>Simple Todolist</h1>
      <form onSubmit={addTodo}>
        <fieldset>
        <legend>Add Todo:</legend>
        <label>Description: </label>
        <input type="date" name="dates" value={desc.dates} onChange={inputChanged} />
        <label>Date: </label>
        <input type="text" name="description" value={desc.description} onChange={inputChanged} />
        <input type="submit" value="Add" />
        </fieldset>
      </form>
        
        <ToDoTable toDos={toDos} deleteButton={deleteButton}/>

    </div>
  );
}

export default ToDoList;
