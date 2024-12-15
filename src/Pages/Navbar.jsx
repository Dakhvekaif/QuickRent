import React from 'react'

function Navbar() {
  return (
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">QuickRent</h1>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline ">Home</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#gadgets" className="hover:underline">Gadgets</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </nav>  
  )
}

export default Navbar