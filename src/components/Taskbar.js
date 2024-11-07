import React, { useState } from "react";
import Image from "next/image";
import DateTime from "./DateTime";
import Windowcontent from "./Windowcontent";

const Taskbar = () => {
  const [isDropupOpen, setIsDropupOpen] = useState(false);

  const toggleDropup = () => {
    setIsDropupOpen(!isDropupOpen);
  };
  return (
    <div className="fixed bottom-0 w-full h-12 bg-slate-200 z-50 flex justify-between items-center px-2 shadow-md">
      <div className="flex items-center space-x-3 ">
        <Image
          className="ml-3"
          src={"/images/sun.png"}
          width={26}
          height={26}
          alt="sun"
        />
      </div>

      <div className="flex items-center space-x-5 ">
        {/* <span className="text-white cursor-pointer">
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
        </span> */}

        <span className="text-white cursor-pointer" onClick={toggleDropup}>
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
          <div className="absolute bottom-12 bg-slate-200 border space-x-5 w-[600] h-[540] bg-white text-black center justify-center rounded-lg p-3 shadow-lg">
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
              <h2 className="text-sm font-semibold mb-4">Pinned</h2>
              <div className="grid grid-cols-6 gap-4">
                <span className="text-center">
                  <Image
                    className="ml-3"
                    src={"/images/Recycle.png"}
                    width={35}
                    height={35}
                    alt="sun"
                  />
                  <span className="text-xs mr-3">Recycle</span>
                </span>
                <span>
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

                  <span className="text-xs">Edge</span>
                </span>
              </div>

              <div className="mt-20 pt-20 border-b-2">
                <h2 className="text-md font-semibold">Recommended</h2>
                <div className="space-y-3 mt-5">
                  <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
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

            <div className="mt-5 fixed flex justify-between items-center px-2">
              <div className="flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      fillRule="evenodd"
                      d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Profile</span>
              </div>

              <div className="flex item-right ml-[400]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6em"
                    height="1.6em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="m16.56 5.44l-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        )}
        <span className="text-white cursor-pointer">
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
        <span className="text-white cursor-pointer">
          <Image
            src={"/images/i1.jpg"}
            width={18}
            height={30}
            alt="Picture of the author"
          />
        </span>
        <span className="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
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

        <span className="text-white cursor-pointer">
          <Image
            src={"/images/i2.jpg"}
            width={25}
            height={30}
            alt="Picture of the author"
          />
        </span>

        <span className="text-white cursor-pointer">
          <Image
            src={"/images/i-3.jpg"}
            width={22}
            height={28}
            alt="Picture of the author"
          />
        </span>
      </div>

      <div className="flex items-center">
        <span className="text-xs mr-2">
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
        <span className="text-xs mr-5">
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
        <span className="text-xs flex-wrap center mr-2 cursor-pointer">
          <p>ENG</p>
          <p>US</p>
        </span>
        <span className="text-xs mr-1 cursor-pointer">
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

        <span className="text-xs mr-2">
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
        <span className="text-xs mr-4">
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
        <span className="text-xs">
          <DateTime />
        </span>

        <span className="text-xs mr-3">
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
  );
};

export default Taskbar;
