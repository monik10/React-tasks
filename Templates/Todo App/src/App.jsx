/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Form from "./Components/forms/Form"
import {v1 as uuid} from "uuid"
import  { Toaster } from 'react-hot-toast';
import TodoList from "./Components/todo/TodoList"
const App = () => {
    let[state,setState]=useState({
        items:[],
        id:uuid(),
        course:"",
        trainer:"",
    })

    let handleChange =(e)=>
    {
        let {name,value}=e.target
        setState({...state,[name]:value})
    }
    let handleSubmit=e=>
    {
        e.preventDefault();
        try
        {
            let newItem={
                id:state.id,
                course:state.course,
                trainer:state.trainer,
            };
            let updatedItem =[...state.items,newItem];
            console.log(updatedItem)
            setState({
                items:updatedItem,
                id:uuid(),
                course:"",
                trainer:"",
            });
        }
        catch(error)
        {
            console.log(error)
        }   
    }

    let handleDelete=(id)=>
    {
        let filteredItem=state.items.filter(item=>item.id !==id)
        setState({items:filteredItem});
    }

    let handleUpdate=(id)=>
    {
        let editContent=state.items.filter(item=>item.id !== id)
        let selectedItem=state.items.find((item)=>item.id === id)
       setState({
        items:editContent,
        course:selectedItem.course,
        trainer:selectedItem.trainer,
        id:id,
       })
    }
  return (
    <div>
      <section id="mainBlock">
        <article>
        <header>
        <Toaster />
        <h1>TodoApp</h1>
        </header>
        <main>
            <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </main>
           
        </article>
      </section>
    </div>
  )
}

export default App
