/* eslint-disable react/prop-types */


const Task = ({title,author,description}) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <p>
        author:{author}
      </p>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Task
