import React from 'react'

function ContactUs() {
  return (
        <section className="bg-white py-12" id="contact">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded shadow">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" className="w-full px-3 py-2 border rounded" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send</button>
            </form>
          </div>
        </section>
      )
}

export default ContactUs