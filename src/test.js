  /* <button onClick={function() {clickDoneHandler(item.id)}}>완료</button> */
// const Done = ({item,clickDoneHandler}) => {
//   return 
// }
<div className='done'>
{todo.map(function(item){
  return(
    <Done key={item.id}
    item={item}
    clickDoneHandler={clickDoneHandler}
    /> 
  )
})}


// const clickDoneHandler = function(id) {
  //   const newDoneList = todo.map(function(){
  //     return todo.id === id;
  //   })
  //   setTodo(newDoneList);
  // }s