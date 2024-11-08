import React, { useState } from "react";
import Image from "next/image";
import DateTime from "./DateTime";
import FileExplore from "./FileExplore";

const Taskbar = () => {
  const [isDropupOpen, setIsDropupOpen] = useState(false);
  const [isWidgetDropupOpen, setIsWidgetDropupOpen] = useState(false);
  const [brightness, setBrightness] = useState(50); 
  const [volume, setVolume] = useState(50);
  const [showMyComputer, setShowMyComputer] = useState(false);

  const openMyComputer = () => {
    setShowMyComputer(true); 
  };

  const closeMyComputer = () => {
    setShowMyComputer(false);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };
  

  const toggleDropup = () => {
    setIsDropupOpen(!isDropupOpen);
  };
  const toggleWidgetDropup = () => {
    setIsWidgetDropupOpen(!isWidgetDropupOpen);
  };

  return (
    <div className="fixed bottom-0 mt-2 left-0 w-full bg-slate-200 p-2 shadow-lg">
    <div className="grid grid-cols-3 items-center gap-4">
      
    <div className="flex space-x-3 items-center justify-start">
        <Image
          className="ml-3"
          src={"/images/sun.png"}
          width={26}
          height={26}
          alt="sun"
        />
      </div>
      <div className="flex space-x-3 items-center justify-center">
        <span className="text-white hover:bg-white pl-2 pr-2 cursor-pointer" onClick={toggleDropup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#36bdd9"
              d="M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z"
            />
          </svg>
        </span>

        {isDropupOpen && (
          <div className="absolute bottom-12 bg-gray-200 border-black-500 space-x-5 w-[600vm] h-[540vm]  text-black center justify-center rounded-lg p-5 shadow-lg">
            <div className="m-5">
              <div className="flex items-center bg-white rounded-full border border-gray-300 p-1 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-5 text-blue-400 ml-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 4a6 6 0 104.472 10.472l4.926 4.926a1 1 0 001.415-1.415l-4.926-4.926A6 6 0 0010 4zm-4 6a4 4 0 118 0 4 4 0 01-8 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for apps, settings, and documnets"
                  className="bg-transparent outline-none w-full ml-3 text-black placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4">
                <span>
                <h2 className="text-sm font-semibold mb-4">Pinned</h2>
                </span>
                <span></span>
                <span></span>

                <span className="">
                  <p className="flex p-1 pl-1 text-gray-600 text-xs bg-white border-2 rounded w-20 text-center">All apps
                  <svg className="ml-2 " xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.2em" viewBox="0 0 24 24"><path fill="black" fillRule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"/></svg>
                  </p>
                </span>

              </div>
              <div className="grid grid-cols-6 gap-4">
                <span className="text-center rounded hover:bg-white p-3">
                  <Image
                    className="ml-3"
                    src={"/images/Recycle.png"}
                    width={35}
                    height={35}
                    alt="sun"
                  />
                  <span className="text-xs">Recycle</span>
                </span>
                <span className="hover:bg-white justify-center rounded p-3 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.2em"
                    viewBox="0 0 256 256"
                  >
                    <defs>
                      <radialGradient
                        id="logosMicrosoftEdge0"
                        cx="161.83"
                        cy="788.401"
                        r="95.38"
                        gradientTransform="matrix(.9999 0 0 .9498 -4.622 -570.387)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".72" stopOpacity="0" />
                        <stop offset=".95" stopOpacity="0.53" />
                        <stop offset="1" />
                      </radialGradient>
                      <radialGradient
                        id="logosMicrosoftEdge1"
                        cx="-773.636"
                        cy="746.715"
                        r="143.24"
                        gradientTransform="matrix(.15 -.9898 .8 .12 -410.718 -656.341)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".76" stopOpacity="0" />
                        <stop offset=".95" stopOpacity="0.5" />
                        <stop offset="1" />
                      </radialGradient>
                      <radialGradient
                        id="logosMicrosoftEdge2"
                        cx="230.593"
                        cy="-106.038"
                        r="202.43"
                        gradientTransform="matrix(-.04 .9998 -2.1299 -.07998 -190.775 -191.635)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#35c1f1" />
                        <stop offset=".11" stopColor="#34c1ed" />
                        <stop offset=".23" stopColor="#2fc2df" />
                        <stop offset=".31" stopColor="#2bc3d2" />
                        <stop offset=".67" stopColor="#36c752" />
                      </radialGradient>
                      <radialGradient
                        id="logosMicrosoftEdge3"
                        cx="536.357"
                        cy="-117.703"
                        r="97.34"
                        gradientTransform="matrix(.28 .9598 -.78 .23 -1.928 -410.318)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#66eb6e" />
                        <stop offset="1" stopColor="#66eb6e" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient
                        id="logosMicrosoftEdge4"
                        x1="63.334"
                        x2="241.617"
                        y1="757.83"
                        y2="757.83"
                        gradientTransform="translate(-4.63 -580.81)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#0c59a4" />
                        <stop offset="1" stopColor="#114a8b" />
                      </linearGradient>
                      <linearGradient
                        id="logosMicrosoftEdge5"
                        x1="157.401"
                        x2="46.028"
                        y1="680.556"
                        y2="801.868"
                        gradientTransform="translate(-4.63 -580.81)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#1b9de2" />
                        <stop offset=".16" stopColor="#1595df" />
                        <stop offset=".67" stopColor="#0680d7" />
                        <stop offset="1" stopColor="#36bdd9" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#logosMicrosoftEdge4)"
                      d="M231 190.5c-3.4 1.8-6.9 3.4-10.5 4.7c-11.5 4.3-23.6 6.5-35.9 6.5c-47.3 0-88.5-32.5-88.5-74.3c.1-11.4 6.4-21.9 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5c0 73.9 68.1 81.4 82.8 81.4c7.9 0 19.8-2.3 27-4.6l1.3-.4c27.6-9.5 51-28.1 66.6-52.8c1.2-1.9.6-4.3-1.2-5.5c-1.3-.8-2.9-.9-4.2-.2"
                    />
                    <path
                      fill="url(#logosMicrosoftEdge0)"
                      d="M231 190.5c-3.4 1.8-6.9 3.4-10.5 4.7c-11.5 4.3-23.6 6.5-35.9 6.5c-47.3 0-88.5-32.5-88.5-74.3c.1-11.4 6.4-21.9 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5c0 73.9 68.1 81.4 82.8 81.4c7.9 0 19.8-2.3 27-4.6l1.3-.4c27.6-9.5 51-28.1 66.6-52.8c1.2-1.9.6-4.3-1.2-5.5c-1.3-.8-2.9-.9-4.2-.2"
                      opacity="0.35"
                    />
                    <path
                      fill="url(#logosMicrosoftEdge5)"
                      d="M105.7 241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5 17.6-112.8c3.8-2.7 7.7-5.2 11.9-7.2c3.1-1.5 8.4-4.1 15.5-4c10.1.1 19.6 4.9 25.7 13c4 5.4 6.3 11.9 6.4 18.7c0-.2 24.5-79.6-80-79.6c-43.9 0-80 41.7-80 78.2c-.2 19.3 4 38.5 12.1 56c27.6 58.8 94.8 87.6 156.4 67.1c-21.1 6.6-44.1 3.7-62.9-8.1"
                    />
                    <path
                      fill="url(#logosMicrosoftEdge1)"
                      d="M105.7 241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5 17.6-112.8c3.8-2.7 7.7-5.2 11.9-7.2c3.1-1.5 8.4-4.1 15.5-4c10.1.1 19.6 4.9 25.7 13c4 5.4 6.3 11.9 6.4 18.7c0-.2 24.5-79.6-80-79.6c-43.9 0-80 41.7-80 78.2c-.2 19.3 4 38.5 12.1 56c27.6 58.8 94.8 87.6 156.4 67.1c-21.1 6.6-44.1 3.7-62.9-8.1"
                      opacity="0.41"
                    />
                    <path
                      fill="url(#logosMicrosoftEdge2)"
                      d="M152.3 148.9c-.8 1-3.3 2.5-3.3 5.7c0 2.6 1.7 5.1 4.7 7.2c14.4 10 41.5 8.7 41.6 8.7c10.7 0 21.1-2.9 30.3-8.3c18.8-11 30.4-31.1 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C223.5 23.9 177.7 0 128 0C58 0 1 56.2 0 126.2c.5-36.5 36.8-66 80-66c3.5 0 23.5.3 42 10.1c16.3 8.6 24.9 18.9 30.8 29.2c6.2 10.7 7.3 24.1 7.3 29.5c0 5.3-2.7 13.3-7.8 19.9"
                    />
                    <path
                      fill="url(#logosMicrosoftEdge3)"
                      d="M152.3 148.9c-.8 1-3.3 2.5-3.3 5.7c0 2.6 1.7 5.1 4.7 7.2c14.4 10 41.5 8.7 41.6 8.7c10.7 0 21.1-2.9 30.3-8.3c18.8-11 30.4-31.1 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C223.5 23.9 177.7 0 128 0C58 0 1 56.2 0 126.2c.5-36.5 36.8-66 80-66c3.5 0 23.5.3 42 10.1c16.3 8.6 24.9 18.9 30.8 29.2c6.2 10.7 7.3 24.1 7.3 29.5c0 5.3-2.7 13.3-7.8 19.9"
                    />
                  </svg>

                  <span className="text-xs mr-3">Edge</span>
                </span>
              </div>

              <div className="mt-20 pt-20 border-b-2 border-gray-300">
              <div className="grid grid-cols-4">
                <span>
                <h2 className="text-sm font-semibold mb-4">Recommended</h2>
                </span>
                <span></span>
                <span></span>

                <span className="">
                  <p className="flex p-1 pl-1 text-gray-800 text-xs bg-white border-2 rounded w-16 text-center">More
                  <svg className="ml-2 " xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.2em" viewBox="0 0 24 24"><path fill="black" fillRule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"/></svg>
                  </p>
                </span>

              </div>
                <div className="space-y-3">
                  <div className="p-4 gap-3 flex flex-row items-center cursor-pointer">
                    <img
                      src="/images/document2.png"
                      alt="Folder"
                      className="h-12 w-12"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-md">Documents</span>
                      <span className="font-medium text-xs text-gray-500">
                        1 day ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>

            <div className="mt-5 flex justify-between items-center px-2">
              <div className="grid grid-cols-4 gap-20 ">
                <span className="flex items-center gap-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      fillRule="evenodd"
                      d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Profile</span>
                </span>
                <span></span>
                <span></span>
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6em"
                    height="1.6em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="m16.56 5.44l-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"
                    />
                  </svg>
                </span>


              </div>
             
            </div>
          </div>
        )}
        <span className="text-white cursor-pointer hover:bg-white pl-1 pr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="m21 19l-5.154-5.154a7 7 0 1 0-2 2L19 21zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5"
            />
          </svg>
        </span>
        <span className="text-white cursor-pointer hover:bg-white p-2">
          <Image
            src={"/images/i1.jpg"}
            width={20}
            height={30}
            alt="Picture of the author"
          />
        </span>
        <span className="text-white cursor-pointer hover:bg-white p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <defs>
              <radialGradient
                id="logosMicrosoftEdge0"
                cx="161.83"
                cy="788.401"
                r="95.38"
                gradientTransform="matrix(.9999 0 0 .9498 -4.622 -570.387)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".72" stopOpacity="0" />
                <stop offset=".95" stopOpacity="0.53" />
                <stop offset="1" />
              </radialGradient>
              <radialGradient
                id="logosMicrosoftEdge1"
                cx="-773.636"
                cy="746.715"
                r="143.24"
                gradientTransform="matrix(.15 -.9898 .8 .12 -410.718 -656.341)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".76" stopOpacity="0" />
                <stop offset=".95" stopOpacity="0.5" />
                <stop offset="1" />
              </radialGradient>
              <radialGradient
                id="logosMicrosoftEdge2"
                cx="230.593"
                cy="-106.038"
                r="202.43"
                gradientTransform="matrix(-.04 .9998 -2.1299 -.07998 -190.775 -191.635)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#35c1f1" />
                <stop offset=".11" stopColor="#34c1ed" />
                <stop offset=".23" stopColor="#2fc2df" />
                <stop offset=".31" stopColor="#2bc3d2" />
                <stop offset=".67" stopColor="#36c752" />
              </radialGradient>
              <radialGradient
                id="logosMicrosoftEdge3"
                cx="536.357"
                cy="-117.703"
                r="97.34"
                gradientTransform="matrix(.28 .9598 -.78 .23 -1.928 -410.318)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#66eb6e" />
                <stop offset="1" stopColor="#66eb6e" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="logosMicrosoftEdge4"
                x1="63.334"
                x2="241.617"
                y1="757.83"
                y2="757.83"
                gradientTransform="translate(-4.63 -580.81)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0c59a4" />
                <stop offset="1" stopColor="#114a8b" />
              </linearGradient>
              <linearGradient
                id="logosMicrosoftEdge5"
                x1="157.401"
                x2="46.028"
                y1="680.556"
                y2="801.868"
                gradientTransform="translate(-4.63 -580.81)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1b9de2" />
                <stop offset=".16" stopColor="#1595df" />
                <stop offset=".67" stopColor="#0680d7" />
                <stop offset="1" stopColor="#36bdd9" />
              </linearGradient>
            </defs>
            <path
              fill="url(#logosMicrosoftEdge4)"
              d="M231 190.5c-3.4 1.8-6.9 3.4-10.5 4.7c-11.5 4.3-23.6 6.5-35.9 6.5c-47.3 0-88.5-32.5-88.5-74.3c.1-11.4 6.4-21.9 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5c0 73.9 68.1 81.4 82.8 81.4c7.9 0 19.8-2.3 27-4.6l1.3-.4c27.6-9.5 51-28.1 66.6-52.8c1.2-1.9.6-4.3-1.2-5.5c-1.3-.8-2.9-.9-4.2-.2"
            />
            <path
              fill="url(#logosMicrosoftEdge0)"
              d="M231 190.5c-3.4 1.8-6.9 3.4-10.5 4.7c-11.5 4.3-23.6 6.5-35.9 6.5c-47.3 0-88.5-32.5-88.5-74.3c.1-11.4 6.4-21.9 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5c0 73.9 68.1 81.4 82.8 81.4c7.9 0 19.8-2.3 27-4.6l1.3-.4c27.6-9.5 51-28.1 66.6-52.8c1.2-1.9.6-4.3-1.2-5.5c-1.3-.8-2.9-.9-4.2-.2"
              opacity="0.35"
            />
            <path
              fill="url(#logosMicrosoftEdge5)"
              d="M105.7 241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5 17.6-112.8c3.8-2.7 7.7-5.2 11.9-7.2c3.1-1.5 8.4-4.1 15.5-4c10.1.1 19.6 4.9 25.7 13c4 5.4 6.3 11.9 6.4 18.7c0-.2 24.5-79.6-80-79.6c-43.9 0-80 41.7-80 78.2c-.2 19.3 4 38.5 12.1 56c27.6 58.8 94.8 87.6 156.4 67.1c-21.1 6.6-44.1 3.7-62.9-8.1"
            />
            <path
              fill="url(#logosMicrosoftEdge1)"
              d="M105.7 241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5 17.6-112.8c3.8-2.7 7.7-5.2 11.9-7.2c3.1-1.5 8.4-4.1 15.5-4c10.1.1 19.6 4.9 25.7 13c4 5.4 6.3 11.9 6.4 18.7c0-.2 24.5-79.6-80-79.6c-43.9 0-80 41.7-80 78.2c-.2 19.3 4 38.5 12.1 56c27.6 58.8 94.8 87.6 156.4 67.1c-21.1 6.6-44.1 3.7-62.9-8.1"
              opacity="0.41"
            />
            <path
              fill="url(#logosMicrosoftEdge2)"
              d="M152.3 148.9c-.8 1-3.3 2.5-3.3 5.7c0 2.6 1.7 5.1 4.7 7.2c14.4 10 41.5 8.7 41.6 8.7c10.7 0 21.1-2.9 30.3-8.3c18.8-11 30.4-31.1 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C223.5 23.9 177.7 0 128 0C58 0 1 56.2 0 126.2c.5-36.5 36.8-66 80-66c3.5 0 23.5.3 42 10.1c16.3 8.6 24.9 18.9 30.8 29.2c6.2 10.7 7.3 24.1 7.3 29.5c0 5.3-2.7 13.3-7.8 19.9"
            />
            <path
              fill="url(#logosMicrosoftEdge3)"
              d="M152.3 148.9c-.8 1-3.3 2.5-3.3 5.7c0 2.6 1.7 5.1 4.7 7.2c14.4 10 41.5 8.7 41.6 8.7c10.7 0 21.1-2.9 30.3-8.3c18.8-11 30.4-31.1 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C223.5 23.9 177.7 0 128 0C58 0 1 56.2 0 126.2c.5-36.5 36.8-66 80-66c3.5 0 23.5.3 42 10.1c16.3 8.6 24.9 18.9 30.8 29.2c6.2 10.7 7.3 24.1 7.3 29.5c0 5.3-2.7 13.3-7.8 19.9"
            />
          </svg>
        </span>

        <span className="text-white cursor-pointer hover:bg-white p-2">
      {showMyComputer && <FileExplore onClose={closeMyComputer} title={"This PC"} />} 

          <Image
            src={"/images/i2.jpg"}
            width={23}
            height={30}
            alt="Picture of the author"
            onClick={openMyComputer}
          />
        </span>

        <span className="text-white cursor-pointer hover:bg-white p-2">
          <Image
            src={"/images/i-3.jpg"}
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </span>
      </div>

      <div className="flex space-x-3 items-center justify-end">
        <span className="text-xs items-center hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="gray"
              d="m12 11.828l-2.828 2.829l-1.415-1.414L12 9l4.243 4.243l-1.415 1.414z"
            />
          </svg>
        </span>
        <span className="text-xs hover:bg-white p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="black"
              d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6C64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9c-27-3.4-52.5-15.2-72.1-34.5c-24-23.5-37.2-55.1-37.2-88.6c0-28 9.1-54.4 26.2-76.4c16.7-21.4 40.2-36.9 66.1-43.7l37.9-10l13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5c14.9-19.2 32.6-36 52.4-50c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50c15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6l37.8 10c54.2 14.4 92.1 63.7 92.1 120c0 33.6-13.2 65.1-37.2 88.6c-19.5 19.2-44.9 31.1-71.9 34.5c-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8c101.7-9.2 182.5-94 183.2-198.2c.6-93.4-62.7-172.1-148.6-194.9"
            />
            <path
              fill="black"
              d="M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6c25.4-25.5 60-39.8 96-39.8c36.2 0 70.3 14.1 96 39.8c1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 0 0 3 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6c-107.4 0-195 85.1-199.4 191.7c-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7M703 664h-47.9c-4.2 0-7.7 3.3-8 7.6c-1.8 33.5-15.7 64.7-39.5 88.6c-25.4 25.5-60 39.8-96 39.8c-36.2 0-70.3-14.1-96-39.8c-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 0 0-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6c107.4 0 195-85.1 199.4-191.7c.2-4.5-3.4-8.3-8-8.3"
            />
          </svg>
        </span>
        <span className="text-xs flex-wrap center mr-2 cursor-pointer hover:bg-white p-1">
          <p>ENG</p>
          <p>US</p>
        </span>
        <div className=" flex items-center hover:bg-white p-1">
        <span
          className="text-xs mr-1 cursor-pointer "
          onClick={toggleWidgetDropup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53l-.53-.53a.75.75 0 0 1 1.06 0"
            />
          </svg>
        </span>

        {isWidgetDropupOpen && (
          <div className="absolute right-2 bottom-14 bg-slate-200 w-[360] h-[400] text-black center justify-center border-4 rounded-lg p-3 shadow-lg">
            <div className="grid mt-3 grid-cols-3 gap-2 mb-4">
              <div className="text-center">
              <div className="flex">
                <div className=" flex rounded-s-md border-e-2 border-blue-500 justify-between bg-blue-600 p-3 text-center hover:bg-blue-800  cursor-pointer">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.8em"
                      height="1.6em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53l-.53-.53a.75.75 0 0 1 1.06 0"
                      />
                    </svg>
                  </span>
                </div>
                <div className=" flex  rounded-e-md justify-between bg-blue-600 p-3 text-center hover:bg-blue-800  cursor-pointer">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.6em"
                      height="1.6em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="white"
                        fillRule="evenodd"
                        d="m10.207 8l-3.854 3.854l-.707-.707L8.793 8L5.646 4.854l.707-.708z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <span className="text-xs">No Internet</span>

              </div>

              <div className="text-center">
              <div className="flex">
                <div className=" flex rounded-s-md border-2 border-gray-200 justify-between bg-white p-3 text-center  cursor-pointer">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="black" d="M11.5 21.308v-8.1l-5.1 5.1l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.1 5.1v-8.1h.5L17.008 7.7l-4.3 4.3l4.3 4.3L12 21.308zm1-10.516L15.592 7.7L12.5 4.62zm0 8.589l3.092-3.081l-3.092-3.092z"/></svg>
                  </span>
                </div>
                <div className=" flex  rounded-e-md border-e-2 border-gray-200 justify-between  p-3 text-center  cursor-pointer">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.6em"
                      height="1.6em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="black"
                        fillRule="evenodd"
                        d="m10.207 8l-3.854 3.854l-.707-.707L8.793 8L5.646 4.854l.707-.708z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <span className="text-xs">Bluetooth</span>
              </div>

              <div className="text-center">
              <div className="flex">
                <div className=" flex rounded-s-md border-2 border-gray-200 justify-between bg-white pl-8 pr-8 pt-3 pb-3 text-center  cursor-pointer">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 0 1-1.69-.9L193.55 67.56a9 9 0 0 0-6.66-3.56H160l73 161a2.35 2.35 0 0 1-2.26 3.35l-121.69 1.8a8.06 8.06 0 0 1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 0 1 0 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 0 1 6.6-3.1l120.68 2.7a2.7 2.7 0 0 1 2.43 3.74L160 448h26.64a9 9 0 0 0 6.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32"/></svg>
                  </span>
                </div>
              </div>
              <span className="text-xs">Airplane mode</span>
              </div>

              <div className="text-center">
              <div className="flex mt-3">
                <div className=" flex rounded-s-md border-2 border-gray-200 justify-between bg-white pl-8 pr-8 p-3 text-center  cursor-pointer">
                  <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.3em" viewBox="0 0 20 20"><path fill="black" d="M9 9.564c0-1.237-.618-3.037-1.834-5.276c-.208-.384-.753-.38-.987-.015q-.488.761-1.459 1.555l-.287.227l-.657.507c-1.344 1.082-1.874 2.043-1.757 3.464c.102 1.256.855 2.155 2.147 2.567q-.683.804-1.806 1.274a.59.59 0 0 0-.316.77c.124.3.465.442.762.318c1.425-.595 2.448-1.551 3.041-2.853q.334-.73.532-1.439l.033-.122l.08-.324l.053-.26l.032-.185l.052-.374q.05-.445.043-.88L6.669 8.5a.586.586 0 0 1 .573-.562a.586.586 0 0 1 .592.58q.027 1.72-.688 3.504l-.02.07a.36.36 0 0 0 .026.21c.08.18.29.26.467.178l.09-.045a1 1 0 0 0 .151-.107C8.422 11.838 9 10.801 9 9.564m6.994-2.21A2.5 2.5 0 0 0 13.498 5H9.534c-.313 0-.536.14-.536.498s.2.496.536.496h4.22l.12.006a1.25 1.25 0 0 1 1.13 1.244v5.506l-.006.12A1.25 1.25 0 0 1 13.754 14H5.998c-.301 0-.502.193-.502.495c0 .303.2.5.502.505h7.5l.147-.004a2.5 2.5 0 0 0 2.353-2.496v-.819h1.167l.112-.007a.83.83 0 0 0 .721-.826V9.182l-.006-.102a.834.834 0 0 0-.827-.732l-1.167-.015V7.5z"/></svg>             </span>
                </div>
              </div>

              <span className="text-xs">Battery saver</span>
              </div>

            <div className="text-center">
              <div className="flex mt-3">
                <div className=" flex rounded-s-md border-2 border-gray-200 justify-between bg-white pl-8 pr-8 pb-3 pt-3 text-center  cursor-pointer">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48"><path fill="black" d="M23.999 4.001c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m10.023 20.046c0 5.509-4.466 9.975-9.975 9.975c-5.51 0-9.976-4.466-9.976-9.975c0-5.51 4.466-9.976 9.976-9.976c5.509 0 9.975 4.466 9.975 9.976m8.728 1.203a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM23.999 39c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25M7.75 25.25a1.25 1.25 0 1 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM9.366 9.366a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 1 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768m1.768 29.269a1.25 1.25 0 1 1-1.768-1.768l2.5-2.5a1.25 1.25 0 1 1 1.768 1.768zm27.5-29.269a1.25 1.25 0 0 0-1.767 0l-2.5 2.5a1.25 1.25 0 0 0 1.768 1.768l2.5-2.5a1.25 1.25 0 0 0 0-1.768m-1.767 29.269a1.25 1.25 0 1 0 1.768-1.768l-2.5-2.5a1.25 1.25 0 1 0-1.768 1.768z"/></svg>              </span>
                </div>
              </div>
              <span className="text-xs">Night light</span>
              </div>

              <div className="text-center">
              <div className="flex mt-3">
                <div className=" flex rounded-s-md border-2 border-gray-200 justify-between bg-white pl-8 pr-8 pt-3 pb-3 text-center  cursor-pointer">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.2em" viewBox="0 0 48 48"><path fill="black" d="M20.002 10.5a4 4 0 0 0 2.226 3.586l.492.179a3.75 3.75 0 0 0 2.566 0l.491-.179a4 4 0 1 0-5.775-3.586m-2.194 1.977A6.5 6.5 0 0 1 24.003 4a6.5 6.5 0 0 1 6.194 8.477l6.1-2.22a4.25 4.25 0 0 1 2.908 7.988l-8.201 2.985v4.796c0 .353.067.703.2 1.03L35.69 38.16a4.25 4.25 0 1 1-7.882 3.185l-3.807-9.422l-3.807 9.421a4.25 4.25 0 0 1-7.882-3.184l4.49-11.112c.132-.327.2-.677.2-1.03V21.23L8.8 18.245a4.25 4.25 0 1 1 2.907-7.987zm3.444 3.914l-10.399-3.784a1.75 1.75 0 0 0-1.197 3.289l8.365 3.044a2.25 2.25 0 0 1 1.481 2.114v4.964c0 .674-.13 1.342-.382 1.967l-4.49 11.112a1.75 1.75 0 1 0 3.245 1.311l4.04-9.995c.758-1.877 3.414-1.877 4.172 0l4.04 9.995a1.75 1.75 0 0 0 3.245-1.311l-4.487-11.105a5.3 5.3 0 0 1-.382-1.966v-4.972c0-.945.592-1.79 1.481-2.114l8.365-3.044a1.75 1.75 0 1 0-1.197-3.29l-10.398 3.785a6.5 6.5 0 0 1-2.751.609a6.5 6.5 0 0 1-2.751-.609"/></svg>            </span>
                </div>
              </div>
              <span className="text-xs">Accessibility</span>
              </div>

            </div>

       <div className="w-80 p-4 rounded-lg flex items-center space-x-4">
      <div className="flex-shrink-0 text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05L5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636L16.95 7.05M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"/></svg>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={brightness}
        onChange={handleBrightnessChange}
        className="w-full h-1 rounded-lg appearance-none cursor-pointer accent-blue-500"
        style={{
          background: `linear-gradient(to right, #2a6edb ${brightness}%, gray ${brightness}%)`,
        }}
     />
    </div>

    <div className="w-80 mt-3 p-4 rounded-lg flex items-center space-x-4">
      <div className="flex-shrink-0 text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm13.98-8.933l.603.798a7 7 0 0 1-.003 8.44l-.603.798l-1.595-1.206l.603-.798a5 5 0 0 0 .002-6.03l-.603-.797zM18.186 9.09l.603.798a3.5 3.5 0 0 1-.001 4.22l-.604.798L16.59 13.7l.603-.797a1.5 1.5 0 0 0 .001-1.809l-.603-.798z"/></svg>     
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="w-full h-1 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #2a6edb ${volume}%, gray ${volume}%)`,
        }}
      />
    </div>

    <hr className="border-gray-300 mt-6"/>

    <div className=" flex mt-5 justify-between">

      <div className="flex gap-1">
        <span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.5em"
            viewBox="0 0 32 32"
          >
            <path
              fill="black"
              d="M7 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-5 .5A4.5 4.5 0 0 1 6.5 8h17a4.5 4.5 0 0 1 4.5 4.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H28v.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 2 19.5zM6.5 10A2.5 2.5 0 0 0 4 12.5v7A2.5 2.5 0 0 0 6.5 22h17a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5z"
            />
          </svg>
        </span>
        <span>
          <p className="text-sm mt-1">80%</p>
        </span>

      </div>
      <div className="flex gap-4 mt-1">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.8 20.199A2.73 2.73 0 0 1 6.869 21H3v-3.844c0-.724.288-1.419.8-1.931m5 4.974l-5-4.974m5 4.974l9.974-9.978M3.8 15.225l9.984-9.995m0 0l1.426-1.428a2.733 2.733 0 0 1 3.867-.001l1.126 1.127a2.733 2.733 0 0 1 0 3.865l-1.428 1.428M13.783 5.23l4.991 4.991"/></svg>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="m14.136 3.361l.995-.1zm-.152-.82L13.095 3zm.447 2.277l.795-.607zm.929.384l-.134-.99zm1.238-.82l.633.773zm.687-.473l.305.953zm.702.035l.398-.917zm.637.538l-.707.707zm.894.894l.707-.707zm.538.637l.917-.398zm.035.702l.952.304zm-.472.687l-.774-.633zm-.822 1.239l-.99-.134zm.385.928l-.606.795zm1.457.295l.099-.995zm.82.152l.458-.889zm.47.521l.93-.367zm.001 2.926l-.93-.368zm-.472.52l.459.89zm-.82.153l-.099-.995l-.033.003l-.032.006zm0 0l.1.995l.033-.003l.032-.005zm-1.456.295l-.606-.795zm-.384.929l-.991.133zm.821 1.238l-.774.633zm.472.687l-.953.304zm-.035.702l-.918-.398zm-.538.637l.707.707zm-.894.893l-.707-.707zm-.637.538l.398.918zm-.702.035l-.304.953zm-.687-.472l.633-.774l-.008-.006zm0 0l-.633.774l.008.007zm-1.238-.82l.133-.992zm-.929.384l.795.606zm-.295 1.456l-.995-.1zm-.152.82L13.095 21zm-.521.472l-.368-.93zm-2.926 0l.368-.93zm-.52-.472l.888-.458zm-.153-.82l-.995.1zm-.295-1.456l-.795.607zm-.928-.384l-.134-.992zm-1.239.82l-.633-.773l-.016.013l-.015.013zm0 0l.633.775l.016-.013l.015-.014zm-.687.473l.304.952zm-.702-.035l-.398.917zm-.637-.538l.707-.707zm-.894-.894l-.707.707zm-.538-.637l.918-.397zm-.035-.702l.953.305zm.472-.687l.774.633zm.821-1.239l.992.134zm-.384-.928l.606-.795zm-1.457-.295l-.1.995zm-.82-.152L3 13.095zm-.47-.521l-.93.367zm0-2.926l-.93-.368zm.47-.52l-.458-.89zm.82-.153v-1h-.05l-.049.005zm0 0v1h.05l.05-.005zm1.457-.295l-.606-.795zm.385-.928l.991-.134zM4.38 7.4l.774-.632zm-.472-.687l.953-.304zm.035-.702l-.917-.397zm.538-.637l.707.707zm.894-.893l-.707-.707zm.637-.538l-.398-.918zm.702-.035l.304-.953zm.687.472l.633-.774zm1.238.821l.134-.991zm.93-.385l-.796-.606zm.294-1.456l.995.1zm.152-.82l-.889-.458zm.521-.471l.368.93zm2.926 0l.367-.93zm1.668 1.192a9 9 0 0 0-.068-.575a2 2 0 0 0-.19-.604L13.095 3c-.023-.045-.018-.061-.005.018c.015.089.028.213.051.443zm.095.95c.063.082.043.119.008-.076c-.033-.186-.06-.447-.103-.874l-1.99.199c.04.394.074.748.125 1.03c.049.27.135.625.37.933zm0 0l-1.59 1.212a2 2 0 0 0 1.857.77zm.739-.605a13 13 0 0 1-.691.545c-.163.113-.151.073-.048.06l.267 1.982c.384-.052.696-.242.922-.4c.235-.162.51-.388.816-.639zm1.016-.65a2 2 0 0 0-.561.292c-.14.1-.297.229-.455.358l1.266 1.548c.179-.146.276-.225.35-.277c.065-.047.056-.031.009-.016zm1.404.07a2 2 0 0 0-1.404-.07l.609 1.905zm.946.748a9 9 0 0 0-.417-.402a2 2 0 0 0-.53-.346l-.794 1.835c-.046-.02-.053-.036.007.017c.068.06.157.147.32.31zm.894.894l-.894-.894l-1.414 1.414l.894.894zm.748.946a2 2 0 0 0-.346-.53a9 9 0 0 0-.402-.416L18.81 6.083c.163.163.25.252.31.32c.053.06.037.053.017.007zm.07 1.404a2 2 0 0 0-.07-1.404l-1.835.795zm-.65 1.016a9 9 0 0 0 .358-.455c.106-.148.22-.332.292-.561l-1.905-.609c.015-.047.03-.056-.016.01c-.052.073-.13.17-.277.349zm-.605.739c-.013.103-.053.115.06-.048c.107-.155.273-.358.545-.69l-1.548-1.267c-.25.306-.477.581-.64.816c-.157.226-.347.538-.399.922zm0 0l-1.982-.267a2 2 0 0 0 .77 1.857zm.95.095a13 13 0 0 1-.874-.103c-.195-.035-.158-.055-.076.008l-1.212 1.59c.308.235.662.321.934.37c.281.05.635.085 1.029.125zm1.179.258a2 2 0 0 0-.604-.19a9 9 0 0 0-.575-.068l-.199 1.99a9 9 0 0 1 .443.05c.08.014.063.019.018-.004zm.943 1.043a2 2 0 0 0-.943-1.043L21 10.906zm.14 1.198c0-.204 0-.407-.011-.579a2 2 0 0 0-.13-.62L21 10.906c-.018-.047-.012-.063-.006.017c.006.09.006.215.006.446zm0 1.264v-1.264h-2v1.264zm-.14 1.198c.088-.223.117-.437.129-.62c.011-.171.011-.374.011-.578h-2c0 .231 0 .356-.006.446c-.006.08-.012.064.006.017zm-.943 1.043a2 2 0 0 0 .943-1.043L21 13.095zm-1.179.258c.204-.02.405-.04.575-.068c.18-.03.39-.08.604-.19L21 13.095c.044-.023.061-.018-.018-.005a8 8 0 0 1-.443.051zm.065-.008l-.329-1.973zm-1.014.103c-.083.063-.12.043.075.008c.186-.033.447-.06.874-.103l-.199-1.99c-.393.04-.748.074-1.029.125c-.271.049-.626.135-.934.37zm0 0l-1.213-1.59a2 2 0 0 0-.77 1.857zm.604.738a13 13 0 0 1-.545-.69c-.113-.163-.073-.151-.06-.048l-1.981.267c.052.384.241.696.399.922c.163.235.389.51.639.816zm.65 1.016a2 2 0 0 0-.292-.56c-.1-.141-.229-.297-.358-.456l-1.548 1.267c.146.179.225.275.277.349c.047.065.032.057.016.01zm-.07 1.405a2 2 0 0 0 .07-1.405l-1.905.61zm-.748.946c.145-.145.288-.287.402-.417c.12-.138.25-.309.346-.53l-1.835-.795c.02-.046.036-.052-.017.008c-.06.068-.147.156-.31.32zm-.894.893l.894-.893l-1.414-1.414l-.894.893zm-.946.749a2 2 0 0 0 .53-.347c.129-.113.272-.257.416-.402l-1.414-1.414a8 8 0 0 1-.32.31c-.06.054-.053.038-.007.018zm-1.404.07a2 2 0 0 0 1.404-.07l-.795-1.835zm-1.016-.65c.158.129.314.258.455.358c.148.105.332.219.561.292l.609-1.905c.047.015.056.03-.01-.016a8 8 0 0 1-.349-.277zm.008.006l1.25-1.561zm-.747-.61c-.103-.015-.115-.055.048.058c.155.108.358.273.69.545l1.267-1.547c-.306-.251-.581-.477-.816-.64c-.226-.158-.538-.347-.922-.399zm0 0l.267-1.983a2 2 0 0 0-1.857.77zm-.095.949c.043-.427.07-.689.103-.874c.035-.195.055-.159-.008-.076l-1.59-1.213c-.235.308-.321.663-.37.934c-.05.282-.085.636-.125 1.03zm-.259 1.179c.11-.214.16-.424.19-.604c.03-.17.049-.371.07-.575l-1.99-.2a8 8 0 0 1-.052.444c-.013.08-.018.063.005.018zm-1.041.943a2 2 0 0 0 1.041-.943L13.095 21zm-1.2.14c.205 0 .408 0 .58-.011c.182-.012.396-.04.62-.13L13.095 21c.047-.018.063-.012-.017-.006a8 8 0 0 1-.446.006zm-1.263 0h1.264v-2h-1.264zm-1.198-.14c.223.088.437.117.62.129c.171.011.374.011.578.011v-2c-.231 0-.356 0-.446-.006c-.08-.006-.064-.012-.017.006zm-1.043-.943a2 2 0 0 0 1.043.943l.735-1.86zm-.258-1.179c.02.204.04.405.068.575c.03.18.08.39.19.604l1.78-.916c.023.044.018.061.005-.018a8 8 0 0 1-.051-.443zm-.095-.95c-.063-.082-.043-.12-.008.076c.033.185.06.447.103.874l1.99-.199c-.04-.394-.074-.748-.125-1.03c-.049-.27-.135-.625-.37-.933zm0 0l1.59-1.212a2 2 0 0 0-1.857-.77zm-.739.605c.333-.272.536-.438.691-.545c.163-.113.151-.073.048-.06l-.267-1.982c-.384.052-.696.242-.922.4c-.235.162-.51.388-.816.639zm.031-.027L6.737 18.87zm-1.047.677a2 2 0 0 0 .561-.292c.14-.1.297-.229.455-.358L6.77 18.845a8 8 0 0 1-.35.277c-.065.047-.056.032-.009.016zm-1.404-.07a2 2 0 0 0 1.404.07l-.609-1.905zm-.947-.748c.145.145.288.288.418.402c.137.12.308.25.53.346l.794-1.835c.046.02.053.036-.007-.017a8 8 0 0 1-.32-.31zm-.893-.894l.894.894l1.414-1.414l-.894-.894zm-.748-.946c.095.22.226.392.346.53c.114.129.257.272.402.416l1.414-1.414a8 8 0 0 1-.31-.32c-.053-.06-.037-.053-.017-.007zm-.07-1.404a2 2 0 0 0 .07 1.404l1.835-.795zm.65-1.016a9 9 0 0 0-.358.455a2 2 0 0 0-.292.561l1.905.609c-.016.047-.03.056.016-.01c.052-.073.13-.17.277-.349zm.604-.739c.014-.103.054-.115-.059.048c-.107.155-.273.358-.545.69l1.548 1.267c.25-.306.477-.581.64-.816c.157-.226.347-.538.399-.922zm0 0l1.983.267a2 2 0 0 0-.77-1.857zm-.95-.095c.428.043.69.07.875.103c.195.035.158.055.075-.008l1.213-1.59c-.308-.235-.662-.321-.934-.37c-.281-.05-.635-.085-1.03-.125zm-1.178-.258c.214.11.424.16.604.19c.17.028.371.048.575.068l.199-1.99a8 8 0 0 1-.443-.05c-.08-.014-.063-.019-.018.004zM1.14 13.83a2 2 0 0 0 .943 1.043L3 13.095zM1 12.632c0 .204 0 .407.011.579c.012.182.04.396.13.62L3 13.094c.018.047.012.063.007-.017A8 8 0 0 1 3 12.632zm0-1.264v1.264h2v-1.264zm.14-1.199a2 2 0 0 0-.129.62c-.012.172-.011.375-.011.58h2c0-.232 0-.357.007-.447c.005-.08.011-.064-.007-.017zm.943-1.041a2 2 0 0 0-.943 1.041l1.86.736zm1.179-.26c-.204.021-.405.04-.575.07c-.18.03-.39.08-.604.19L3 10.905c-.045.023-.061.018.018.005a8 8 0 0 1 .443-.051zm.1-.004v2zm0 0v2zm.85-.09c.083-.063.12-.043-.076-.008c-.185.033-.447.06-.874.103l.2 1.99c.393-.04.747-.074 1.029-.125c.271-.049.626-.135.934-.37zm0 0l1.213 1.59a2 2 0 0 0 .769-1.857zm-.605-.739c.272.332.438.536.546.691c.113.163.073.151.059.048l1.982-.267c-.052-.384-.241-.695-.399-.922c-.163-.235-.39-.51-.64-.816zm-.65-1.017c.073.23.186.413.292.562c.1.14.229.297.358.455L5.155 6.77a8 8 0 0 1-.277-.35c-.047-.065-.031-.057-.016-.01zm.07-1.403a2 2 0 0 0-.07 1.403l1.905-.608zm.748-.947c-.145.145-.288.287-.402.417a2 2 0 0 0-.346.53l1.835.795c-.02.046-.036.053.017-.008c.06-.068.147-.156.31-.32zm.894-.893l-.894.893L5.19 6.082l.894-.893zm0 0l1.414 1.414zm.946-.749a2 2 0 0 0-.53.347a9 9 0 0 0-.416.402l1.414 1.414c.163-.164.252-.251.32-.31c.06-.054.053-.038.007-.018zm1.404-.07a2 2 0 0 0-1.404.07l.795 1.835zm1.016.65c-.158-.129-.314-.257-.455-.357a2 2 0 0 0-.561-.293L6.41 4.861c-.047-.015-.056-.03.01.016c.073.053.17.131.349.278zm.739.605c.103.014.115.054-.048-.059a13 13 0 0 1-.69-.545L6.768 5.155c.306.25.581.476.816.64c.226.157.538.346.922.398zm0 0l-.267 1.982a2 2 0 0 0 1.857-.77zm.095-.95c-.043.428-.07.69-.103.875c-.035.195-.055.158.008.075l1.59 1.213c.235-.308.321-.663.37-.934c.05-.281.086-.636.125-1.03zm.258-1.178a2 2 0 0 0-.19.604c-.028.17-.048.371-.068.575l1.99.199a9 9 0 0 1 .05-.443c.014-.08.019-.062-.004-.018zm1.043-.943a2 2 0 0 0-1.043.943L10.905 3zM11.368 1c-.204 0-.407 0-.579.011a2 2 0 0 0-.62.129L10.906 3c-.047.018-.063.012.017.007c.09-.006.215-.007.446-.007zm1.264 0h-1.264v2h1.264zm1.198.14a2 2 0 0 0-.62-.129C13.04.999 12.837 1 12.633 1v2c.231 0 .356 0 .446.007c.08.005.064.011.017-.007zm1.043.943a2 2 0 0 0-1.043-.943L13.095 3zM15 12a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm-3 3a3 3 0 0 1 3-3V7a5 5 0 0 0-5 5zm3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5z"/></svg>
      </span>
      </div>

      </div>
          </div>
        )}

        <span className="text-xs mr-2" onClick={toggleWidgetDropup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.6em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="black" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 7.5S21 9 21 11.5s-1.5 4-1.5 4"
              />
              <path d="M2 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H4a2 2 0 0 1-2-2Z" />
            </g>
          </svg>
        </span>

        <span className="text-xs mr-2" onClick={toggleWidgetDropup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.6em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <path
              fill="black"
              d="M7 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-5 .5A4.5 4.5 0 0 1 6.5 8h17a4.5 4.5 0 0 1 4.5 4.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H28v.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 2 19.5zM6.5 10A2.5 2.5 0 0 0 4 12.5v7A2.5 2.5 0 0 0 6.5 22h17a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5z"
            />
          </svg>
        </span>
        </div>
        <div className=" flex items-right hover:bg-white p-1">

        <span className="text-xs">
          <DateTime />
        </span>

        <span className="text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="black" strokeWidth="1.5">
              <path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z" />
              <path
                strokeLinecap="round"
                d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"
              />
            </g>
          </svg>
        </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Taskbar;
