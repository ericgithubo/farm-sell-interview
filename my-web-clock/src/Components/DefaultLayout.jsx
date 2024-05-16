import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";

export default function DefaultLayout(){
    const {user, token, setUser, setToken} = useStateContext();
    if(!token){
       return <Navigate to='/login'/>
    }
    
    const onLogout =  (ev) =>{
        ev.preventDefault();
        axiosClient.get('/logout')
        .then(({}) => {
           setUser(null)
           setToken(null)
        })
    }

    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])

    return(
        <div id="defaultLayout">
         <div className="content">
            <header>
            <nav className='nav-container'>
      
      <div className='nav-container_left'>
       
          <Link to = '/Dashboard'>
           Clocking
       </Link>
        <a href="mailto:tallen@tallen.tech">Tallen Tech</a>
      </div>
    
      <ul>
          <li>
              <Link to= '/Report'>Report</Link>
          </li>
          <li>
              <Link to= '/User'>User</Link>
          </li>
          <li>
              <Link to= '/logOut'>Log Out</Link>
          </li>
        </ul>
      
      
    </nav>
            </header>
            <main>

            <Outlet />

            </main>
            </div>
        </div>
    )
}