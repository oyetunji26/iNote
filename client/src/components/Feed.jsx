import React from "react";
import ListCard from "./ListCard";
import { RxPaperPlane } from "react-icons/rx";
import { BiEdit } from "react-icons/bi";

const SearchCardList = ({ data, handleTagClick }) => {
  return <div className="mt-16 prompt_layout"></div>;
};

const Feed = () => {
  const dataBug = [
    {
      title: "Greatness by becoming",
      content:"illo, et repellendus porro provident libero accusantium, odit fuga",
    },
  ];
  return (
    <div className="jusy px-6">
      {/* <div className="bg-slate-600 justify-evenly my-8 grid">
        <p className="justify-center">ghjkml</p>
      </div> */}
      <div className="mt-4 flex items-center justify-center">

        <div className="ark:bg-[#1E1E1E] off_white  rounded-full w-1/2 caret-zinc-500 font-light text-clip text-[#444] flex items-center">
          <input 
            type="text" 
            className=" px-5 py-2.5  w-full bg-transparent border-0 outline-none focus:outline-none focus:border-black"
          // className="py-1.5 shadow-lg border placeholder-black rounded w-1/2 px-2 text-lg"
            placeholder="Take a note..."
            name="" id="" 
          />
          {/* <RxPaperPlane className="icons mr-5 rounded-md"/> */}
          <BiEdit className="icons mx-5 text-right text-[#999]"/>
        </div>
      </div>

      <span className="text-[#888] my-2">Note</span>

      {/* notes */}
      <div className="note_layout">
        <ListCard title={dataBug[0].title} content=" 
        lorem ipsumorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi dolor est ipsum? Non, consequatur voluptas. Aliquam voluptates officiis explicabo, blanditiis illo, et repellendus  orem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi dolor est ipsum? Non, consequatur voluptas. Aliquam voluptates officiis explicabo, blanditiis illo, et repellendus porro provident libero accusantium, odit fugaporro provident libero accusantium, odit fuga
        " label="work"
         />
        <ListCard title="2 God is good" content={dataBug[0].content}/>
        <ListCard title={dataBug[0].title} content={dataBug[0].content} label="school"/>
        <ListCard title="4 help from God" content={dataBug[0].content}/>
        <ListCard title="5 The cynosure of all eyes topic by Ceo Engr Olagoke Oyetunji Emmanuel" content={dataBug[0].content}/>
        <ListCard title={dataBug[0].title} content={dataBug[0].content}/>

        <ListCard title="7. God is good" content={dataBug[0].content}/>
        <ListCard title={dataBug[0].title} content={dataBug[0].content} label="school"/>
        <ListCard title="9. help from God" content={dataBug[0].content}/>
        <ListCard title="10. The cynosure of all eyes topic by Ceo Engr Olagoke Oyetunji Emmanuel" content={dataBug[0].content}/>
        <ListCard title="11. Goke Oye" content={dataBug[0].content}/>

        
      </div>
    </div>
  );
};

export default Feed;
