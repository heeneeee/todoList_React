import React, {useState} from "react"


//초기값 (기본세팅)
function Form({todos, setTodos}) {
    const initialState = {id: 0, title: "", content: "", isDone: false}

    const [inputTodo, setInputTodo] = useState(initialState)


    const onChangeHandler=(event)=>{
        const {value, name} = event.target 
        setInputTodo({...inputTodo, [name]: value, id: Date.now()})
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault()
        if(inputTodo.title === "" && inputTodo.content ==="") {
            alert("빈칸을 입력해주세요!")
            return
        } 
        setTodos([...todos, inputTodo])
        setInputTodo(initialState)
    }
   
    return (
        <form onSubmit={onSubmitHandler} className="formBox">
            <div className='inputBox'>
                <h3>제 목</h3>           
                <input type='text' name="title" onChange={onChangeHandler} value={inputTodo.title}/> 
                <h3>내 용</h3> 
                <input type='text' name="content" onChange={onChangeHandler} value={inputTodo.content}/>
            </div>
            <button className="addBtn">추가하기</button>
        </form>
    )
}
export default Form