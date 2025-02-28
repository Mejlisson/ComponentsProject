import './App.scss'
import TodoList from "./components/ToDoList/ToDoList";
import GifFetcher from "./components/Gif-API/GifAPI";
import Calendar from "./components/Calendar/Calendar";

function App() {
 
  return (
    <>
    <div className="app-container">
         <TodoList/>
         <GifFetcher/>
         <Calendar/>
    </div>
    </>
  )
}

export default App
