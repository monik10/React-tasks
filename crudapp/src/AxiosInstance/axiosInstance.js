import axios from "axios";

let Base_Url="http://localhost:5000";
let AxiosInstances =axios.create({
    baseURL:Base_Url,
    
})


export default AxiosInstances;