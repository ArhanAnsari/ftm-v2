import { useEffect, useState } from 'react';
import LOGO from '../assets/fullthrottle-logo.svg';
import { HashLink as Link } from "react-router-hash-link";
const ServicesNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Set default active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
      scrollPosition > 100 ? 'bg-slate-900/70 backdrop-blur-md' : 'bg-transparent'
    } `}>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className= "text-white text-2xl font-bold">
          <a id="home" href="/"><img src={LOGO} alt="" className='h-[30px] lg:h-[40px]'/></a>
        </div>
        <div className="hidden md:flex space-x-4 uppercase font-lato tracking-wide text-slate-100">
          <Link
            to="/#home"
            className={`text-white hover:border-b-2 hover:border-orange-500`}
          >
            Home
          </Link>
        </div>
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}  w-[40%] p-10 bg-slate-900/70 backdrop-blur-md flex flex-col justify-start items-center absolute top-5 right-0`}>
        <Link
          to="/#home"
          className={`block text-white py-2 px-4 hover:border-b hover:border-1 hover:border-orange-500`}
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default ServicesNavbar;

