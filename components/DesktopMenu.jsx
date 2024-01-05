import Link from 'next/link'
import React from 'react'

const DesktopMenu = () => {
  return (
    <ul className='gap-10 hidden md:flex'>
      <li className='nav_menu_li'>
        <span className="menu_span">#</span>
        <Link href={"/"} className='nav_menu_item'>home</Link>
      </li>
      <li className='nav_menu_li'>
        <span className="menu_span">#</span>
        <Link href={"/works"} className='nav_menu_item'>works</Link>
      </li>
      <li className='nav_menu_li'>
        <span className="menu_span">#</span>
        <Link href={"/about"} className='nav_menu_item'>about me</Link>
      </li>
      <li className='nav_menu_li'>
        <span className="menu_span">#</span>
        <Link href={"/contact"} className='nav_menu_item'>contact</Link>
      </li>
    </ul>
  )
}

export default DesktopMenu