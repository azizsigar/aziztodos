// import toast, { Toaster } from 'react-hot-toast';
// import { Loading } from './Loading';
import React, { useState, useEffect } from 'react';
import Add from './Add';
import axios from "axios";

// import { Body } from "./Body";

const Todo = ({ todos, isloading,setTodos,fetchData }) => {
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      
      {isloading ? (
        
        <div className='loading'>
          {/* loading icons */}
          wellcome...
        </div>
      ) : (
        

        <div className="all">
          <Add
        setTodos={setTodos}
        fetchData={fetchData}
        />
          <div>

            
          </div>
          {todos.map((todoItem, index) => (
            <div key={todoItem.id}>

              <div  > {todoItem ?

                <div className='todoCard'>

                  <div className="editdelete">
                    <span class="material-symbols-outlined">
                      edit_note
                    </span>
                    <span class="material-symbols-outlined" onClick={() => deleteTodo(todoItem.id)}>
                      done
                    </span>
                  </div>
                  <div className='body'>
                    <span class="material-symbols-outlined">
                      adjust
                    </span>
                    <div className="bodymax">
                      {todoItem.body}
                    </div>
                  </div>
                  <div className='desc'>
                    < div>
                      <span class="material-symbols-outlined">
                        fiber_manual_record
                      </span></div>
                    <div className="bodymax">

                      {todoItem.description}
                    </div>
                  </div>
                  <div className='due'>
                    <span class="material-symbols-outlined">pending_actions</span>
                    {new Date(todoItem.due_datetime).toLocaleString("tr-TR", {
                     day: "2-digit",
                     month: "long",
                    })}<> </>
                    {new Date(todoItem.due_datetime).toLocaleString("tr-TR", {
                      hour12: false,
                     minute: "2-digit",
                     hour: "2-digit",
                    })}</div>

                  <div className="urllocation">

                    <div className='url'>
                      {todoItem.related_url ?
                        <>
                          <a href={todoItem.related_url} target='_blank' rel='noopener noreferrer'>
                            <span class="material-symbols-outlined">
                              Link
                            </span></a>
                        </>
                        : <></>}
                    </div>

                    <div className='location'>{todoItem.location ?
                      <>
                        <a href={todoItem.location} rel="noopener noreferrer" target="_blank">
                          <span class="material-symbols-outlined">
                            location_on
                          </span></a>

                      </> : <></>}</div>

                  </div>
                  <div className='createdtime'><></><p >
                    {new Date(todoItem.created).toLocaleString("tr-TR", {
                      month: "long",
                      day: "2-digit",
                    })}
                    <> </>
                    {new Date(todoItem.created).toLocaleString("tr-TR", {
                      hour12: false,
                      minute: "2-digit",
                      hour: "2-digit",
                    })}
                  </p>
                  </div>
                </div> : <></>}

                {/* https://youtu.be/FdMf_3SurOA?t=4469 */}

                {/* {todoItem.color}
                {todoItem.parent}
                <div className='file'>Attachment{todoItem.attachment}</div>
                {todoItem.priority}
                {todoItem.repeat_period}
                {todoItem.viewed} */}
              </div>
            </div>
          )
          )}
        </div>
      )}

    </div>
  );
};

export default Todo;
