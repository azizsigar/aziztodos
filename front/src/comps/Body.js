import React from 'react';

export const Body = (todos, isloading) => {
  return (
    <div>
      {isloading ? (
        <div>
          {/* loading icons */}
          Loading...
        </div>
      ) : (
        <div>
          {todos.map((todoItem, index) => (
            <div key={todoItem.id}>
              {todoItem.body}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
   