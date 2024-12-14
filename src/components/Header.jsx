import React from 'react'
import { useState } from 'react';
import perfil from '../assets/perfil.jpg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault(); // Previene comportamiento por defecto del enlace
    const targetId = e.currentTarget.getAttribute("href")?.substring(1); // Asegura que obtenga el href correctamente
    setIsOpen(false); // Cierra el menú móvil
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo a la izquierda */}
        <div className="flex items-center space-x-3">
          <img
            src={perfil}
            alt="Logotipo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Menú de navegación a la derecha */}
        <nav className="hidden md:flex space-x-6 ml-auto">
          <a href="#inicio" className="hover:text-gray-300">
            Inicio
          </a>
          <a href="#sobre mi" className="hover:text-gray-300">
            Sobre mi
          </a>
          <a href="#proyectos" className="hover:text-gray-300">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-gray-300">
            Contacto
          </a>
          <a
            href="/cv.pdf"
            download
            className="bg-white text-neutral-950 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 ml-6"
          >
            Descargar CV
          </a>
        </nav>

        
        <button
          className="block md:hidden relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-neutral-900  flex flex-col items-center justify-center overflow-hidden">
          <ul className="flex flex-col space-y-8 text-center">
            <li>
              <a
                href="#inicio"
                className="text-white text-xl hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobre mi"
                className="text-white text-xl hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="text-white text-xl hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-white text-xl hover:text-gray-300"
                onClick={handleLinkClick}
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="/cv.pdf"
                download
                className="block bg-white text-neutral-950 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Descargar CV
              </a>
            </li>
          </ul>

         
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú móvil"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>
      )}
    </header>
  );
 
}

export default Header
