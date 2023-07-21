import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im <span className="text-[#5651e5]">Jyoti</span>
          </h1>
          <h1 className="py-2 text-gray-600">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            aliquam, placeat harum, alias perspiciatis possimus debitis eveniet
            ipsa ea quam voluptas pariatur adipisci modi rerum expedita, ab
            numquam at minima. Omnis deserunt quasi aliquam explicabo minima
            nostrum dolorem soluta placeat praesentium? Maiores voluptas eveniet
            aliquam ut amet quos harum inventore!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://www.linkedin.com/in/jyoti29/`}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://github.com/Jyotipal29`}>
                <AiFillGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://twitter.com/jyotipal0129`}>
                <AiOutlineTwitter />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link to={`https://www.instagram.com/jyoticodes/`}>
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
