import './App.scss'
import TodoList from "./components/ToDoList/ToDoList";
import GifFetcher from "./components/Gif-API/GifAPI";
import Calendar from "./components/Calendar/Calendar";
import ColorPicker from './components/Exercises/ColoPicker';
import MyComponent from "./components/Exercises/Updates/UpdateStateArrayObject"

function App() {
 
  return (
    <>
    <div className="app-container">
       <MyComponent/>
    </div>
    </>
  )
}

export default App



/*
  <TodoList/>
  <GifFetcher/>
  <Calendar/>
*/