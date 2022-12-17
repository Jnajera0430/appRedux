import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
  const taskState = useSelector(state=>state.tasks);

  return (
    <>
      {
        taskState.map((task,i)=>(
          <div key={i}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            {task.estado ? <p>Aprobado</p> : <p>No aprobado</p>}
          </div>
        ))
      }
    </>
  )
}

export default TaskList