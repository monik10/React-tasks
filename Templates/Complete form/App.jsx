/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react"
import COUNTRY from "./country.json"

let countries=COUNTRY;
const App = () => {
  let[state,setState]=useState({
    title:"",
    comment:"",
    gender:"",
    js_lib:"",
    country:"",
    price_range:0,
    date:"",
    time:"",
    color:"",
    loading:false,
  })
  
  let {title,comment,gender,loading,js_lib,country,price_range,date,time,color}=state

  let handleClick=(e)=>
  {
    let {name,value}=e.target;
    setState({...state,[name]:value,loading:true})
  }
  let [skills,setSkills]=useState("");
 
  let handleCheckBox=(e)=>
  {
  let {value}=e.target;
  if(e.target.checked)
 {
    setSkills(oldChecked =>{
    return[...oldChecked,value];
   });
}
else
{
  setSkills(oldChecked =>{
   return oldChecked;
   })
}
  }

  let handleSubmit=(e)=>
  {
    e.preventDefault();
    try{
      console.log({...state,skills,country,price_range,date,time,color});
    }
    catch(error)
    {
      console.log(error)
    }
finally
{
  setState({loading:false,title:"",comment:"",country:"",skills:"",gender:"",js_lib:""});
}
  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
      <label htmlFor='title'>Title</label>
      <input type="text" name="title" id="title" placeholder='Enter title' value={title} onChange={handleClick}></input>
      </div>
      <div className='form-group' name="gender" value={gender} onChange={handleClick}>
      <label htmlFor='gender'>Select Gender</label>
      <input type="radio" name="gender" id="gender"  value="male" />Male
      <input type="radio" name="gender" id="gender"  value="female" />Female
      <input type="radio" name="gender" id="gender"  value="others" />Others
      </div>
      <div className='form-group' name="skills" value={skills} onChange={handleCheckBox}>
      <label htmlFor='skills'>Select Skills</label>
      <input type="checkbox" name="skills" id="skills"  value="java" />Java
      <input type="checkbox" name="skills" id="skills"  value="javascript" />Javascript
      <input type="checkbox" name="skills" id="skills"  value="react" />React
      <div className='form-group'>
      <label htmlFor="js_lib">Choose JavaScript Libraries</label>
      <select name="js_lib" value={js_lib} onChange={handleClick}>
      <option value=""></option>
      <option value="react">React</option>
      <option value="moment js">Moment js</option>
      <option value="jquery">JQuery</option>
      </select>
{/* //country block */}
<div className='form-group'>
<label htmlFor='country'>Select Country</label>
<select name="country" id="country" onChange={handleClick} value={country}>
  {
countries.map(country=>{
  return <Fragment key={country.code}>
    <option value={country.code}>
     <Fragment>
      <span>
        <picture>
          <img src={country.flag} alt={country.code}/>
        </picture>
      </span>
      <span>
        {country.country}
      </span>
       
     </Fragment>
    </option>
  </Fragment>
})
  }
</select>
</div>

{/* price range block */}
<div className='form-group'>
<label htmlFor='price_range'>Price range</label>
<span>{price_range.length> 0 && price_range}</span>
<input type="range" name="price_range" id="price_range" min={0} max={100} value={price_range} onChange={handleClick}/>
</div>

{/* date block */}
<div className="form-group">
<label htmlFor='date'>Selecy Date</label>
<input type="date" name="date" id="date" value={date} onChange={handleClick}/>
</div>
{/* time block */}
<div className="form-group">
<label htmlFor='time'>Selecy Time</label>
<input type="time" name="time" id="time" value={time} onChange={handleClick}/>
</div>
{/* color block */}
<div className="form-group">
<label htmlFor='color'>Select Color</label>
<input type="color" name="color" id="color" value={color} onChange={handleClick}/>
</div>
{/* comment Block */}
      </div>
      </div>
      <div className='form-group'>
      <label htmlFor='comment'>Comments</label>
      <textarea id="comment" placeholder='Type your comments' name="comment" rows={10} value={comment} onChange={handleClick}>Write your Comments</textarea>
      </div>
      <div className='form-group'>
        <button>{loading ?"loading":"submit"}</button>
      </div>

     
    </form>
      
    </div>
  )
}

export default App
