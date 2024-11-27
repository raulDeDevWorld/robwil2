"use client"
import React from 'react';
import { Globe2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f3f3f3] shadow-lg fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-[#FEAB5F]" />
            <span className="ml-2 text-xl font-bold text-gray-800">NativoES</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-[#FEAB5F]">Sobre nosotros</a>
            <a href="#profesores" className="text-gray-600 hover:text-[#FEAB5F]">Profesores</a>
            <a href="#servicios" className="text-gray-600 hover:text-[#FEAB5F]">Servicios</a>
            <a href="#precios" className="text-gray-600 hover:text-[#FEAB5F]">Precios</a>
            <a href="#resenas" className="text-gray-600 hover:text-[#FEAB5F]">Reseñas</a>
            <a href="#contactos" className="text-gray-600 hover:text-[#FEAB5F]">Contactos</a>

            <button className="bg-[#FEAB5F] text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Test de nivel
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-[#FEAB5F]">Home</a>
            <a href="#languages" className="block px-3 py-2 text-gray-600 hover:text-[#FEAB5F]">Languages</a>
            <a href="#methods" className="block px-3 py-2 text-gray-600 hover:text-[#FEAB5F]">Methods</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-[#FEAB5F]">Testimonials</a>
            <button className="w-full text-left px-3 py-2 bg-[#FEAB5F] text-white rounded-md hover:bg-blue-700">
              Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}