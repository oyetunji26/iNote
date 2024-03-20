import { FaRegStickyNote } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { BiSolidEdit } from "react-icons/bi"
import { MdOutlineArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const Sidebar = () => {

  const getYear = new Date().getFullYear();
  const NavLinks = [
    "Notes", 
    "Reminders",
    "Todo",
    "Edit Labels",
    "Archive",
    "Trash"
  ]
  return (
    <div className=" pt-5 pl-6 dark:text-[] h-full p-2">
      <ul className="text-[1.1rem] dark:text-neutral-300">
        {/* {NavLinks.map((link) => (
          <li key={link} className="my-3  text-[#234]">
            {link}
          </li>
        ))} */}

        <li className="my-3 flex items-center">
        <FaRegStickyNote className="sd_icons"/> Notes
        </li>
        <li className="my-3 flex items-center">
        <FaRegBell className="sd_icons"/> iRemind
        </li>
        <li className="my-3 flex items-center">
        <LuListTodo className="sd_icons"/> Todo
        </li>
        <li className="my-3 flex items-center">
        <BiSolidEdit className="sd_icons"/> Edit Labels
        </li>
        <li className="my-3 flex items-center">
        <MdOutlineArchive className="sd_icons"/> Archive 
        </li>
        <li className="my-3 flex items-center">
        <FaRegTrashAlt className="sd_icons"/> iCollab
        </li>
        <li className="my-3 flex items-center">
        <FaRegTrashAlt className="sd_icons"/> Trash
        </li>

        goke
      </ul>

      <em className="fixed bottom-0 dark:text-neutral-400">
        &copy; iNote {getYear}
      </em>
    </div>
  );
};

export default Sidebar;
