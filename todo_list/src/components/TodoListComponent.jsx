import React, { useState } from 'react';
import './CompStyle.css';


const TodoList = (props) => {


    const handleDoneChange = (e, idx) => {
        const todoListCopy = [...props.todoList];
        todoListCopy[idx].done = e.target.checked;
        props.setTodoList(todoListCopy)
    }
    //can also do it this way:
    //todoListCopy[idx] = {...todoListCopy[idx], done: e.target.checked}

    const handleDelete = (idx) =>{
        const todoListCopy = props.todoList.filter((td, i) => i !== idx);
        props.setTodoList(todoListCopy);
    }

    return (
        <div>
            {props.todoList.map((td, i) => {
                return (
                    <div className='todoItem'>
                        <div key={i} style={{display: 'flex', alignItems: 'center',  gap: '10px'}}>
                            <input type="checkbox" onChange={(e) => handleDoneChange(e, i)} checked={td.done} />
                            <p style={td.done ? { textDecoration: "line-through" } : {}}>{td.todoItem}</p>
                            <button style={{color: 'red'}} onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;









































{/* <div>
    {todoList.map((td, i) => {
        return (
            <div>
                <div key={i} className='todoItem'>
                    <p style={td.done?{ textDecoration: "line-through" }:{}}>{td.todo}</p> 
                    <input type="checkbox" onChange={() => setDone(!done)} checked={done}/>
                </div>
            </div>
        )
    })}

</div> */}








// import React, { useState } from 'react';
// import './CompStyle.css';


// const TodoList = (props) => {
//   return(
//       <div>
//           {props.todoList.map((td, i) => {
//               return(
//                   <div className='todoItem'>
//                       <div key={i}>
//                           <p>{td.todoItem}</p>
//                           <input type="checkbox" onChange={() => props.setTodoList()}/>
//                       </div>
//                   </div>
//               )
//           })}
//       </div>
//   )
// }

// export default TodoList;

























