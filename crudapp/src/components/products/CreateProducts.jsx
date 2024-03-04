import { Form } from "react-router-dom"


const CreateProducts = () => {
  return (
    <div>
        <h1>Create Products</h1>
        <Form action="/create-products" method="post">
            <div className="form-group">
                <label htmlFor="title">Name</label>
                <input type="text" name="name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="price">Email</label>
                <input type="text" name="email"></input>
            </div>
    
            <div className="form-group">
                <label htmlFor="categoryId">CategoryId</label>
                <input type="text" name="title"></input>
            </div>
            <div className="form-group">
                <label htmlFor="images">Images</label>
                <input type="text" name="images"></input>
            </div>
            <div className="form-group">
                <button>Submit</button>
            </div>
        </Form> 
    </div>
  )
}

export default CreateProducts