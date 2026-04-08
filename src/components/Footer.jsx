import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#312e81] text-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">Autoclaw</h2>
          <p className="mt-4 text-sm text-gray-400">
            Nigeria’s trusted marketplace for genuine auto parts.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 transition cursor-pointer">Home</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Shop</li>
            <li className="hover:text-orange-400 transition cursor-pointer">About</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 transition cursor-pointer">Help Center</li>
            <li className="hover:text-orange-400 transition cursor-pointer">FAQs</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Terms</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">support@autoclaw.com</p>
          <p className="text-sm mt-2 text-gray-400">+234 800 000 0000</p>

          {/* SOCIALS */}
          <div className="flex space-x-3 mt-5">

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 cursor-pointer">
              <FaFacebookF className="text-sm" />
            </div>

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 cursor-pointer">
              <FaTwitter className="text-sm" />
            </div>

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 cursor-pointer">
              <FaInstagram className="text-sm" />
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Autoclaw. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;