'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-green-50 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#103E13]">Contact Us</h2>
          <p className="mt-3 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            We'd love to hear from you! Reach out with questions, feedback, or partnership opportunities.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white p-6 rounded-xl shadow-md border border-[#BEE0C2]">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#103E13] text-white py-2 rounded-md hover:bg-green-900 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-[#103E13]">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="mb-4 text-gray-700">
              Have a question or need help? Feel free to reach out directly via email or phone.
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <span className="font-medium">Email:</span> support@zarephath.com
              </div>
              <div>
                <span className="font-medium">Phone:</span> +234 800 123 4567
              </div>
              <div>
                <span className="font-medium">Address:</span><br />
                123 Natural Foods Road,<br />
                Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
