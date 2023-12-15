import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Todo from './comps/Todo';
// import Add from "./comps/Add";
// import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [todos, setTodos] = useState([])
  const [isloading, setIsloading] = useState(true)

  

    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/todo/');
          setTodos(response.data);
          setIsloading(false);
          console.log(response)
        }
        catch (error) {
          console.error('Error fetching data:', error);
          setIsloading(false);
        };
      }, 500);
    };

    useEffect(() => {
    fetchData();

  }, []);
  // {
  //   fetchData()
  //   console.log(todos)
  // )


  //   const fetchData = async()=>{
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/api/todo/")
  //       setTodos(response)
  //       setIsloading(false)
  //     } catch (error) {
  //       console.log(error)

  //     }
  //   },[]}

  return (
    <div className="App">
      <Todo
        todos={todos}
        setTodos={setTodos}
        isloading={isloading}
        fetchData={fetchData}
      />
   
    </div>
  );
}

export default App;
