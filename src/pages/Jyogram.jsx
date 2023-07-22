import { RiRadioButtonFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import jyogram from "../assets/social.png";

const JyoTube = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <img
          src={jyogram}
          alt="/"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">jyogram App</h2>
          <h3>React JS / Node / express / mongodb</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3 className="text-2xl">Key Features</h3>
          <p>
            <strong>User Authentication & Authorization:</strong>
            Implemented a robust user authentication system, ensuring secure
            account creation and access to personalized features.
          </p>
          <p>
            <strong>Create, Update & Delete Posts:</strong>
            Empowered users to share their thoughts and experiences through
            creating, updating, and deleting posts, fostering an engaging social
            experience.
          </p>
          <p>
            <strong>Follow & Unfollow Users:</strong>
            Enabled users to connect with others by following or unfollowing
            them, thereby curating their own personalized feed.
          </p>
          <p>
            <strong> Like & Unlike Posts:</strong>
            Implemented a user-friendly liking system, allowing users to express
            appreciation for posts with a simple tap.
          </p>
          <p>
            <strong>Save & Unsave Posts: </strong>
            Provided users with the option to save posts for later viewing,
            creating a personal library of favorite content.
          </p>
          <p>
            <strong>Add & Delete Comments:</strong>
            Facilitated interactive discussions by enabling users to add
            comments to posts and remove them when needed.
          </p>
          <p>
            <strong>Edit Profile:</strong>
            Empowered users to manage and customize their profiles, showcasing
            their personalities and interests.
          </p>
          <Link to={`https://github.com/Jyotipal29/socials`}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link to={`https://jyoti-jyogram.netlify.app/`}>
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
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Expressjs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
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
