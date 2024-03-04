
import Navbar from './Components/Navbar/Navbar';
import link1 from "./Components/fire.mp3";
import link2 from "./Components/rain.mp3";
import link3 from "./Components/birds.mp3";

import { useRef } from 'react';
import "./index.css"
       
       const App = () => {

        let divRef=useRef();
        const audioArr=[{
          audioName:"Fire",
          link:link1,
          iconUrl:"https://cdn-icons-png.flaticon.com/512/3209/3209915.png",
        },
        { 
          audioName:"Rain",
          link:link2,
        iconUrl:"https://cdn-icons-png.flaticon.com/512/7038/7038403.png",
      },
      { 
        audioName:"Birds",
        link:link3,
      iconUrl:"https://cdn-icons-png.flaticon.com/512/4498/4498547.png",
    }
    ]

        

         return (
           <div ref={divRef}>
             <Navbar audio={audioArr}/>
             <div>
             
             </div>
           </div>
         )
       }
       
       export default App;
       