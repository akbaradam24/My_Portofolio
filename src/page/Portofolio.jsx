import React from 'react'
import Whiteboard from '../assets/Whiteboard.png'

export default function Portofolio() {
  return (
    <div className="portofolio flex items-center flex-col justify-center mx-10 my-10 ">
        <img className='w-4/5 md:w-3/5' src={Whiteboard} alt="Whiteboard" />
        <p className='text-center mt-2 text-slate-500'>
        Whiteboard is an application that provides a medium <br /> for people to work together.
        </p>
        <a className='mt-4 border-solid border-2 rounded-lg p-2 border-sky-500' href="https://mywhiteboards.herokuapp.com/">
          <button>
            Go To Whiteboard
          </button>
        </a>
    </div>
  )
}
