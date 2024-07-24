'use client'
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/productos">Productos</Link></li>
        <li 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          onClick={closeDropdown}
        >
          Servicios
          {showDropdown && (
            <ul className="dropdown">
              <li><Link href="/servicios/servicio1">Servicio 1</Link></li>
              <li><Link href="/servicios/servicio2">Servicio 2</Link></li>
              <li><Link href="/servicios/servicio3">Servicio 3</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
