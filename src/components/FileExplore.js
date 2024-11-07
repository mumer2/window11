import { useState } from "react";
import Image from "next/image";
import { Topbar2 } from "./Topbar2";
import Topbar1 from "./Topbar1";
import Explore from "./Explore";

export default function FileExplore({ onClose }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <div
      className={`fixed w-full h-${
        isMinimized ? "15" : "90"
      } bottom-12 top-0 bg-white right-0 text-black z-50 border`}
    >
      <div className="flex justify-between items-center bg-slate-200 border-b ">
        <div className="bg-white ml-3 w-52 p-3 top-0 rounded ">
        <h2 className="flex inline gap-2 text-sm font-bold">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z" />
                <path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z" />
                <path
                  fill="#b71c1c"
                  d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"
                />
                <path fill="#d84315" d="M18 28h12v16H18z" />
                <path fill="#01579b" d="M21 17h6v6h-6z" />
                <path
                  fill="#ff8a65"
                  d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"
                />
              </svg>
            Home
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

      <Topbar1 title={"Home"}/>

      <Topbar2/>
      
      <Explore/>
    </div>
  );
}
