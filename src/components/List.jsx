import React from "react"

import Todo from './Todo'

function List({todos, setTodos}) {
    const onRemoveHandler = (id) => {
        const remainedTodos = todos.filter((todo)=>{
            return todo.id !== id
        })
        setTodos(remainedTodos)
    }

    const onCompleteHandler = (id) =>{
        const newTodos = todos.map((todo)=>{
            if (todo.id === id) {
                return {...todo, isDone: !todo.isDone}
            } else {
                return {...todo}
            }
        })
        setTodos(newTodos)
    }

    return (
        <div className="list_section">
            <h1>Working... </h1>
            <div className="todoList">
                {todos.map((todo)=>{
                    if(todo.isDone === false) {
                        return <Todo todo={todo} key={todo.id} setTodos={setTodos} onRemoveHandler={onRemoveHandler} onCompleteHandler={onCompleteHandler}/>
                        }
                    }
                )}
            </div>
            <h1>Done..! </h1>
            <div className="todoList">
                {todos.map((todo)=>{
                        if(todo.isDone === true) {
                            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onRemoveHandler={onRemoveHandler} onCompleteHandler={onCompleteHandler}/>
                            }
                        }
                    )}
            </div>
        </div>
    )
}
export default List