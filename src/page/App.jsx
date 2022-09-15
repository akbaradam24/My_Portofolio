import { useState } from 'react'
import reactLogo from '../assets/react.svg'
// import '../style/App.css'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Sidebar from '../ReusableComponents/Sidebar'
import Education from './Education'
import AboutMe from './AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    {/* <Sidebar></Sidebar> */}
    <Homepage></Homepage>
    <Education></Education>\
    <AboutMe></AboutMe>
    </>
  )
}

export default App
