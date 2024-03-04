
const Child = ({name,children}) => {
    console.log(name);
    console.log(children);
  return (
    <div>
    <h1>{name}</h1>
    <p>{children}</p>
      
    </div>
  )
}

export default Child
