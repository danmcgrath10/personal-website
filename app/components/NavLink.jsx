import Link from 'next/link'
import React from 'react'

const NavLink = ({href, title, onClick}) => {
  const handleClick = (e) => {
    onClick?.(e); // Call the passed onClick function if it exists
  };
  return (
    <Link
        href={href}
        legacyBehavior
        passHref
    >
        <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" onClick={handleClick}>{title}</a>
    </Link>
  )
}

export default NavLink