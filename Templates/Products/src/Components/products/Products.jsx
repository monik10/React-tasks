/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import Item from "./Item"
const Products = ({state}) => {
 if(!state)
 {
    return <h1>Loading...</h1>
 }
 if(!state.length)
 {
    return <h1>Sorry😥,The product is Empty</h1>
 }
 else
 {
 return(
    <ul>
        {state.map(product =>{
            return(
                <Fragment key={product.id}>
                    <Item key={product.id} {...product}/>
                </Fragment>
            )
        })}
    </ul>
 )
    }
}

export default Products;
