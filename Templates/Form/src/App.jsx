import { useState } from "react"

const App = () => {
  let[state,setState]=useState({
    title:"",
    comment:"",
    loading:false,
  })
  let {title,comment,loading}=state
  let handleClick=(e)=>
  {
    let {name,value}=e.target;
    setState({...state,[name]:value,loading:true})
  }

  let handleSubmit=(e)=>
  {
    e.preventDefault();
    try{
      console.log(state);
    }
    catch(error)
    {
      console.log(error)
    }
finally
{
  setState({loading:false,title:"",comment:""});
}
  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
      <label htmlFor='title'>Title</label>
      <input type="text" name="title" id="title" placeholder='Enter title' value={title} onChange={handleClick}></input>
      <div className='form-group'>
      <label htmlFor='comment'>Comments</label>
      <textarea id="comment" placeholder='Type your comments' name="comment" rows={10} value={comment} onChange={handleClick}>Write your Comments</textarea>
      </div>
      <div className='form-group'>
        <button disabled={!state.title && !state.comment ? true:false}>{loading ?"loading":"submit"}</button>
      </div>

      </div>
    </form>
      
    </div>
  )
}

export default App
