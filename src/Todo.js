import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react'
import './Todo.css';
import db from './firebase';

function Todo(props) {
  return (
    <List>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="deadline"></ListItemText>
        </ListItem>
        <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
    </List>
  );
}

export default Todo;