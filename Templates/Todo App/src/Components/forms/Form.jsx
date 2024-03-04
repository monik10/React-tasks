/* eslint-disable react/prop-types */


const Form = ({course,trainer,handleChange,handleSubmit}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="course">Course</label>
            <input type="text" placeholder="enter course" name="course" required value={course} onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label htmlFor="trainer">Trainer</label>
            <input type="text" placeholder="enter trainer" name="trainer" required value={trainer} onChange={handleChange}></input>
        </div>
        
        <div>
            <button>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Form
