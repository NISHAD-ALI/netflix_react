import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
       <img  className='logo'src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
       <ul className='list'>
        <li className='minList'>Home</li>
        <li className='minList'>TV Shows</li>
        <li className='minList'>Movies</li>
        <li className='minList'>News & Popular</li>
        <li className='minList'>List</li>
        <li className='minList'>Browse By Language</li>
       </ul>
       <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  )
}

export default Navbar
