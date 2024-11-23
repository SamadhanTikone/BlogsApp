import {  NavLink } from "react-router-dom"


function Header() {
  return (
    <div className="flex justify-around">
        <h1 className="text-3xl font-bold uppercase cursor-pointer "> <NavLink to={"/"}>Company <span className="text-orange-600">Name</span></NavLink> </h1>
      <div className="flex gap-10 uppercase">
       
      <NavLink to={"/"} className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white font-bold') }>Home</NavLink>
      <NavLink to={"/about"} className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white font-bold')}>About</NavLink>
      <NavLink to={"/contact"} className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white font-bold')}>Contact US</NavLink>
      
      </div>
    </div>
  )
}

export default Header
