import { Link } from "react-router-dom";
import logo from "../../public/assets/images/logo.png";

const Home = () => {
  const items = [
    { id: 0, title: "signup page", link: "/signup" },
    { id: 1, title: "login page", link: "/login" },
    { id: 2, title: "forget Password", link: "/forgotPass" },
    { id: 3, title: "Reading Page", link: "/reading" },
    { id: 4, title: "Writer Profile", link: "/writerProfile" },
    { id: 5, title: "explore page", link: "/explore" },
    { id: 6, title: "landing Page", link: "/mainPage" },
  ];
  return (
    <div className="flex flex-col lg:p-6 p-4">
      <Link to="/mainPage" className=" md:ml-20 mt-6 ml-6">
        <img src={logo} alt="logo" />
      </Link>
      <div className="mt-10 lg:justify-center flex flex-col mx-auto font-Quicksand gap-3 justify-start">
        <h3 className="text-2xl md:text-3xl lg:text-5xl flex justify-center mx-auto"> Hello and welcome! 🎉</h3>
      
      <div className="md:w-1/2 w-full p-6 justify-center items-start font-semibold font-QuicksandLight flex flex-col mx-auto gap-3 ">
        <p>This site is still under development, and only a
        portion of its features, implemented by me, is currently displayed. 🚧✨
      </p>
        <p>We’ve used advanced technologies like React, TypeScript, Tailwind, and
        Zustand to create this amazing user experience. Our goal is to build a
        smooth and beautiful user interface that will surprise you even more in
        the future as we add more features! 🔧💻 
        </p>
        <p>Thank you for visiting us, and
        we hope you enjoy this initial view. We look forward to your feedback!
        🌟
        </p>
         <h4 className="md:text-xl text-lg font-Quicksand ">Stay with us! 💖</h4>
      </div>
      <div className="lg:flex gap-3 justify-center mx-auto mt-8 grid  grid-cols-2 md:grid-cols-3  ">
        {items.map(item =>{
            return (<Link to={item.link} key={item.id} className="px-4 py-2 border-2 border-[#4C1595] bg-[#ede8ff] hover:bg-[#4C1595] rounded-3xl text-stone-800 hover:text-stone-400 ">{item.title}</Link>)
        })}
      </div>
      </div>
    </div>
  );
};

export default Home;
