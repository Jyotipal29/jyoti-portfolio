import { RiRadioButtonFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import beau from "../assets/beau.png";

const Beau = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <img
          src={beau}
          alt="/"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Beau</h2>
          <h3>React JS / Tailwind / Node / express / mongodb</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 space-y-4">
          <div>
            <h3 className="text-2xl">Key Features</h3>
            <p>
              Our real-world ecommerce project caters to genuine users, offering
              a seamless and secure shopping experience. The application
              encompasses a wide array of features to meet the diverse needs of
              customers and administrators
            </p>
          </div>

          <div>
            <h3 className="text-2xl">Customer Features</h3>
            <p>
              <strong>Product Sorting:</strong>
              Users can easily sort products by relevance, price, popularity,
              and other criteria to find desired items quickly.
            </p>
            <p>
              <strong> Shopping Cart & Wishlist:</strong>A user-friendly cart
              enables customers to add products for purchase, while the wishlist
              allows saving favorite items for future consideration
            </p>
            <p>
              <strong>Address Management:</strong>
              Users can manage multiple delivery addresses for smooth order
              processing and accurate shipments.
            </p>
            <p>
              <strong>User Profiles:</strong>
              Customers can maintain personalized profiles with order history,
              saved addresses, and wishlist items
            </p>
            <p>
              <strong>Secure Payment with Razorpay:</strong> Integrated Razorpay
              payment gateway ensures safe and hassle-free online transactions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl">Administrator Features</h3>
            <p>
              <strong>Authentication & Authorization:</strong>
              Role-based authentication ensures secure access control, and
              administrators have privileged access to manage the platform
            </p>
            <p>
              <strong>Admin Dashboard: </strong>A comprehensive dashboard
              empowers administrators to manage orders, products, and user
              accounts efficiently
            </p>
            <p>
              <strong>Order Management:</strong>
              Administrators can oversee and manage customer orders, ensuring
              timely processing and delivery.
            </p>
            <p>
              <strong> Product Management:</strong>
              The admin dashboard enables creating, updating, and deleting
              products, keeping the product catalog up-to-date.
            </p>
          </div>

          <Link to={`https://github.com/Jyotipal29/beau`}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link to={`https://beaufashion.in`}>
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
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongodb
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

export default Beau;
