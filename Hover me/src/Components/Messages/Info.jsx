/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Info = ({text,status}) =>{

return (
<div>
   {
    (function()
    {
        switch(status)
        {
            case "info":
            return text;

            case "warning":
            return text;
            case "error":
            return text;
            default:
            return "no status found";
        }
    })()
   }
</div>
)

}
export default Info;