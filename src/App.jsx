
import { useState } from 'react'
import './App.css'

function App() {

const [color , setColor] = useState("olive")
  return (
    <>
     <div className=' h-screen w-screen '
     style={{backgroundColor : color}}>
      
        <div className='flex gap-3 flex-wrap bg-white justify-center  bottom-12 fixed h-32 w-full p-2 ' >
           <button onMouseOver={ () => setColor('red')} 
           className='h-10 text-white mt-6 p-1 rounded-xl'
           style={{backgroundColor : 'Red'}} >Red</button>

           <button 
           onMouseOver={ () => setColor('yellow')}
           className='h-10 text-black mt-6 p-1 rounded-xl'
           style={{backgroundColor : 'yellow'}} >Yellow</button>
           
           <button 
           onMouseOver={ () => setColor('green')}
           className='h-10 text-white mt-6 p-1 rounded-xl'
           style={{backgroundColor : 'green'}} >Green</button>

           <button
           onMouseOver={ () => setColor('blue')}
           className='h-10 text-white mt-6 p-1 rounded-xl'
           style={{backgroundColor : 'blue'}} >Blue</button>

           <button 
           onMouseOver={ () => setColor('pink')}
           className='h-10 text-white mt-6 p-1 rounded-xl'
           style={{backgroundColor : 'pink'}} >Pink</button>
         
        </div>
      hii
      </div> 
    
    </>
  )
}

export default App
