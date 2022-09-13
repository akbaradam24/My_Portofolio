import React, {useState}from 'react'
import bar from '../assets/bars-solid.svg'
import Sidebar from '../ReusableComponents/Sidebar'

export default function Navbar() {
  //bar Menu logic
  const [barlogic,setbarlogic] = useState(true) 
  const handleBarclick = () => {
  setbarlogic(!barlogic)
  }
  return (
    <div className='flex justify-between mx-10 my-6'>
      <div>
        <p>Adam Akhbar Hasani</p>
      </div>
      <div>
        <ul className='flex space-x-4 '>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <button>
                <img className='w-10 h-10 hidden' onClick={handleBarclick} src={bar} alt="bar" />
                </button>
            </li>
        </ul>
        <aside className={[barlogic ? ' hidden ' :'w-44 absolute  bg-slate-800  text-center text-white top-15 right-10']}>
          <ul className='flex flex-col space-y-4'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portofolio</a></li>
            <li><a href="#">About Me</a></li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
