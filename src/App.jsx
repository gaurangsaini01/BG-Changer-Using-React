import { useState } from 'react'

function App() {

  const [color ,setColor]=useState("lightblue");

return(
  <>
  <div className="w-full h-screen" style={{backgroundColor:color}}>
  <h1 className="text-center bg-black text-slate-300 p-4 text-2xl md:text-4xl font-medium ">Bg Color Changer</h1>
  </div>
  <div className="w-full text-sm md:text-base lg:text-base bg-slate-800 h-24 py-8 lg:mx-8 rounded-xl flex  justify-evenly items-center fixed top-24" >
    <button className=' bg-red-500 p-2  rounded-xl text-white ' onClick={()=>setColor("crimson")}>Crimson</button>
    <button className=' bg-green-500 p-2  rounded-xl text-white ' onClick={()=>setColor("lightgreen")}> LightGreen</button>
    <button className=' bg-blue-300 text-gray p-2  rounded-xl ' onClick={()=>setColor("lightblue")}>Light Blue</button>
    <button className=' bg-purple-300 text-gray p-2  rounded-xl ' onClick={()=>setColor("lavender")}>Lavender</button>
    <button className=' bg-[#FBF0B2] text-gray p-2  rounded-xl ' onClick={()=>setColor("#FBF0B2")}>Light Yellow</button>
  </div>
  </>
)   
}

export default App
