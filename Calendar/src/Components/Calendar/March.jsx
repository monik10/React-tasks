import  { Component } from 'react'
class Calendar extends Component {
    state = {
      year: 2024,
      months: [
        { name: 'March', days: 31 }]
    };
   render() {
      const { year, months } = this.state;
  
      return (
        <div className="Calendar">
          {months.map((month, index) => (
            <div key={index}>
              <h2>{month.name} {year}</h2>
              <table>
                <thead>
                  <tr>
                    <th className='sun'>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  {this.MonthDays(month.days)}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      );
    }
    MonthDays = (days) => {
        const firstDay = new Date(`${this.state.year}-03-01`).getDay();
        const totalCells = Math.ceil((days + firstDay) / 7) * 7;
        const monthDays = [];
    
        for (let i = 0; i < totalCells; i++) {
          if (i < firstDay || i >= (days + firstDay)) {
            monthDays.push(<td key={i}></td>);
          } else {
            monthDays.push(<td key={i}>{i - firstDay + 1}</td>);
          }
        }
    
        const rows = [];
        for (let i = 0; i < totalCells / 7; i++) {
          rows.push(<tr key={i}>{monthDays.slice(i * 7, (i + 1) * 7)}</tr>);
        }
    
        return rows;
      };
    }
    
    
export default Calendar;
  