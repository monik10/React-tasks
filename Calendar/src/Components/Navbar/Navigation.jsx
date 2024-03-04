import  { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <section className='navbar'>
        <div>
            <img src="/public/fav.png"></img> 
        </div>
        <h1 className='name'>Calendar</h1> 
       <button>Day</button>
       <button>Month</button>
       <button>Year</button>
      </section>
    )
  }
}
