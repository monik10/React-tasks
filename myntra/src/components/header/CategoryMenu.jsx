import { Link } from "react-router-dom"


const CategoryMenu = () => {
    let categoryListMenu=[{
        id:1,
        name:"Men",
    },
    {
        id:2,
        name:"Women",
    },
    {
        id:3,
        name:"Kids",
    },
    {
        id:4,
        name:"Home&Living",
    },
    {
        id:5,
        name:"Beauty",
    },
    {
        id:6,
        name:"Studio",
    },
]

  return (
  
        <ul className="list">
        {
            categoryListMenu.map((category)=>(
               <li key={category.id}>
                    <Link to={`/shop/${category.name}`} >{category.name}</Link>
                </li>
            ))
        }

        </ul>
   
  )
}

export default CategoryMenu