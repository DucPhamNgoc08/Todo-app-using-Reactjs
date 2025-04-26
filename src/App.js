import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';
import {Button, FormControl, Input, InputLabel } from '@mui/material';

function App() {
  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as the get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  }, []); 

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refresh
    db.collection('todos').add({
      todo: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); // clear up the input field after clicking the add Todo button
  }
  return (
    <div className="App">
      <h1>Hello User</h1>
      <p>First dustin's reactjs project</p>

      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button onClick={addTodo} variant="contained">Add todo</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
