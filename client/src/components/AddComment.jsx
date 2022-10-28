import React from 'react'
import profilePic from './Images/person-circle.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import cogoToast from 'cogo-toast';
import Login from './Login';
import Register from './Register';

const AddComment = ({user}) => {
  const [cookies] = useCookies(["cookie-name"]);
  const [values, setValues] = useState({ content: "" });
  const navigate = useNavigate("/");



  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwt = cookies.jwt;
      if(!jwt){
        console.log('not logged in');
        const { hide } = cogoToast.warn('Click to login & comment', {
          onClick: () => {
            hide();
            // window.location = '/test';
            pop();
          },
        });
      }
      else {
       try {
      axios.post(
        "http://localhost:4000/comment",
        {
          ...values,
          user: user,
        },
        { withCredentials: true }
      );
         window.location.reload();
    } catch (ex) {
      console.log(ex);
        }
       
      }
    
    
  };
  
   function pop() {
    document.getElementById("popup-1")
    .classList.toggle("active");
  };
  function pop1() {
    pop();
    document.getElementById("popup-2")
    .classList.toggle("active");
    };

  return (
    
    <>
      <div className="row comment">
      <div className="col-md-1">
        <a href="/" className="logo-wrapper" title="Home">
              <span className="icon logo">
                          <img className='pic' src={profilePic} alt="logoo" />
                      </span>
              </a>
      </div>
      <div className="col-md-11"> 
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea className="textarea" placeholder="What's Happening" name="content" onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          } />
            <button className="commentBtn" type="submit" >Peep</button>
          </form>      
        </div>
  <div className="popup" id="popup-1">
   <div className="content">
    <div className="close-btn"><button className='popBtn' onClick={pop}>
      ×
    </button>
     </div>
     
<h1>Sign in</h1>
 
            <Login pop={pop} />
<a>Don't have an account? <a onClick={pop1}>Sign Up</a></a>            
          </div>
          
        </div>
  
        
        <div className="popup" id="popup-2">
   <div className="content">
    <div className="close-btn"><button className='popBtn' onClick={pop1}>
      ×
    </button>
     </div>
     
<h1>Register Account</h1> 
       <Register />
   </div>
  </div>
      </div>
      
    </>
  )
}

export default AddComment