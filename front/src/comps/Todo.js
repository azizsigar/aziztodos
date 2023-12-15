import React, { useState, useEffect } from 'react';
import Add from './Add';
import { Navbar } from '../pages/Navbar';
import TodoCard from './TodoCard'; // Correct for a default export

const Todo = ({ todos, isloading, setTodos, fetchData }) => {

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {isloading ? (
        <div className='loading'>
          {/* loading icons */}
          wellcome...
        </div>
      ) : (
        <>
          <Navbar />
         
         <TodoCard
         todos={todos}
         setTodos={setTodos}
         fetchData={fetchData}
         />
        </>
        
        
      )}
    </div>
  );
};
export default Todo;
