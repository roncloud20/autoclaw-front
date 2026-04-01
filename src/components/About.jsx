const About = () => {
  return (
    <div className="bg-gray-100">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#312e81] text-white">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Autoclaw is Nigeria’s dedicated marketplace for genuine auto parts. We make it easy to find, compare, and purchase the parts your vehicle needs - quickly, safely, and reliably.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Autoclaw, we focus solely on auto parts. We partner with trusted suppliers to ensure every product meets high standards of quality and durability. Our mission is to make buying auto parts simple, convenient, and trustworthy for every vehicle owner.
          </p>
        </div>

        <div className="h-64 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
            alt="car"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-indigo-700">
            <h3 className="text-3xl font-bold text-indigo-700">500+</h3>
            <p className="text-gray-500 mt-2">Auto Parts Listed</p>
          </div>

          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-orange-500">
            <h3 className="text-3xl font-bold text-orange-500">300+</h3>
            <p className="text-gray-500 mt-2">Satisfied Customers</p>
          </div>

          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-purple-700">
            <h3 className="text-3xl font-bold text-purple-700">24/7</h3>
            <p className="text-gray-500 mt-2">Customer Support</p>
          </div>

        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="font-semibold text-lg text-indigo-700">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To simplify the way Nigerians buy genuine auto parts by providing a trusted, reliable, and easy-to-use platform.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="font-semibold text-lg text-orange-500">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To be the leading online marketplace in Nigeria for all automotive parts and accessories.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <h3 className="font-semibold text-lg text-purple-700">Our Values</h3>
          <p className="text-gray-600 mt-2">
            Trust Quality | Customer First | Reliability | Innovation
          </p>
        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#312e81] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold">
          Ready to explore our products?
        </h2>
        <p className="mt-3 text-gray-300">
          Ready to find the perfect auto parts for your vehicle? Browse our extensive selection and shop with confidence today.
        </p>

        <button className="mt-6 bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105">
          Shop Now
        </button>
      </section>

    </div>
  );
};

export default About;