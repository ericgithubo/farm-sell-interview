import React from 'react';
import { useState } from 'react';
// import Navigationbar from './navbar/navbar';
// import './report.scss';

function getDate() {
    const today = new Date();
    const month = getMonthName(today.getMonth() + 1);
    const year = today.getFullYear();
    const date = today.getDate();
 
    return ` ${month} ${year}`;
}

function getDayOfWeek(dayIndex) {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    return days[dayIndex];
}

function getMonthName(monthIndex) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex - 1];
}

const Report = () => {
    const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <>
    {/* <Navigationbar/> */}
    <section>
      
      <div className='report-container'>
      <div className='report-container_left'>
        <h1>
            Users
        </h1>
        <div className="user-admin">
        <div className='report-admin'>
        <h3>Admin</h3>
        <span>tallen@tallen.tech</span>
        </div>

        <div className='report-user'>
        
          <div>
          <h4>
          <span>Tallen </span> 
          Support</h4>
          </div>
         
        <span>support@tallen.tech</span>
        </div>   
        </div> 
        </div>
       

      <div className='report-container_right'>
        <h1>
            Logs for {currentDate}
        </h1>

      <div className="shaded"></div>
      <div className='logs-container'>
      
      <table className='logs-table'>
      
      <thead>
       
        <tr>
          <th>Date</th>
          <th>Time In</th>
          <th>Time In</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      
      </tbody>
    </table>

        </div>

      </div>

      </div>
    </section>
    </>
    
  )
}

export default Report;
