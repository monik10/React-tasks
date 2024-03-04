import { Component } from 'react'
 import Navigation from './Components/Navbar/Navigation'
import Calendar from "./Components/Calendar/Calendar"
import Footer from './Components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
        <div>
        <Navigation/>
        <Calendar/>
      <Footer/>
        </div>
      
    )
  }
}

 


