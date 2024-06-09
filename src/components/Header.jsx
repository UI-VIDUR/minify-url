import React from 'react'
import logo from '../assets/images/minify-url-icon.png';

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-3 px-4 sm:max-w-xl md:px-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto border-b-2 border-b-slate-200">
        <a href="" className="flex items-center gap-2 uppercase font-mono text-lg">
            <img width={40} height={40} src={logo} alt="" />
            <strong>Minify Url</strong>
        </a>
        <ul className="flex items-center gap-4">
            <li className="">
                <a href="" className="bg-slate-800 text-white rounded py-2 px-5 text-sm uppercase font-semibold tracking-wider font-mono hover:bg-slate-700">Login</a>
            </li>
            <li className="">
                <a href="" className="bg-slate-800 text-white rounded py-2 px-5 text-sm uppercase font-semibold tracking-wider font-mono hover:bg-slate-700">Sign Up</a>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
