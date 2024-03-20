import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar, Nav, Feed } from "./components";
import { BiEdit } from "react-icons/bi";
// import ListCard from "./components/ListCard";

function App() {
  return (
    <>
      <Nav />
      <div className="md:grid md:grid-cols-7 max-h-screen overflow-hidden">
        {/* first grid */}
        <div className="col-span-1 min-h-full">
          <Sidebar />
          <div className="dark:bg-[#1E1E1E] off_white  rounded-full w-1/2 caret-zinc-500 font-light text-clip text-[#444] flex items-center">
          <input 
            type="text" 
            className=" px-5 py-2.5  w-full bg-transparent border-0 outline-none focus:outline-none focus:border-black"
            placeholder="Take a note..."
            name="" id="" 
          />
          {/* <RxPaperPlane className="icons mr-5 rounded-md"/> */}
          <BiEdit className="icons mx-5 text-right text-[#999]"/>
        </div>
        </div>

        {/* 2nd grid*/}

        <div className=" col-span-6 p-4 h-[88vh] overflow-y-scroll">
            <Routes>
              <Route path="/" exact element={<Feed/>}/>
              <Route path="/:id" element={<Feed />}/>
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
