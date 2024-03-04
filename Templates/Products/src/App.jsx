/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import Item from "./Components/products/Item"
import Products from "./Components/products/Products"
import DATA from "./data.json"


const App = () => {
let lists=[
  // {id:1,title:"T-shirt",price:109.95,description:"Your perfect pack for everyday use and walks in the forest.",category:"men's clothing",image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",rating:{rate:4,count:12}}
]
  let[state,setState]=useState(lists);
  return (
   <section id="productsBlock">
    <article className="container">
      <Products  state={state}/>
      <Item/>
    </article>
   </section>
  )
}

export default App




