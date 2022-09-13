import React from 'react'

export default function Sidebar() {
 
  return (
    <aside className='w-44 absolute float-right bg-slate-800 h-full text-center text-white top-15 right-0'>
        <ul className='flex flex-col space-y-4'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portofolio</a></li>
            <li><a href="#">About Me</a></li>
        </ul>
    </aside>
  )
}
