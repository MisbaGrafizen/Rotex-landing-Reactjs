
import React, { useState, useRef, useEffect } from "react";
import {
  Modal as NextUIModal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../Public/imges/mainfolder/Logo-Rotex.png";
import { ApiPut } from "../../helper/axios";
import { motion } from "framer-motion";

export default function Header() {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState("number");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timer, setTimer] = useState(30);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const closeAndResetModal = () => {
    resetModal();
    setIsModalOpen(false);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setMobileNumber(value);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleOtpChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);
  };

  const sendOtp = async () => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!isTermsChecked) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    console.log('mobileNumber', mobileNumber)

    try {
      setLoading(true);
      const response = await axios.post(
        "https://server.grafizen.in/api/v2/rotex/auth/send-otp",
        {
          mobileNumber,
        }
      );
      console.log('response', response)
      setStep("otp");
    } catch (error) {
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };




  const resetModal = () => {
    setStep("number");
    setMobileNumber("");
    setOtp(new Array(6).fill(""));
    setIsTermsChecked(false);
    setName("");
    setEmail("");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const getLinkClass = (path) => {
    if (path === "/" && location.pathname === "/") {
      return "text-[#005c95]";
    } else if (path !== "/" && location.pathname.includes(path)) {
      return "text-[#005c95]";
    } else {
      return "text-[#000]";
    }
  };


  // const handleMyOrderClick = () => {
  //   navigate("/my-account"); // Navigate to orderList page
  // };

  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown); // Cleanup timer
    }
  }, [step, timer]);


  const handleMyProfileClick = () => {
    navigate("/my-account", { state: { selectedMenu: "account" } });
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      {/* <header className="md:w-[70%] w-[100%] flex md:border-b-[1.5px]o md:mt-[10px]  py- md:justify-between  rounded-[10px]  md:border-[1px] border-[#6c6c6c]  bg-white  lg:!w-[80%] duration-800 ease-in-out fixed z-[40] top-[-0px] left-0 right-0  !font-Montserrat rounded-b-[9px]  mx-auto shadow-md">
        

        <div className=" font-[400]  pl-[20px] hidden md:flex w-[50%] gap-[15px]">
          <a
            href="mailto:alnooraljadeed@gmail.com"
            className="text-[#000] flex items-center gap-[10px]"
          >
            <i className="fa-solid lg:text-[15px] xl:text-[17px] fa-envelope"></i>
            <p className="lg:text-[13px] xl:text-[13px] font-Monda font-[600]">
              info@rotexfans.com
            </p>
          </a>

          <a
            href="tel:+971543647527"
            className="text-[#000] flex items-center gap-[10px]"
          >
            <i className="fa-sharp fa-regular  lg:text-[13px] xl:text-[15px] fa-phone-volume"></i>
            <p className="lg:text-[13px] xl:text-[13px]  font-Monda font-[600]">
              +91 9510826982
            </p>
          </a>
        </div>

        <div className="w-[100%] items-center justify-between md:justify-end gap-[20px] flex">
          <div className="xl:text-[15px] lg:text-[13px] gap-[20px] pl-[20px] !font-Montserrat  flex font-[600]  justify-end   md36:hidden md:flex">
            <Link to={"/"}>
              <p
                className={`cursor-pointer  font-[500]  font-Monda  ${getLinkClass(
                  "/"
                )}`}
              >
                Home
              </p>
            </Link>
            <Link to={"/about-us"}>
              <p
                className={`cursor-pointer    font-Monda ${getLinkClass(
                  "/about-us"
                )}`}
              >
                About
              </p>
            </Link>
            <Link to={"/blogs"}>
              <p
                className={`cursor-pointer   font-Monda  ${getLinkClass(
                  "/blogs"
                )}`}
              >
                Blogs
              </p>
            </Link>
            <Link to={"/support"}>
              <p
                className={`cursor-pointer   font-Monda  ${getLinkClass(
                  "/support"
                )}`}
              >
                Support
              </p>
            </Link>
           
              <p  onClick={handleMyOrderClick}
                className={`cursor-pointer   font-Monda  ${getLinkClass(
                  "/my-acount"
                )}`}
              >
                My Orders
              </p>
    
            <Link to={"/contact-us"}>
              <p
                className={`cursor-pointer    font-Monda ${getLinkClass(
                  "/contact-us"
                )}`}
              >
                Contact Us
              </p>
            </Link>
          </div>

          <div
            className="w-[40px] px-[10px] py-[10px] ml-[20px] h-[33px] md:hidden flex flex-col gap-[3px] bg-[#fff] shadow-lg rounded-[5px] cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="bg-[#494949] h-[2px] w-[100%] rounded-[70px]"></div>
            <div className="bg-[#494949] h-[2px] w-[100%] rounded-[70px]"></div>
            <div className="bg-[#494949] h-[2px] w-[100%] rounded-[70px]"></div>
          </div>

          <div className="w-fit flex !font-lucida-bright-regular pr-[20px] items-center !h-[100%] md:top-[-2px] md150:top-[-2px] !border-l-0 pointer rounded-r-lg py-[10px] duration-500 ease-in-out">
            {!isLoggedIn ? (
              <div
                onClick={handleOpenModal}
                className="w-fit bg-[#fff] flex items-center"
              >
                <div className="cursor-pointer  anime-green-btn1  text-center justify-center text-[#fff] font-[500] flex w-[120px] rounded-[6px] items-center p-[6px] gap-[9px]">
                  <p className="fs-6 font-bold !font-Montserrat">My Account</p>
                </div>
              </div>
            ) : (
              <div
                onClick={handleMyProfileClick}
                className="w-fit bg-[#fff] flex items-center cursor-pointer"
              >
                <div className="cursor-pointer text-center   anime-green-btn1  justify-center text-[#fff] font-[500] flex w-[120px] rounded-[6px] h-[40px] items-center p-[6px] gap-[9px]">
                  <p className="fs-6 font-bold !font-Montserrat">My Profile</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="menu absolute gap-[10px] flex flex-col top-[50px] animtionmenu left-0 w-[150px] bg-white font-Montserrat font-[500] shadow-md p-4 rounded-b-[10px]"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <p
                className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass(
                  "/"
                )}`}
              >
                Home
              </p>
            </Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
              <p
                className={`cursor-pointer  font-Montserrat text-center font-[500] ${getLinkClass(
                  "/about-us"
                )}`}
              >
                About
              </p>
            </Link>
            <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>
              <p
                className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass(
                  "/blogs"
                )}`}
              >
                Blogs
              </p>
            </Link>
            <Link to="/my-orders" onClick={() => setIsMenuOpen(false)}>
              <p
                className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass(
                  "/my-orders"
                )}`}
              >
                My Orders
              </p>
            </Link>

            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              <p
                className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass(
                  "/contact-us"
                )}`}
              >
                Contact Us
              </p>
            </Link>
          </div>
        )}
      </header> */}

      <header className=" w-[100%] flex  py-[15px] px-[20px]  justify-between  md:py-[6px] md:justify-between     bg-white  lg:!w-[100%] duration-800 ease-in-out fixed z-[100] top-[-0px] left-0 right-0  !font-Montserrat  mx-auto shadow-md">
        {/* Header Content */}
        <div className=" flex justify-between mx-auto items-center h-[50px] w-[100%] 2xl:w-[1200px] md:w-[82%]">
          <div className=" font-[400] justify-between  pl-[20px] hidden md:flex w-[50%] gap-[5px]">
            <a
              href="mailto:info@rotexfans.com"
              className="text-[#000] flex items-center gap-[10px]"
            >
              <i className="fa-solid lg:text-[13px] xl:text-[15px] mt-[2px] fa-envelope"></i>
              <p className="lg:text-[14px] xl:text-[16px] font-Monda font-[600]">
                info@rotexfans.com
              </p>
            </a>
            <span className=" hidden md:flex w-[2px] h-[22px] bg-[#444]"></span>
            <a
              href="tel:+919510826982"
              className="text-[#000] flex items-center gap-[10px]"
            >
              <i className="fa-sharp fa-regular  lg:text-[13px] xl:text-[15px] fa-phone-volume"></i>
              <p className="lg:text-[13px] xl:text-[14px]  font-Monda font-[600]">
                +91 9510826982
              </p>
            </a>
          </div>
          <div className=" flex  md:hidden" onClick={handleHome}>
          {/* <video autoPlay muted className="w-[400px] h-auto">
              <source src={logo} type="video/webm" />
            </video> */}
            <img className=" flex w-[320px]" src={logo} />
          </div>
          <div className="w-[100%] items-center justify-between md:justify-end gap-[15px] flex">
            <div className="xl:text-[15px] lg:text-[13px] gap-[12px] pl-[10px] !font-Montserrat  flex font-[600]  justify-end  items-center  md36:hidden md:flex">
              <Link to={"/"}>
                <p
                  className={`cursor-pointer  font-[500]  font-Monda  ${getLinkClass(
                    "/"
                  )}`}
                >
                  Home
                </p>
              </Link>
              <span className=" hidden md:flex w-[2px] h-[22px] bg-[#444]"></span>
              <Link to={"/about-us"}>
                <p
                  className={`cursor-pointer    font-Monda ${getLinkClass(
                    "/about-us"
                  )}`}
                >
                  About
                </p>
              </Link>
              <span className=" hidden md:flex w-[2px] h-[22px] bg-[#444]"></span>
              <Link to={"/blogs"}>
                <p
                  className={`cursor-pointer   font-Monda  ${getLinkClass(
                    "/blogs"
                  )}`}
                >
                  Blogs
                </p>
              </Link>
              <span className=" hidden md:flex w-[2px] h-[22px] bg-[#444]"></span>
              <Link to={"/support"}>
                <p
                  className={`cursor-pointer   font-Monda  ${getLinkClass(
                    "/support"
                  )}`}
                >
                  Support
                </p>
              </Link>
              <span className=" hidden md:flex w-[2px] h-[22px] bg-[#444]"></span>
              {/* <p
                onClick={handleMyOrderClick}
                className={`cursor-pointer   font-Monda  ${getLinkClass(
                  "/my-acount"
                )}`}
              >
                My Orders
              </p> */}


              <Link to={"/all-products"}>
                <p
                  className={`cursor-pointer   font-Monda  ${getLinkClass(
                    "/all-products"
                  )}`}
                >
                  Products
                </p>
              </Link>
              <span className=" hidden md:flex w-[2px] h-[22px] bg-[#444]"></span>

              <Link to={"/contact-us"}>
                <p
                  className={`cursor-pointer    font-Monda ${getLinkClass(
                    "/contact-us"
                  )}`}
                >
                  Contact Us
                </p>
              </Link>
            </div>

          </div>

        </div>


      </header>


    </>
  );
}
