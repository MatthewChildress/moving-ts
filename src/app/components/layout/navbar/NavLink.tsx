import Link from 'next/link';
import React from 'react';

interface INavLink {
    href: string;
    // figure out better type
    children: any;
}

const NavLink: React.FC<INavLink> = ({ href, children }) => {
  return (
    <Link href={href}>
        {children}
    </Link>
  )
}



export default NavLink
