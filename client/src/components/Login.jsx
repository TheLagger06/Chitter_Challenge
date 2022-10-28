import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import cogoToast from 'cogo-toast';

function Login({pop}) {

  const navigate = useNavigate("/");
  
  const [values, setValues] = useState({ email: "", password: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
        
      );
      if (data) {
        if (data.errors) {
          cogoToast.error('Login failed, please check your credentials & try again!', { hideAfter: 3 })
        } else {
          cogoToast.success('Logged in successfully!', { hideAfter: 1 })
    
            .then(() => {
              window.location.reload();
              
            })
          
        
            
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
        <button type="submit" className="second-button">Sign in</button>
        
      </form>

    </div>
  );
}

export default Login;
