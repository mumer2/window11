import React from "react";
import { useState } from "react";
export const Topbar2 = () => {

  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [isViewDropdownOpen, setViewDropdownOpen] = useState(false);

  const toggleSortDropdown = () => {
    setSortDropdownOpen(!isSortDropdownOpen);
    setViewDropdownOpen(false); 
  };

  const toggleViewDropdown = () => {
    setViewDropdownOpen(!isViewDropdownOpen);
    setSortDropdownOpen(false); 
  };
  return (
    <div>
      <div className="fixed mt-12 h-12 flex justify-between cursor-pointer items-center w-full border-b-2 border-slate-300">
        <div className="flex items-center space-x-5 ">
          <span className="opacity-80 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="1.6em"
              viewBox="0 0 50 50"
            >
              <path
              className="opacity-25"
                fill="gary"
                d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
              />
              <path fill="blue" d="M16 24h18v2H16z" />
              <path fill="blue" d="M24 16h2v18h-2z" />
            </svg>
          </span>

          <span className="opacity-30 ">
            <p className="flex text-sm">New
            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill="black" fillRule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clipRule="evenodd"/></svg>
            </p>
          </span>

          <span className="opacity-30 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 20 20">
          <path fill="black" d="M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636zM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4M4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544z"/></svg>
          </span>

          <span className="opacity-30 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g className="copy-outline"><g fill="black" fillRule="evenodd" className="Vector" clipRule="evenodd"><path d="M2 11.667a3.4 3.4 0 0 1 3.4-3.4h2.205v2H5.4a1.4 1.4 0 0 0-1.4 1.4v7.2a1.4 1.4 0 0 0 1.4 1.4h7.2a1.4 1.4 0 0 0 1.4-1.4v-1.8h2v1.8a3.4 3.4 0 0 1-3.4 3.4H5.4a3.4 3.4 0 0 1-3.4-3.4z"/>
          <path d="M10 3h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/></g></g></svg>
          </span>

          <span className="opacity-30 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
          <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m0 9h.01M9 17h.01M12 16l1 1l3-3"/></g></svg>
          </span>

          <span className="opacity-30 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048">
          <path fill="black" d="M2048 388v1524H268v-384h116v268h1548V504h-780V388zM374 1272H0v-44q19-3 38-5t37-8q14-4 30-26t32-49t27-53t19-41l388-918h82l382 928q9 22 21 50t29 53t38 44t49 22t56 3v44H782v-44h37q20 0 37-3t30-16t12-37q0-22-11-60t-26-80t-30-79t-26-62H359q-9 23-26 61t-34 80t-29 79t-13 60q0 24 12 35t30 16t38 4t37 2zm28-509h344L570 385z"/></svg>
          </span>

          <span className="opacity-30 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path fill="black" d="M10.307 2.105A.5.5 0 0 0 9.5 2.5v1.993l-.135.007a5.4 5.4 0 0 0-1.544.337a4.7 4.7 0 0 0-2.095 1.574c-.623.826-1.081 1.972-1.224 3.544a.5.5 0 0 0 .852.399c1.188-1.19 2.369-1.776 3.242-2.067c.36-.12.668-.19.904-.23V10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0-.025-.769zm-.364 3.392h.003A.5.5 0 0 0 10.5 5V3.522l3.219 2.504l-3.219 2.86V7.5A.5.5 0 0 0 10 7h-.045l-.1.006a5 5 0 0 0-.355.038c-.3.043-.72.127-1.22.294a8.9 8.9 0 0 0-2.548 1.36c.194-.716.476-1.264.793-1.685a3.7 3.7 0 0 1 1.654-1.242A4.4 4.4 0 0 1 9.82 5.49q.068.002.1.005zM4.5 3A2.5 2.5 0 0 0 2 5.5v6A2.5 2.5 0 0 0 4.5 14h6a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 3 11.5v-6A1.5 1.5 0 0 1 4.5 4h2a.5.5 0 0 0 0-1z"/></svg>
          </span>

          <span className="opacity-30 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
          <path fill="black" d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0m-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2zM9.388 25.34a3 3 0 0 0 2.98 2.66h7.263a3 3 0 0 0 2.98-2.66L24.48 9H7.521zM13 12.5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"/></svg>
          </span>


<div className="relative flex inline-block" onClick={toggleSortDropdown}>
<span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path stroke="#344054" d="M16.667 41.667V8.333m6.25 6.25l-6.25-6.25l-6.25 6.25"/>
          <path stroke="#306cfe" d="m27.083 35.417l6.25 6.25l6.25-6.25m-6.25-27.084v33.334"/></g></svg>
          </span>
      <span className="cursor-pointer">
        <p className="flex text-sm items-center">
          Sort
          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill="black" fillRule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clipRule="evenodd" />
          </svg>
        </p>
      </span>

      {isSortDropdownOpen && (
        <div className="absolute left-0 mt-10 text-sm w-32 bg-white border rounded-md shadow-lg z-10">
          <ul>
            <li className="list-disc ml-6 px-4 py-2 hover:bg-slate-200 cursor-pointer">Name</li>
            <li className="px-4 py-2 ml-6 hover:bg-slate-200 cursor-pointer">Date</li>
            <li className="px-4 py-2 ml-6 hover:bg-slate-200 cursor-pointer">Type</li>
            <li className="px-4 py-2 ml-6 hover:bg-slate-200 cursor-pointer">More</li>
            <li className="list-disc px-4 py-2 ml-6 hover:bg-slate-200 cursor-pointer">Ascending</li>
            <li className="px-4 py-2 ml-6 hover:bg-slate-200 cursor-pointer">Descending</li>
            <li className="px-4 py-2 ml-6 hover:bg-slate-200 cursor-pointer">Group by</li>

          </ul>
        </div>
      )}
    </div>

          <div className="relative flex gap-2 inline-block" onClick={toggleViewDropdown}>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 2048 2048">
          <path fill="black" d="M0 1152h640v640H0zm128 512h384v-384H128zM0 256h640v640H0zm128 512h384V384H128zm1920-384v128H896V384zm-384 384H896V640h768zm-768 512h1152v128H896zm0 256h768v128H896z"/></svg>
            </span>
      <span className="cursor-pointer">
        <p className="flex text-sm items-center">
          View
          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill="black" fillRule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clipRule="evenodd" />
          </svg>
        </p>
      </span>

      {isViewDropdownOpen && (
        <div className="absolute left-0 mt-10 text-sm w-60 p-5 bg-white border rounded-md shadow-lg z-10">
          <ul>
            <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="black" d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"/></svg>
              Extra large icons</li>
              <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.1em" viewBox="0 0 24 24"><path fill="black" d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"/></svg>
     Large icons</li>
     <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm0-2h16V5H4zm0 0V5z"/></svg>
     Medium icons</li>
     <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><g fill="none"><path fill="black" fill-opacity="0.16" d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3m11 11h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6"/><path stroke="black" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Zm11 0h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3Zm-11 11H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Zm11 0h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z"/></g></svg>
     Small icons</li>
     <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 32 32"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m4 0h4M5 13h10m8 0h4M5 19h14m4 0h4M5 25h12m6 0h4"/></svg>
     List</li>
     <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20"><path fill="black" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>
     Details</li>
     <li className="list-disc flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 32 32"><path fill="black" d="M16 8h14v2H16zm0 14h14v2H16zm-6-8H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 6v6h6.001L10 6zm6 22H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6.001L10 20z"/></svg>
     Tiles</li>
     <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="black" d="M6.248 16.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 0 1 6.248 22H3.75A1.75 1.75 0 0 1 2 20.25v-2.498c0-.966.784-1.75 1.75-1.75zm0 1.5H3.75a.25.25 0 0 0-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 0 0 .25-.25v-2.498a.25.25 0 0 0-.25-.25m3.5.498h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493zh11.505zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 13.249V10.75C2 9.784 2.784 9 3.75 9zm0 1.5H3.75a.25.25 0 0 0-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 0 0 .25-.25V10.75a.25.25 0 0 0-.25-.25m3.5.499h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493zh11.505zm-3.5-9c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 6.248V3.75C2 2.784 2.784 2 3.75 2zm0 1.5H3.75a.25.25 0 0 0-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25m3.5.5h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493zh11.505z"/></svg>
     Content</li>
     <li className="flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 32 32"><path fill="black" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"/>
            <path fill="black" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"/></svg>
     Details pane</li>
     <li className="list-disc flex gap-2 px-4 py-2 hover:bg-slate-200 cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 32 32"><path fill="black" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"/>
            <path fill="black" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"/></svg>
     Preview pane</li>


          </ul>
        </div>
      )}
    </div>


          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 20 20">
          <path fill="black" d="M3.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"/></svg>
          </span>
        </div>

        <div className="flex items-center  ml-auto">
            <span >
                <p className="flex flex-inline mr-4 gap-2 text-sm text-gray-450">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.3em" viewBox="0 0 32 32"><path fill="black" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"/>
            <path fill="black" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"/></svg>
           Details
                </p>
                </span>
        </div>
      </div>
    </div>
  );
};
