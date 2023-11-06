import React from "react"


function Todo({todo, onRemoveHandler, onCompleteHandler}) {
    return (
        <div className="todoBox">
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <div className="buttonBox">
            <button onClick={()=>onRemoveHandler(todo.id)} className="removeBtn">삭제하기</button>
            <button onClick={()=>onCompleteHandler(todo.id)} className="compleBtn">{todo.isDone ? "취소하기" : "완료하기"}</button>
            </div>
        </div>
    )
}
export default Todo;