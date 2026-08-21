import { createContext } from "react";
import {useEffect, useState } from "react";
import axios from "axios"

export const context = createContext();
const Createcontext = ({children}) => { 
    const [comp, setComp] = useState("Home");
    const [allinvestments,setAllinvestments] = useState([])

      useEffect(()=>{
     const getinvestment= async ()=>{
    try {
   const response = await axios.get('http://localhost:5000/api/all-investments');
     console.log(response.data)
     setAllinvestments(response.data.data)
 } catch (error) {
  console.log(error)
 }
  } 
     getinvestment();
  },[]);

 const data ={setComp,comp, allinvestments,setAllinvestments}

  return (
    <context.Provider value={data}>
         {children}
    </context.Provider>
  )
}

export default Createcontext