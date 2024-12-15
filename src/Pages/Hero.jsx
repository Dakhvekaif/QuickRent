import React from 'react'

function Hero() {
  return (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Your Gateway to Hassle-Free Gadget Rentals</h2>
              <p className="text-lg mb-6">Rent laptops, cameras, gaming consoles, and more at unbeatable prices.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explore Products</button>
            </div>
            <img src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?t=st=1734270895~exp=1734274495~hmac=86f221cb077fc834dd0944ded96691ee4963dd7ad972318c95257d7e6315a209&w=1060" alt="Gadget Rentals" className="md:w-1/2 mt-8 md:mt-0" />
          </div>
        </section>
      
  )
}

export default Hero