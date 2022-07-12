
import { getByTitle } from '@testing-library/react';
import React, { useState } from 'react';


const TodoForm = (props) => {
    //make a dictionary and use setstate on that

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.todo)
        props.createTodo(props.todo);
        props.setTodo({todoItem: "", done: false});
    }
    

    // const handleDone = (e, i) => {
    //     todoList[i]
    // }

    return (
        <div>
            <h1>To Do:</h1>
            <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center',  gap: '10px', justifyContent: 'center'}}>
                <div>
                    <label for="makeTodo">To do: </label>
                    <input type="text" name="makeTodo" value={props.todo.todoItem} onChange={(e) => props.setTodo({todoItem: e.target.value, done: false})} />
                </div>
                <input type="submit" value="Add" />
            </form>

        </div>
    )
}

export default TodoForm;
















































//RAFCE









// import { getByTitle } from '@testing-library/react';
// import React, { useState } from 'react';


// const TodoForm = (props) => {
//     //make a dictionary and use setstate on that

//     const [todo, setTodo] = useState({todoItem: "", done: false})

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(todo)
//         props.createTodo(todo);
//         setTodo({todoItem: "", done: false});

//     }
    

//     // const handleDone = (e, i) => {
//     //     todoList[i]
//     // }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1>Hello</h1>
//                 <div>
//                     <label for="makeTodo">To do: </label>
//                     <input type="text" name="makeTodo" value={todo.todoItem} onChange={(e) => setTodo({todoItem: e.target.value, done: false})} />
//                 </div>
//                 <input type="submit" value="Add" />
//             </form>

//         </div>
//     )
// }

// export default TodoForm;

// //RAFCE


















// import { getByTitle } from '@testing-library/react';
// import React, { useState } from 'react';


// const TodoList = (props) => {
//     //make a dictionary and use setstate on that
//     const [todo, setTodo] = useState("");
//     const [done, setDone] = useState(false);

//     const[todoList, setTodoList] = useState([]);

//     const createTodo = (newTodo) => setTodoList([...todoList, newTodo]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         createTodo({ todo, done });
//         setTodo("");
//     }

//     // const handleDone = (e, i) => {
//     //     todoList[i]
//     // }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1>Hello</h1>
//                 <div>
//                     <label for="makeTodo">To do: </label>
//                     <input type="text" name="makeTodo" value={todo} onChange={(e) => setTodo(e.target.value)} />
//                 </div>
//                 <input type="submit" value="Add" />
//             </form>
//             <div>
//                 {todoList.map((td, i) => {
//                     return (
//                         <div>
//                             <div key={i} className='todoItem'>
//                                 <p style={td.done?{ textDecoration: "line-through" }:{}}>{td.todo}</p> 
//                                 <input type="checkbox" onChange={() => setDone(!done)} checked={done}/>
//                             </div>
//                         </div>
//                     )
//                 })}

//             </div>


//         </div>
//     )
// }

// export default TodoList;

// //RAFCE