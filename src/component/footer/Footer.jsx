import { useState } from "react";
import { motion } from "framer-motion";
  import {
    MapPin,
    Phone,
    Mail,
    Instagram,
    Twitter,
    Facebook,
    Linkedin,
    Youtube,
    ChevronRight,
    Send,
  } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../../../Public/imges/mainfolder/Logo-Rotex.png";


export default function Footer() {
  const [emailFocus, setEmailFocus] = useState(false);
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/rotexfans" },
  
    { Icon: Facebook, href: "https://www.facebook.com/rotexfans/?_rdr" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/rotexindustries/" },
    { Icon: Youtube, href: "https://www.youtube.com/@rotexfans" },
  ];

  return (
    <footer className="bg-white border-[1px] md:h-[350px] h-[100%] text-gray-600 pt-[30px] pb-[] font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute md:bottom-[30px] bottom-[0px] md:flex hidden inset-0 z-0">
        <svg
          className="w-full absolute top-[-30px] h-[630px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="animeGradient1" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="var(--bs-baby-blue)" />
              <stop offset="100%" stopColor="var(--bs-dark-blue)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#animeGradient1)"
            fillOpacity="0.9"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="absolute top-[-28px] md:flex hidden inset-0 z-0">
        <svg
          className="w-full h-[600px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="animeGradient2" gradientTransform="rotate(30)">
              <stop offset="60%" stopColor="var(--bs-baby-blue)" />
              <stop offset="100%" stopColor="var(--bs-dark-blue)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#animeGradient2)"
            fillOpacity="0.4"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <h2 className="text-4xl font-bold font-Roboto text-[#005c95]">Rotex Fans</h2> */}
            <img className="flex w-[180px]" src={image1} />
            <p className="text-sm leading-relaxed font-Montserrat">
              Feel free to reach out if you want to collaborate with us, or
              simply have a call.
            </p>
            <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#005c95] bg-opacity-10 rounded-full text-[#005c95] hover:bg-opacity-20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <div className=" flex md:hidden justify-between relative md:gap-[40px] w-[100%] md:w-[600px]">
            <motion.div
              className="space-y-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#005c95]  font-Roboto">
                Quick Links
              </h3>
              <ul className="  ">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "https://rotexfans.com/about-us" },
                  { name: "Blogs", path: "https://rotexfans.com/blogs" },
                  { name: "Support", path: "https://rotexfans.com/support" },
                  { name: "My Orders", path: "https://rotexfans.com/my-account" },
                  { name: "Contact Us", path: "https://rotexfans.com/contact-us" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className=" w-fit"
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center space-x-2 text-gray-600 hover:text-[#005c95] transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-4 font-Montserrat transition-all duration-200 overflow-hidden">
                        <ChevronRight className="w-4 h-4 text-[#005c95]" />
                      </span>
                      <span className="border-b  font-Montserrat border-transparent group-hover:border-[#005c95] font-[400] transition-colors duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <span className=" flex w-[1px] h-[100%] bg-[#8e8b8b]"></span>
            <motion.div
              className="space-y-6 md:w-[100%] w-[180px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold font-Roboto text-[#005c95]">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#005c95] mt-1 flex-shrink-0" />
                  <span className="text-[15px] font-[400] font-Montserrat">
                    Plot No:40-41, Sub Plot : C/D/E, Power Industrial, Near
                    Kothariya Railway Station, Dhebar Road, Kothariya Solvant,
                    Rajkot, Gujarat-360002
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#005c95] flex-shrink-0" />
                  <span className="text-sm font-Montserrat">
                    {" "}
                    + 91 9510826982
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#005c95] flex-shrink-0" />
                  <span className="text-sm font-Montserrat">
                    info@rotexfans.com
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* responsive view  */}

          <motion.div
            className="space-y-6  flex-col md:flex hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-[#005c95]  font-Roboto">
              Quick Links
            </h3>
            <ul className="  ">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "https://rotexfans.com/about-us" },
                { name: "Blogs", path: "https://rotexfans.com/blogs" },
                { name: "Support", path: "https://rotexfans.com/support" },
                { name: "My Orders", path: "https://rotexfans.com/my-account" },
                { name: "Contact Us", path: "https://rotexfans.com/contact-us" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className=" w-fit"
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center space-x-2 text-gray-600 hover:text-[#005c95] transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-4 font-Montserrat transition-all duration-200 overflow-hidden">
                      <ChevronRight className="w-4 h-4 text-[#005c95]" />
                    </span>
                    <span className="border-b  font-Montserrat border-transparent group-hover:border-[#005c95] font-[400] transition-colors duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6 md:flex flex-col hidden md:w-[100%] w-[180px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold font-Roboto text-[#005c95]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#005c95] mt-1 flex-shrink-0" />
                <span className="text-[13px] font-[400] font-Montserrat">
                  Plot No:40-41, Sub Plot : C/D/E, Power Industrial, Near
                  Kothariya Railway Station, Dhebar Road, Kothariya Solvant,
                  Rajkot, Gujarat-360002
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#005c95] flex-shrink-0" />
                <span className="text-sm font-Montserrat">
                  {" "}
                  + 91 9510826982
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#005c95] flex-shrink-0" />
                <span className="text-sm font-Montserrat">
                  info@rotexfans.com
                </span>
              </li>
            </ul>
          </motion.div>
   
          {/* Newsletter Subscription */}
          <motion.div
            className="space-y-6 flex md:block flex-col  order-2  "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-[#005c95]  font-Roboto">
              Stay Updated
            </h3>
            <p className="text-sm font-Montserrat">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="mt-2 relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className={`w-full px-4 py-3 bg-[#005c95] font-Montserrat font-[500] bg-opacity-5 text-gray-600 rounded-lg focus:outline-none transition-all duration-200 ${
                  emailFocus ? "ring-2 ring-[#005c95] ring-opacity-50" : ""
                }`}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <button
                type="submit"
                className="absolute right-2 top-2 font-Montserrat p-2 bg-[#005c95] text-white rounded-md hover:bg-opacity-90 transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
          <div className="md:hidden flex  order-1">
            {[
              { name: "Privacy Policy", path: "https://rotexfans.com/privacy-policy" },
              { name: "Terms of Service", path: "https://rotexfans.com/terms-conditionds" },
              { name: "Cookie Policy", path: "https://rotexfans.com/cookie-policy" },
            ].map((item, index) => (
              <div
                key={index}
             
                className="w-fit md:text-[#fff] mx-auto"
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  className="md:text-sm text-[#000] text-[10px] flex gap-[10px] w-fit items-center mb-[0px] md:mb-0 md:text-[#fff] font-[500] font-Montserrat hover:text-[#005c95] transition-colors duration-200"
                >
                <div className="flex w-[6px] h-[6px] bg-black rounded-[20px]">

                </div>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      
        {/* Bottom Section */}
        <div className="md:mt-[50px] pb-[20px] md:pt-[10px] border-t-[1px] border-[#ffffff] border-opacity-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="md:text-[13px] relative pt-[10px] text-[13px] order-2 flex md:order-1 text-center font-[500] font-Montserrat md:text-[#ffffff]">
            © {new Date().getFullYear()} All Rights Reserved by Rotex Fans || Designed and Developed
            with ❤️ by Grafizen International LLC
          </p>

          {/* Additional Links */}
          <div className="md:flex hidden space-x-6 md:order-2 order-1">
            {[
              { name: "Privacy Policy", path: "https://rotexfans.com/privacy-policy" },
              { name: "Terms of Service", path: "https://rotexfans.com/terms-conditionds" },
              { name: "Cookie Policy", path: "https://rotexfans.com/cookie-policy" },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-fit md:text-[#fff]"
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  className="md:text-sm text-[#000] text-[10px] mb-[0px] md:mb-0 md:text-[#fff] font-[500] font-Montserrat hover:text-[#005c95] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </div>
        </div>
      </div>
      {/* <div className=" absolute bottom-[-20%] flex flex-col ">
        <div className=" md:bottom-0 bottom-[-600px] flex md:hidden inset-0 z-0">
          <svg
            className="w-full  absolute top-[10px] py-[50px] h-[600px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#005c95"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="  top-[px] flex  md:hidden  rotate- inset-0 z-0">
          <svg
            className="w-full h-[600px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#005c95"
              fillOpacity="0.4"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div> */}
    </footer>
  );
}
