import React, { useState, useEffect } from "react";
import axios from "axios";
import cogoToast from 'cogo-toast';

import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
    
    if (data) {
        if (data.errors) {
           cogoToast.error('Username or Email already in use!', { hideAfter : 3 })
        } else {
          cogoToast.success('Welcome to the Chitter!', { hideAfter : 3 }) 
          .then(() => window.location = '/')
        }
      }
    } catch (ex) {
      console.log(ex);
    }
   
  };
  return (
    <div className="container input-field">
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          
          <input className="validate"
            type="name"
            name="name"
            placeholder="Name"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          
          <input className="validate"
            type="username"
            name="username"
            placeholder="Username"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          
          <input className="validate"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          
          <input className="validate"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit" className="second-button">Register</button>
        
      </form>
    </div>
  );
}

export default Register;
