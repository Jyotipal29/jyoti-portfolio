import react from "../assets/react-png-removebg-preview.png";
import js from "../assets/js-png-removebg-preview.png";
import next from "../assets/nextjs-png-removebg-preview.png";
import typescript from "../assets/typecsript-png-removebg-preview.png";
import tailwind from "../assets/tailwind-png-removebg-preview.png";
import sass from "../assets/sass-png-removebg-preview.png";
import html from "../assets/html-png-removebg-preview.png";
import css from "../assets/css-png-removebg-preview.png";
import node from "../assets/nodejs-png-removebg-preview.png";
import ex from "../assets/ex-png-removebg-preview.png";
import mongo from "../assets/mongo-png-removebg-preview.png";
import git from "../assets/git-png-removebg-preview.png";
import github from "../assets/github-png-removebg-preview.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2>What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={react}
                  className=" w-[64px] h-[64px] object-contain "
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={js} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={typescript}
                  className=" w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TYPESCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={next} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={html} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={tailwind}
                  className=" w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind Css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={sass} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sass</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={node} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ex} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Expressjs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={css} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={git} className=" w-[64px] h-[64px] object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GIT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={github}
                  className=" w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src={mongo}
                  className=" w-[64px] h-[64px] object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDb</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
