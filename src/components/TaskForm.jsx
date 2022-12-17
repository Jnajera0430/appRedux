import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';

function TaskForm() {
  const dispatch = useDispatch();
  const [data,setData] = useState();
  const handleChange =(e)=>{
    e.preventDefault(); 
    setData({
      ...data,
      [e.target.name]:e.target.value,
      estado: false
    });
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(addTask(data));
  }

  
  return (
    <>
      <form  onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Title' onChange={handleChange}/>
        <textarea name='descripcion' placeholder='Descripcion' onChange={handleChange}></textarea>
        <button type='submit'>save</button>
      </form>
    </>
  )
}

export default TaskForm