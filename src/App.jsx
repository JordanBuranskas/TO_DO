import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskList from './containers/TaskList'
import './App.css'

function App() {
 
  //our title
  //our input bar for new todo items 
  //our dropdown component will be a form in the same container as the list 

 // make task component
 // make database, make Task model
 // make backend route to pull tasks from database
 // make fetch req from frontend to display
  // default display - all tasks


//form logic goes here
//post request goes here
const [inputVal, setInput] = useState('')

const handleChange = (e) => {
  setInput(e.target.value);
  console.log(e.target.value)
 
};

const handleSubmit = (e) => {
  e.preventDefault();
  const item = inputVal
  console.log(item)

  fetch('/addToList', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(item)
    
    
  })
  .then(response => {
    console.log("lets see if we reached out fetch")
    if (response.ok) {
      console.log("Item added successfully!");
      setInput(''); // Clear input field on successful submission
    } else {
      console.error("Failed to add item to the list.");
    }
  }).catch(error => {
    console.error("Error:", error);
  });
    

//fetch request goes here


}


  return (
    <>
    
      <div>
      </div>
      <h1>To Do List</h1>
      <div className="title">
        <form onSubmit={handleSubmit}>
        <label htmlFor="inputField">Add me to the list!</label>
      <textarea
        id="inputField"
        value={inputVal}
        onChange={handleChange}
        maxLength={300}
        // rows={5} // Adjust the number of rows as needed
        // cols={50} // Adjust the number of columns as needed
      ></textarea>
      <button type="submit">Submit</button>

        </form>


  

        <TaskList/>
      </div>
    </>
  )
}

export default App
