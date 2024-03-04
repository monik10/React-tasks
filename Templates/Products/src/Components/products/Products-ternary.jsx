/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import Item from "./Item"
const Products = ({state}) => {


return (<Fragment>
    {
        !state ? (<h1>Loading...</h1>):!state.length ? (<p>Sorry😥,The product is Empty</p>):(<ul>
         {state.map(product =>{
           return(
                <Fragment key={product.id}>
                    <Item key={product.id} {...product}/>
                </Fragment>
            )
        } 
        )}
        </ul>
    
 )
    }
</Fragment>)
}

export default Products;
