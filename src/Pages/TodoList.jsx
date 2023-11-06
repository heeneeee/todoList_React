import React, {useState} from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Form from '../components/Form'
import List from '../components/List'

// 부모 컴포넌트
function TodoList() {
    const [todos, setTodos] = useState([
        {// id를 지정해주는 이유는 새로고침해도 화면에 렌더링 돼있어야 하기 때문!
         // 새로 등록하는 id는 Date.now()를 사용하여 겹치는 id가 없도록 한다.
            id: 1,   
            title: "REACT 공부하기",
            content: "강의 다시 듣기",
            isDone: false
        },
        {
            id: 2,
            title: "알고리즘 문제풀기",
            content: "하루에 한 문제는 필수!",
            isDone: true
        }
    ])

    return (
        <Layout>
            <Header />
            <Form todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
        </Layout>
    )
}
export default TodoList