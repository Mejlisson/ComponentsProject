import './App.scss'
import TodoList from "./components/ToDoList/ToDoList";
import GifFetcher from "./components/Gif-API/GifAPI";

function App() {
 
  return (
    <>
    <div className="app-container">
         <TodoList/>
         <GifFetcher/>
    </div>
    </>
  )
}

export default App
