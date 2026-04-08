import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        
        {/* HERO SECTION - Same style as About Us */}
        <section className="text-center py-20 px-6 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#312e81] text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Have questions about auto parts? Need help finding the right part for your vehicle? 
            We're here to help. Reach out to us anytime.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">

            {/* CONTACT FORM */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="+234 801 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                    <option value="">Select a subject</option>
                    <option value="inquiry">Product Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="complaint">Complaint</option>
                    <option value="part-request">Request a Part</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-y"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* CONTACT INFORMATION & MAP */}
            <div className="space-y-8">

              {/* Contact Details */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Our Address</p>
                      <p className="text-gray-600 mt-1">
                       148/150 Bode Thomas St, Surulere,<br />
                       Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600 mt-1">+234 913 464 9416</p>
                      <p className="text-gray-600">+234 919 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600 mt-1">support@autoclaw.ng</p>
                      <p className="text-gray-600">sales@autoclaw.ng</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      🕒
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Business Hours</p>
                      <p className="text-gray-600 mt-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links / Support */}
              <div className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Need Help Fast?</h3>
                <p className="mb-6 text-indigo-100">
                  Our support team is ready to assist you with part identification, 
                  compatibility checks, and order issues.
                </p>
                <a 
                  href="tel:+2348034567890"
                  className="block bg-white text-indigo-700 text-center font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition duration-300"
                >
                  Call Support Now
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* STATS BAR - Matching your About Us style */}
        <section className="py-12 px-6 bg-white border-t border-b">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-indigo-700">24/7</h3>
              <p className="text-gray-500 mt-2">Email Support</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">2hrs</h3>
              <p className="text-gray-500 mt-2">Average Response Time</p>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-purple-700">100%</h3>
              <p className="text-gray-500 mt-2">Genuine Parts Guarantee</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION - Same gradient as About Us */}
        <section className="bg-gradient-to-r from-[#0f172a] to-[#312e81] text-white text-center py-16 px-6">
          <h2 className="text-3xl font-bold">Still have questions?</h2>
          <p className="mt-3 text-gray-300 max-w-md mx-auto">
            Our team of auto parts specialists is ready to help you find exactly what you need.
          </p>
          <button className="mt-8 bg-orange-500 px-10 py-4 rounded-xl font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105">
            Browse Our Catalog
          </button>
        </section>

      </div>
    </>
  );
};

export default Contact;