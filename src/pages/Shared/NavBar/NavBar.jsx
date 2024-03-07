import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";



const NavBar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () =>
    logOut()
      .then(() => console.log("User logged out"))
      .catch(error => console.log(error))


  const navItems = <>

    <div className="md:flex justify-center space-x-6 items-center">
      <li className="text-[#050038]">Product</li>
      <li className="text-[#050038]">Solutions</li>
      <li className="text-[#050038]">Resources</li>
      <li className="text-[#050038]">Enterprise</li>
      <li className="text-[#050038]">Pricing</li>


    </div>

    {user &&
      <>


      </>
    }



  </>

  return (
    <div className="navbar   h-25 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>

        </div>
        <div className="flex flex-col md:flex-row w-10 md:w-auto ">
          <Link className="flex" to='/'>

            <img className="mr-4" src="/miro.png" alt="" />
          </Link>
        </div>

        <div className=" navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

      </div>





      <div className="navbar-end flex justify-end md:space-x-6 items-center ">
        <h2 className="text-[#050038] text-xs md:text-base">EN</h2>
        <h2 className="text-[#050038] text-xs md:text-base">Contact Sales</h2>
        <h2 className="text-[#050038] text-xs md:text-base">Login</h2>

        <button className="bg-[#4262FF] w-10 md:w-auto rounded-full p-2">Sign up Free</button>
      </div>


    </div>
  );
};

export default NavBar;