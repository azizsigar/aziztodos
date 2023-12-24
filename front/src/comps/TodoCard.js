import React from 'react';
import axios from 'axios';
import Add from './Add';

const TodoCard = ({ todos, setTodos, fetchData }) => {
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const editTodo = async(id,value)=>{
    try {
      const response =await axios.patch(`http://127.0.0.1:8000/api/todo/${id}`,value)
      const newTodos =todos.map(todo=>todo.id=== id ? response.data : todo)
      setTodos(newTodos)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <Add
        setTodos={setTodos}
        fetchData={fetchData}
        />
        <div className="all">
      {todos.map((todoItem, index) => (
        <div key={todoItem.id}>
          <div>
            {todoItem ? (
              <div className="todoCard">
                <div className="editdelete">
                  <span
                  
                  className="material-symbols-outlined">edit_note</span>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => deleteTodo(todoItem.id)}
                  >
                    done
                  </span>
                </div>
                <div className="body">
                  <span className="material-symbols-outlined">adjust</span>
                  <div className="bodymax">{todoItem.body}</div>
                </div>
                <div className="desc">
                  <div>
                    <span className="material-symbols-outlined">fiber_manual_record</span>
                  </div>
                  <div className="bodymax">{todoItem.description}</div>
                </div>
                <div className="due">
                  <span className="material-symbols-outlined">pending_actions</span>
                  {new Date(todoItem.due_datetime).toLocaleString('tr-TR', {
                    day: '2-digit',
                    month: 'long',
                  })}{' '}
                  <> </>
                  {new Date(todoItem.due_datetime).toLocaleString('tr-TR', {
                    hour12: false,
                    minute: '2-digit',
                    hour: '2-digit',
                  })}
                </div>
                <div className="urllocation">
                  <div className="url">
                    {todoItem.related_url ? (
                      <>
                        <a href={todoItem.related_url} target="_blank" rel="noopener noreferrer">
                          <span className="material-symbols-outlined">Link</span>
                        </a>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="location">
                    {todoItem.location ? (
                      <>
                        <a href={todoItem.location} rel="noopener noreferrer" target="_blank">
                          <span className="material-symbols-outlined">location_on</span>
                        </a>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="createdtime">
                  <p>
                    {new Date(todoItem.created).toLocaleString('tr-TR', {
                      month: 'long',
                      day: '2-digit',
                    })}
                    <> </>
                    {new Date(todoItem.created).toLocaleString('tr-TR', {
                      hour12: false,
                      minute: '2-digit',
                      hour: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div></div>
      ))}</div>
    </div>
  );
};
export default TodoCard;


