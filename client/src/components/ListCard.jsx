import copy from "/icons/copy.svg";
import tick from "/icons/tick.svg";
import { useState } from "react";


const ListCard = ({ title, content, label }) => {
  const [copied, setCopied] = useState("");
  let titleToSlice = content;
  const handleCopy = () => {
    setCopied(content);
    navigator.clipboard.writeText(content);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div
      className="note_card"
      id={`label_${label}`}
    >
      <div className="flex justify-between items-start gap-5 ">
        <div className="flex-1">
          <h2 className="text-neutral-700  dark:text-neutral-200 ext-xl font-[475] font-med text-xl leading-[1.625rem]">{title}</h2>
        </div>
        {/* copy btn */}
        <div className="copy_btn" onClick={handleCopy}>
          <img src={
            copied == content ? `${tick}` : `${copy}`
          } className="" alt="Copy" />
        </div>

      </div>

      
      <div className="text-[15.7px] leading-[1.395rem] mt-2 text-neutral-600 dark:text-neutral-400">
        {/* {`${content}`.splice(0,100)} */}
        {/* {
          titleToSlice.length > 100 ? titleToSlice.slice(0,100) + "..." : titleToSlice
        } */}

        {titleToSlice}

      </div>
    </div>
  );
};

export default ListCard;