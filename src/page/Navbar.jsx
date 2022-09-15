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
        <ul className='sm:flex space-x-4 '>
            <li className='hidden sm:flex space-x-4 '>
              <a href="#">Home</a>
            </li>
            <li className='hidden sm:flex space-x-4 '>
              <a href="#">Education</a>
            </li>
            <li className='hidden sm:flex space-x-4 '>
              <a href="#">Skill</a>
            </li>
            <li className='hidden sm:flex space-x-4 '>
              <a href="#">Portofolio</a>
            </li>
            <li className='hidden sm:flex space-x-4 '>
              <a href="#">About Me</a>
            </li>
            <li>
              <button>
                <img className='w-10 h-10 sm:hidden' onClick={handleBarclick} src={bar} alt="bar" />
                </button>
            </li>
        </ul>
        <aside className={[barlogic ? ' hidden ' :'w-44 h-full absolute  bg-slate-800  text-center text-white top-15 right-0']}>
          <ul className='flex mt-5 flex-col space-y-4 transition duration-75 ease-in-out'>
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
