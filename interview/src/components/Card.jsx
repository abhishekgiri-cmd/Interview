import React from "react";
import { useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useState } from "react";

export const Card = () => {
  const [view, setView] =useState([]);
  const [Data, setData]= useState([])
  const getUser = () => {
    axios({
      method: "get",
      url: "https://reqres.in/api/users/",
    }).then(function (response) {
      // handle success
      setData(response.data)
      console.log("response", response);
    });
  };
  useEffect(() => {
    getUser();
    console.log("function", getUser);
  }, []);
 const handleChange= (e)=>{
    setView(e.target.value);
    console.log("values",e.target.value)
 }
  return (
    <>
      <div className="card1">
        <p className="para" >
          Search here
        </p>
        <input type="search" onChange={handleChange}/>
         {/* {Data.map((D)=>{
            return(
                <div key={D.id}>{D.data.data.id}</div>
            )
         })} */}
        {/* {data.data.id <= 1 || data.data.id >=10 ? null :   <h1>{data.data.first_name}</h1> } */}
      </div>
    </>
  );
};
