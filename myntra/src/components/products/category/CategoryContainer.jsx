import { useParams } from "react-router-dom"

const CategoryContainer = () => {
    let {category}=useParams();
    
  return (
    <div>
        <h1>{category}</h1>
    </div>
  )
}

export default CategoryContainer