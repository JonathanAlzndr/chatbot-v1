import React, { useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar"
import Chatbot from "./components/Chatbot/Chatbot"
import Hero from "./components/Hero/Hero"
import { useState } from 'react'


const App = () => {
const [isOpen, setIsOpen] = useState(false); 
 const [DarkMode, setDarkMode] = useState(false);
useEffect(()=>{
    
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
    <div className="font-(family-name:--font-poppins) 	bg-gray-100 text-gray-900  	dark:bg-slate-900 	dark:text-gray-100 transition-all duration-300" >
    <Navbar DarkMode={DarkMode}  toggleDarkMode={toggleDarkMode} />
    <Hero openChat={() => setIsOpen(true)}/> 
    <Chatbot isOpen={isOpen} setIsOpen={setIsOpen}/>
   
   
    </div>
  )
}

export default App