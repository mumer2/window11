import React from 'react';

const MainLayout = () => {
  return (
    <div className="flex h-screen mt-20">
      <div className="w-1/8 mt-4 h-screen overflow-y-auto">
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"/>
            <path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"/><path fill="#b71c1c" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"/><path fill="#d84315" d="M18 28h12v16H18z"/><path fill="#01579b" d="M21 17h6v6h-6z"/><path fill="#ff8a65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"/></svg>
            </span>
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#2f88ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path fill="#bbbfc3" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z"/><path d="M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z"/></g></svg>
            </span>
            <span>Gallery</span>
          </li>
         <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#2f88ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path fill="#bbbfc3" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z"/><path d="M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z"/></g></svg>
            </span>
            <span>Gallery</span>
          </li> <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#2f88ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path fill="#bbbfc3" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z"/><path d="M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z"/></g></svg>
            </span>
            <span>Gallery</span>
          </li> <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="#2f88ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path fill="#bbbfc3" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z"/><path d="M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z"/></g></svg>
            </span>
            <span>Gallery</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>📂</span>
            <span>Music</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>📂</span>
            <span>Videos</span>
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default MainLayout;
