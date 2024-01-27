
'use client'

import Image from "next/image";
import React, { useState } from 'react'


export default function Home() {
  const [countClick, setCountClick] = useState(0); 
  
  // Function to change the value of state on  
  // click of button 
  const countClickHandler = () => { 
      setCountClick(countClick + 1); 
  }; 
  const counttop=()=>{
    if(countClick>1){
      setCountClick(countClick-1);
    }
  //  setCountClick(countClick-1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2> State value: {countClick} </h2> 
            <button onClick={countClickHandler}> 
               +
            </button> 
            <button onClick={counttop}> 
                -
            </button> 
            
    </main>
  );
}
