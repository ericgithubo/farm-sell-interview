import React  , { useState } from 'react'

// import Navigationbar from './navbar/navbar';
// import './dashboard.scss';


function getHour(){
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0'); 
  const minutes = now.getMinutes().toString().padStart(2, '0'); 
  return `${hour}:${minutes}`
}

function getDate() {
    const today = new Date();
    const day = getDayOfWeek(today.getDay());
    const month = getMonthName(today.getMonth() + 1);
    const year = today.getFullYear();
    const date = today.getDate();
    
    return `  ${day}, ${month} ${date} ${year}`;
}

function getDayOfWeek(dayIndex) {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    return days[dayIndex];
}

function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex - 1];
}



const Dashboard = ({ islogged }) => {
    const [currentDate, setCurrentDate] = useState(getDate());
    const [currentTime,SetCurrentTime] = useState(getHour());
    const [isLogged,setIsLogged] = useState(false);

    const handleLogin = () =>{
      setIsLogged(true)
    };
    const handleLogout = () =>{
      setIsLogged(false)
    };
  return (
    <>
    {/* <Navigationbar /> */}
    
    <section>
      
      <div className='dashboard-container'>
        <h1>
          {currentTime} Hrs
        </h1>
        <p>
          {currentDate}
        </p>

        {isLogged ? (
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleLogout}>Time In</button>
      ) : (
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogin}>Time Out</button>
      )}
      </div>
    </section>
    </>
    
  )
}

export default Dashboard
