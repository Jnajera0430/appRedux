import './App.css';
import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
function App() {
  const taskState = useSelector(state => state.tasks);
  console.log(taskState);
  return (
    <div >
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
