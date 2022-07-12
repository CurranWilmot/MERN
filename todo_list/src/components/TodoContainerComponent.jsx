import React, { useState } from 'react';
import TodoList from './TodoListComponent';
import TodoForm from './TodoFormComponent';


const TodoListContainer = (props) => {
    //make a dictionary and use setstate on that
    const [todo, setTodo] = useState({todoItem: "", done: false})
    const [todoList, setTodoList] = useState([]);
    
    


    const createTodo = (newTodo) => setTodoList([...todoList, newTodo]);

    
    
    return (
        <div>
            <TodoForm createTodo={createTodo} todo={todo} setTodo={setTodo}/>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
    );
}



export default TodoListContainer;















































// import React, { useState } from 'react';
// import TodoList from './TodoListComponent';
// import TodoForm from './TodoFormComponent';


// const TodoListContainer = (props) => {
//     //make a dictionary and use setstate on that
    
//     const [todoList, setTodoList] = useState([]);
    


//     const createTodo = (newTodo) => setTodoList([...todoList, newTodo]);

    
    
//     return (
//         <div>
//             <TodoForm createTodo={createTodo}/>
//             <TodoList todoList={todoList} setTodoList={setTodoList}/>
//         </div>
//     );
// }



// export default TodoListContainer;