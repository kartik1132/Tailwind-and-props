import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setcount] = useState(0)
  
// let btnText  = "click me"

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind</h1>
     <Card userName ="chaiAurcode" btnText = "click me" />
     <Card  userName="kartik" btnText = "visit me"/>

    </>
  ) 
}

export default App  
