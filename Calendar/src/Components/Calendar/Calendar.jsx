import { Component } from 'react'
import Jan from "./Jan";
import Feb from "./Feb";
import March from "./March"

export default class Calendar extends Component {
  render() {
    return (
        <div className='cal_Container'>
            <Jan/>
            <Feb/>
            <March/>
        </div>
           
    );
  }
}
