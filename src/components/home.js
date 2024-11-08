import React from "react";
import { useState } from "react";

const Home = () => {
  const [showIcons, setShowIcons] = useState(true);

  const handleClick = () => {
    setShowIcons(!showIcons);
  };
  return (
    <div>
      <div className="flex cursor-pointer pl-10 h-8" onClick={handleClick}>
        <svg
          className={`transform transition-transform ${
            showIcons ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="1.6em"
          height="1.1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="black"
            fillRule="evenodd"
            d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xs mb-4">Quick Access</h2>
      </div>

      {showIcons && (
        <div className=" bg-gray-50 h-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pl-20 pr-20">
            <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
              <img
                src="/images/desktop.png"
                alt="Folder"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-medium text-md">Desktop</span>
                <span className="font-medium text-xs text-gray-500">
                  Stored Localy
                </span>
              </div>
            </div>
            <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
              <img
                src="/images/download2.png"
                alt="Folder"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-medium text-md">Downloads</span>
                <span className="font-medium text-xs text-gray-500">
                  Stored Localy
                </span>
              </div>
            </div>
            <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
              <img
                src="/images/document2.png"
                alt="Folder"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-medium text-md">Documents</span>
                <span className="font-medium text-xs text-gray-500">
                  Stored Localy
                </span>
              </div>
            </div>
            <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
              <img
                src="/images/picture2.png"
                alt="Folder"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-medium text-md">Pictures</span>
                <span className="font-medium text-xs text-gray-500">
                  Stored Localy
                </span>
              </div>
            </div>
            <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
              <img
                src="/images/music2.png"
                alt="Folder"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-medium text-md">Music</span>
                <span className="font-medium text-xs text-gray-500">
                  Stored Localy
                </span>
              </div>
            </div>
            <div className="p-4 gap-3 flex flex-row items-center cursor-pointer hover:bg-gray-100">
              <img
                src="/images/video2.png"
                alt="Folder"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-medium text-md">Videos</span>
                <span className="font-medium text-xs text-gray-500">
                  Stored Localy
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
