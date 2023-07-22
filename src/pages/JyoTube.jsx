import { RiRadioButtonFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import jyotube from "../assets/video-lib.png";

const JyoTube = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <img
          src={jyotube}
          alt="/"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">jyotube App</h2>
          <h3>React JS / Tailwind / TypeScript / Node / express / mongodb</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3 className="text-2xl">Key Features</h3>
          <p>
            <strong>User Authentication & Authorization:</strong>
            Ensured robust user authentication with secure password hashing,
            enabling users to create accounts and access personalized features.
          </p>
          <p>
            <strong>Search & Filter Videos:</strong>
            Incorporated a powerful search and filtering mechanism, enabling
            users to quickly find relevant videos based on titles, tags, or
            categories.
          </p>
          <p>
            <strong>Video Likes & Watch Later:</strong>
            Implemented a user-friendly video liking system, allowing users to
            express their preferences and save videos for future viewing in the
            Watch Later section.
          </p>
          <p>
            <strong>Playlist Management:</strong>
            Empowered users to create, manage, and organize personalized
            playlists for easy access to their favorite videos.
          </p>

          <p>
            <strong>History Page:</strong>
            Developed a dedicated history page, displaying users recently
            watched videos for convenient tracking and quick access to
            previously viewed content.
          </p>

          <Link to={`https://github.com/Jyotipal29/jyotube`}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link to={`https://jyo-tube.netlify.app/`}>
            <button className="px-8 py-2 mt-4">Live</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
            </div>
          </div>
        </div>
        <Link to="/projects">
          <p className=" cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default JyoTube;
