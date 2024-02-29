import Task from "../components/Task"

const TaskList = (props) => {

  const TaskArray = ["This is the array", "so is this"];
  const Tasks = [
    <>
      <Task key={1} Description={'Desc 1'} Date={'Date 1'} />
      <Task key={2}Description={'Desc 2'} Date={'Date 2'} />
      <Task key={3} Description={'Desc 3'} Date={'Date 3'} />
    </>
  ]

  return (
    <div id= "TaskList">
      <h1>Task List here</h1>
      <div>
        <select id="dropdown">
          <option value='All'>All Tasks</option>
          <option value='Incomplete'>Incomplete Tasks</option>
          <option value='Complete'>Completed Tasks</option>
        </select>
        {Tasks}
      </div>
    </div>
  )
}

export default TaskList