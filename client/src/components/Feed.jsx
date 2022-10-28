import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import profilePic from "./Images/person-circle.svg";
import cogoToast from 'cogo-toast';
import moment from 'moment';

function Feed() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [peeps, setPeeps] = useState(null);
  
   const getPeeps = async () => {
            const response = await axios.get('http://localhost:4000/peeps')
            setPeeps(response.data);
  }
    
    useEffect(() => {
      
      getPeeps();
      

 const logOut = () => {
    removeCookie("jwt");
    navigate("/");
    };
    }, [cookies, navigate, removeCookie]);
  
  
  console.log(peeps);
  return (
    <>
      {peeps?.slice(0).reverse().map(peep => (
      <div className="row comment">
      <div className="col-md-1">
        <a href="/" className="logo-wrapper" title="Home">
              <span className="icon logo">
                          <img className='pic' src={profilePic} alt="logoo" />
                      </span>
              </a>
      </div>
              <div className="col-md-11 p-2">
            <a><b> {peep.user.name}</b> </a><a> @{peep.user.username} </a> <a>·{moment(Date.parse(peep.createdAt)).fromNow()}</a>
            <br></br>
                 <h5>{peep.content}</h5>
                  
        </div>
        </div>
      ))}
    </> 
    )


}

export default  Feed;