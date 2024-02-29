
const Task = ( { Description, Date, Completed } ) => {

  return (
    <div>
      <p><input type='checkbox'></input>  {Description} • {Date}</p> 
    </div>
  )
};

export default Task;