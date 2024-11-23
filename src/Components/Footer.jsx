import { Link, NavLink } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <div className="flex justify-between relative gap-4 items-start mt-28 pb-10">


  <h2 className="w-1/4 text-2xl uppercase font-bold">Company <span className="text-orange-600">Name</span></h2>
  <p className="text-xl w-1/2  text-left">
    Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. A architecto, consequuntur deleniti, in nemo, facere excepturi velit nobis adipisci dolores libero ad commodi? Magni corporis, vero laborum vitae consectetur pariatur veniam quae, a neque modi quos excepturi hic obcaecati non! adipisicing elit. Nesciunt, nostrum!
  </p>
  <div className="flex flex-col uppercase w-1/8 gap-5">
    <h1 className="font-bold"> Folow Links </h1>
    <NavLink to={"/"} className={({ isActive }) => (isActive ? 'text-orange-500 ' : 'text-white ') }>Home</NavLink>
      <NavLink to={"/about"} className={({ isActive }) => (isActive ? 'text-orange-500 ' : 'text-white ')}>About</NavLink>
      <NavLink to={"/contact"} className={({ isActive }) => (isActive ? 'text-orange-500 ' : 'text-white ')}>Contact US</NavLink>
      
  </div>
  <div className="flex flex-col uppercase w-1/8 gap-5">
    <h1 className="font-bold"> Folow Links </h1>
    <Link to={"/"} className= 'hover:text-orange-500  '><InstagramIcon/></Link>
      <Link to={"/"} className= 'hover:text-orange-500  '> <GitHubIcon/> </Link>
      <Link to={"/"} className='hover:text-orange-500  '> <FacebookIcon/></Link>
      
  </div>


</div>

  )
}
