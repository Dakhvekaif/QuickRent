import React from 'react'

function GadgetListing() {
  return (
        <section className="bg-gray-100 py-12" id="gadgets">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Top Picks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Laptop", price: "$10/day", image: "https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-57805.jpg?t=st=1734280977~exp=1734284577~hmac=d5926a4965c55521ba5eed04f5059602a4108f656df49f6961b23e01d677d27c&w=740", features: ["Fast processors", "Lightweight"] },
                { name: "Camera", price: "$8/day", image: "https://img.freepik.com/free-photo/retro-camera_144627-12239.jpg?t=st=1734271171~exp=1734274771~hmac=1d45060dc8aa49d70f0720c72b7282435d024f6ea93be1fdfb33536cc228d1e1&w=740", features: ["High resolution", "Easy to use"] },
                { name: "Gaming Console", price: "$12/day", image: "https://img.freepik.com/premium-photo/virtual-reality-glasses-game-pad-isolated_127657-17427.jpg?w=826", features: ["Next-gen gaming", "Compact"] },
              ].map((gadget, index) => (
                <div key={index} className="text-center bg-white p-4 shadow rounded transition-transform transform hover:scale-105">
                  <img src={gadget.image} alt={gadget.name} className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">{gadget.name}</h3>
                  <p className="text-gray-600">{gadget.price}</p>
                  <ul className="text-sm text-gray-500 my-2">
                    {gadget.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                  <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 mt-2">Rent Now</button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">List Your Gadget</button>
            </div>
          </div>
        </section>
      
  )
}

export default GadgetListing