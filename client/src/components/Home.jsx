import React from 'react';
import AddComment from './AddComment';
import Feed from './Feed';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [user, setUser] = useState([]);

useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.jwt) {
            navigate("/");
            } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/");
        } else
                console.log(data);
              setUser(data);
      }
    };
        verifyUser();
     }, [cookies, navigate, removeCookie]);

    return (
        <>
            <Header />
            <div className='container add'>
          <AddComment user={user} />
        </div>
         <div className='container feed'>
                <Feed />
           </div>
              <Footer />
        </>        
    )
}

export default Home