import React, { useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar"
import Chatbot from "./components/Chatbot/Chatbot"
import Hero from "./components/Hero/Hero"
import { useState } from 'react'


const App = () => {

 const [DarkMode, setDarkMode] = useState(false);
useEffect(()=>{
    console.log('DarkMode?', DarkMode)
     console.log("HTML classList: ", document.documentElement.classList)
if(DarkMode){
  document.documentElement.classList.add('dark')
}else {
  document.documentElement.classList.remove('dark')
}
},[DarkMode] );

function toggleDarkMode(){
  setDarkMode(prevMode => !prevMode)
}


  return (
    <div className="min-h-screen 	bg-gray-100 text-gray-900  	dark:bg-slate-900 	dark:text-gray-100 transition-all duration-300" >
    <Navbar DarkMode={DarkMode}  toggleDarkMode={toggleDarkMode} />
    <Hero/> 
    <Chatbot/>
   
   
    </div>
  )
}

export default App