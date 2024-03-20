// import vite from "/vite.svg";
// import menu from "/icons/menu.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RxReload } from "react-icons/rx";
import { HiMenuAlt2 } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="flex bg-[#F6F8FA] py-2 justify-between h-[10vh] gap-5 border-b dark:border-[#1F1B24] items-center">
      {/*  */}
      <div className="p-6 col-span-1 flex items-center">
        {/* <img src={menu} className="w-6 h-6 ml-3 mr-3" alt="menu button" /> */}
        <HiMenuAlt2 className="icons text-black mx-3"/>
        <h3 className="text-xl font-normal">
          INOTE
        </h3>
      </div>

      {/* search */}
      <div className=" rounded-full  flex-grow dmx-6 max-w-3xl bg-[#F6F8FA] dark:bg-[#1e1e1e]  flex items-center pl-3 search_container border">
        <span><IoIosSearch className="icons"/></span>
        <input
          placeholder="Search"
          className="rounded-md text text-[0.94rFem] font-[470] focus:border-black focus:outline-none focus:ring-0; py-2.5 px-2 w-full border-0 bg-transparent outline-none shadow-none"
        />
      </div>

      {/* user account */}
      <div className="col-span-1 flex justify-end items-center">
      <RxReload className="icons mx-2 font-extrabold"/>
        <IoSettingsOutline className="icons mx-2 font-extrabold" />
        <span className="rounded-full right-0 ml-auto mr-5 bg-purple-900 w-8 h-8 items-center font-semibold text-white text-lg">
          <center>CS</center>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
