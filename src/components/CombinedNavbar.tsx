import { useState} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from '../../public/assets/images/logo.png'
const CombinedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); 
 
  return (
    <div className="flex w-full h-auto justify-center items-center mx-auto">
    <nav className="border border-gray-200 p-4 m-4 rounded-[10px] dark:bg-stone-900 dark:text-white transition-colors duration-300  mx-auto flex w-full lg:w-[80rem] left-auto right-auto lg:absolute lg:top-4 top-0 dark:border-stone-900 ">
      <div className="container mx-auto flex justify-between items-center space-x-6">

        <div className="flex items-center space-x-6">
       
          <Link to='/'><img src={logo} alt="logo"/></Link>


          <div className="hidden lg:flex space-x-6 relative">
            <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              Community
            </a>

    
            <div
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white flex items-center space-x-2 relative cursor-pointer"
            >
              <Link to='/explore' className="align-middle mr-4">Explore</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>


              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-[500px] bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6 z-50"
                  style={{ top: "100%", left: "0" }}
                >
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md">
                    <h4 className="font-bold text-lg mr-4">Crime</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Stories centered around crime, investigation, and suspense.
                    </p>
                  </div>
                  <div className="p-4 hover:bg-gray-50 mr-4 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md">
                    <h4 className="font-bold text-lg mr-4">Romance</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Stories centered around romance and love.
                    </p>
                  </div>
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md">
                    <h4 className="font-bold text-lg">Adventure</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Exciting stories filled with action and exploration.
                    </p>
                  </div>
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-md">
                    <h4 className="font-bold text-lg">Mystery</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Puzzling stories that engage the mind.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              Create
            </a>
          </div>
        </div>


        <div className="hidden lg:flex items-center space-x-6 mr-4">
 
          <div className="flex items-center border border-gray-100 dark:border-gray-600 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="enter genre, author..."
              className="w-full pl-2 text-sm text-stone-800 dark:text-gray-300 focus:outline-none bg-transparent"
            />
          </div>


          <Link to='/login' className="text-gray-700 mr-4 hover:text-black border-purple-600 border-2 dark:border-gray-500 rounded-md py-1 px-4 dark:text-gray-300 dark:hover:text-white">
            Login
          </Link>

          <Link to="/signup" className="bg-purple-600 mr-4 text-white px-4 py-2 rounded-[10px] hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
            Signup
          </Link>
        </div>

    


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"}
            />
          </svg>
        </button>
      </div>


      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="lg:hidden mt-4"
        >
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-700 dark:text-gray-300 dark:hover:text-white">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 dark:text-gray-300 dark:hover:text-white">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 dark:text-gray-300 dark:hover:text-white">
                Create
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
    </div>
  );
};

export default CombinedNavbar;
