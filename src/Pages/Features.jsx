import React from 'react'

function Features() {
  return (
        <section className="bg-white py-12" id="features">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose QuickRent?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="text-4xl mb-4">📱</i>
                <h3 className="text-xl font-semibold mb-2">Wide Variety of Gadgets</h3>
                <p>Choose from laptops, cameras, gaming consoles, and more.</p>
              </div>
              <div className="text-center">
                <i className="text-4xl mb-4">💰</i>
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p>Flexible plans to fit your budget.</p>
              </div>
              <div className="text-center">
                <i className="text-4xl mb-4">⚡</i>
                <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
                <p>Get your gadgets delivered at lightning speed.</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Features