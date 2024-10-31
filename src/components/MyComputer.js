import { useState } from "react";
import Image from "next/image";
import { Topbar1 } from "./Topbar1";

export default function MyComputer({ onClose }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <div
      className={`fixed w-full h-${
        isMinimized ? "15" : "90"
      } bottom-12 top-0 bg-white p-4 z-50 border`}
    >
      <div className="flex justify-between items-center bg-slate-200 border-b ">
        <div className="bg-gray-200 w-52 p-3 top-0 rounded ">
        <h2 className="flex inline gap-2 text-sm font-bold">
        <Image
            src={"/images/d1.png"}
            width={16}
            height={5}
            alt="computer"
          />
            This PC
            </h2>
            </div>
        <div className="flex space-x-2">
          <button
            className="hover:bg-slate-300 hover:text-white w-10 h-10 flex items-center justify-center"
            onClick={handleMinimize}
            title="Minimize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path fill="black" d="M6.502 11h11v2h-11z" />
            </svg>
          </button>
          <button className="hover:bg-slate-300 hover:text-white w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"
              />
            </svg>
          </button>
          <button
            className="hover:bg-red-500 hover:text-white w-10 h-10 flex items-center justify-center"
            onClick={onClose}
            title="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 7l10 10M7 17L17 7"
              />
            </svg>{" "}
          </button>
        </div>
      </div>

      {/* {!isMinimized && (
        <div className="mt-4">
          <p>Your files and folders go here.</p>
        </div>
      )} */}

      <Topbar1/>
    </div>
  );
}
