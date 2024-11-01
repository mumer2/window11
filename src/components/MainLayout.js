import React from 'react';
import Image from 'next/image';
import Drives from './Drives';

const MainLayout = () => {
  return (
    <div>
    <div className="flex h-screen mt-20">
      <div className="w-1/7 h-[calc(90vh-5rem)] mt-3 overflow-y-auto">
        <ul className="space-y-2 mt-2">
          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1em" viewBox="0 0 48 48"><path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"/>
            <path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"/><path fill="#b71c1c" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"/><path fill="#d84315" d="M18 28h12v16H18z"/><path fill="#01579b" d="M21 17h6v6h-6z"/><path fill="#ff8a65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"/></svg>
            </span>
            <span>Home</span>
          </li>
          <li className="flex items-center text-xs pl-10 pr-10 space-x-1 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
              <Image src={"/images/gallery.png"} width={20} height={20} alt={"Gallery"}/>
            </span>
            <span>Gallery</span>
          </li>
         <li className="flex items-center text-xs pl-10 pr-10 space-x-1 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.56em" height="0.8em" viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"/>
            <path fill="#36bdd9" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"/><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"/><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"/></svg>         </span>
            <span>OneDrive</span>
          </li> 
          <hr className='border-slate-300'/>
          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
           <Image src={"/images/desktop.png"} width={16} height={14} alt='desktop'/>
                      </span>
            <span>Desktop</span>
          </li> 
          <li className="flex items-center text-xs pl-10 pr-10 space-x-1 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="2em" viewBox="0 0 48 48">
            <path fill="none" stroke="#00704f" strokeLinecap="round" strokeLinejoin="round" d="M39.236 42.5H8.764M24 33.924V5.5M12.287 22.211L24 33.924l11.713-11.713"/></svg>  </span>
            <span>Downloads</span>
          </li>
          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
              <Image src={"/images/document.png"} width={20} height={20} alt={'document'}/>
            </span>
            <span>Documents</span>
          </li>
          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
              <Image src={"/images/pictures.png"} width={20} height={20} alt='pictures'/>
            </span>
            <span>Pictures</span>
          </li>

          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="2em" viewBox="0 0 24 24">
            <path fill="#c15777" d="M16 9V7h-4v5.5c-.42-.31-.93-.5-1.5-.5A2.5 2.5 0 0 0 8 14.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V9zm-4-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"/></svg>
            </span>
            <span>Music</span>
          </li>

          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 32 32">
             <path fill="#914ae8" d="M4.5 2.375A2.56 2.56 0 0 1 5.861 2h20.366a2.545 2.545 0 0 1 2.423 1.951a3.4 3.4 0 0 1 .072.862v11.176h-1.573a2 2 0 0 0-.22.022a5 5 0 0 0-.581-.011c-.3.007-.61-.014-.914.014a2.3 2.3 0 0 0-.4-.02h-4.739c-.2 0-.392.008-.587-.01l.1-.065l-6.353-3.813v3.889c-2.213-.005-4.427 0-6.64 0a2 2 0 0 0-.251.021c-.212-.032-.427-.016-.642-.016c-.284.006-.57-.015-.853.015a2 2 0 0 0-.253-.022H3.275c.006-3.635 0-7.27 0-10.9a4.8 4.8 0 0 1 .071-1.131A2.54 2.54 0 0 1 4.5 2.375m.54 2.188a.64.64 0 0 0-.489.606v1.316a.64.64 0 0 0 .627.6h1.309a.64.64 0 0 0 .6-.608c.005-.426 0-.853 0-1.279a.64.64 0 0 0-.329-.575a.7.7 0 0 0-.358-.078H5.264a1 1 0 0 0-.224.018m20.341 0a.64.64 0 0 0-.474.607v1.306a.64.64 0 0 0 .6.608c.436.005.872 0 1.308 0a.64.64 0 0 0 .627-.606c.006-.438 0-.876 0-1.314a.64.64 0 0 0-.594-.621c-.348-.009-.7 0-1.045 0a2 2 0 0 0-.422.024ZM5.042 8.38a.64.64 0 0 0-.452.4a1.1 1.1 0 0 0-.041.386v1.135a.637.637 0 0 0 .6.6c.4.008.795 0 1.192 0a.8.8 0 0 0 .395-.065a.64.64 0 0 0 .36-.574V8.983a.64.64 0 0 0-.6-.624c-.338-.008-.677 0-1.016 0a2.4 2.4 0 0 0-.438.021m20.338 0a.64.64 0 0 0-.433.4a1.1 1.1 0 0 0-.041.387v1.131a.64.64 0 0 0 .608.607c.406.006.812 0 1.218 0a.74.74 0 0 0 .38-.078a.64.64 0 0 0 .335-.558V8.985a.637.637 0 0 0-.593-.622c-.349-.009-.7 0-1.047 0a2 2 0 0 0-.428.022ZM5.041 12.2a.64.64 0 0 0-.491.608c0 .438-.005.877 0 1.315a.64.64 0 0 0 .627.6h1.3a.64.64 0 0 0 .608-.607v-1.307a.64.64 0 0 0-.605-.626c-.348-.007-.7 0-1.045 0a2 2 0 0 0-.394.017m20.335.006a.64.64 0 0 0-.43.394a1.1 1.1 0 0 0-.041.386v1.131a.64.64 0 0 0 .607.608c.435.005.87 0 1.306 0a.64.64 0 0 0 .628-.605c.006-.438 0-.876 0-1.313a.637.637 0 0 0-.592-.622c-.349-.01-.7 0-1.046 0a2 2 0 0 0-.431.015Z"/><path fill="#fff" d="M13.458 12.1q3.176 1.908 6.353 3.813l-.1.065q-3.127 1.872-6.251 3.748V15.99q-.003-1.941-.002-3.89"/><path fill="#914ae8" d="M3.275 15.988h1.541a2 2 0 0 1 .253.022a.65.65 0 0 0-.409.273a.9.9 0 0 0-.111.518v1.045a.686.686 0 0 0 .685.689h1.192a.68.68 0 0 0 .657-.569c.008-.447 0-.9 0-1.343a.63.63 0 0 0-.521-.613a2 2 0 0 1 .251-.021h6.64v3.736q3.127-1.871 6.251-3.748c.2.018.391.007.587.01h4.741a2.3 2.3 0 0 1 .4.02a.64.64 0 0 0-.475.385a1 1 0 0 0-.045.407v1.014a.677.677 0 0 0 .691.719h1.16a.684.684 0 0 0 .686-.658v-.984a1.07 1.07 0 0 0-.1-.589a.64.64 0 0 0-.42-.292a2 2 0 0 1 .22-.022h1.573c.011 1.721 0 3.443 0 5.165v6.293a2.57 2.57 0 0 1-.612 1.651a2.54 2.54 0 0 1-1.563.868a8 8 0 0 1-.981.033H6.724a9 9 0 0 1-1.368-.048a2.56 2.56 0 0 1-2-1.846a2.8 2.8 0 0 1-.09-.746V16.891c.007-.3-.002-.602.009-.903m1.795 3.843a.6.6 0 0 0-.386.234a.76.76 0 0 0-.134.464v1.162a.685.685 0 0 0 .686.658h1.283a.687.687 0 0 0 .568-.716v-1.191a.62.62 0 0 0-.2-.458a.7.7 0 0 0-.487-.17H5.264a1 1 0 0 0-.194.017m20.366 0a.62.62 0 0 0-.522.58v1.222a.676.676 0 0 0 .69.718c.428 0 .857.005 1.285 0a.7.7 0 0 0 .562-.684v-1.013a.9.9 0 0 0-.123-.568a.66.66 0 0 0-.532-.267h-.954a2.3 2.3 0 0 0-.406.011ZM5.071 23.648a.6.6 0 0 0-.4.249a.77.77 0 0 0-.124.448v1.132a.7.7 0 0 0 .6.688h1.376a.687.687 0 0 0 .567-.717v-1.189a.62.62 0 0 0-.2-.459a.7.7 0 0 0-.484-.17H5.265a1 1 0 0 0-.194.018m20.362 0a.62.62 0 0 0-.492.427a1 1 0 0 0-.029.33V25.6a.68.68 0 0 0 .656.567h1.193a.69.69 0 0 0 .686-.719v-1.164a.66.66 0 0 0-.286-.545a1.46 1.46 0 0 0-.787-.11c-.312.01-.629-.02-.94.018Z"/></svg>
            </span>
            <span>Videos</span>
          </li>

          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
              <Image src={"/images/pictures.png"} width={20} height={20} alt='pictures'/>
            </span>
            <span>Pictures</span>
          </li>

          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
              <Image src={"/images/pictures.png"} width={20} height={20} alt='pictures'/>
            </span>
            <span>Pictures</span>
          </li>

          <li className="flex items-center text-xs pl-10 pr-10 space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded">
            <span>
              <Image src={"/images/pictures.png"} width={20} height={20} alt='pictures'/>
            </span>
            <span>Pictures</span>
          </li>
        </ul>
      </div>

      {/* <div className="flex-grow bg-white p-6">
        <div className='flex cursor-pointer hover:bg-slate-200 p-2 h-8'>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#c15777" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd"/></svg>
        <h2 className="text-xs text-blue-800 font-thin mb-4">Devices and drives</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className='flex'>
          <span className='mt-4'>
          <Image  className="absolute" src={"/images/devicon--windows11.png"} width={18} height={10} alt='disc'/>
            <Image src={"/images/harddisc1.png"} width={50} height={50} alt='disc'/>
          </span>
          <div className="text-sm border rounded-lg p-4">
            <h3>Local Disk (C:)</h3>
           <div className='w-60 h-4.5 border border-gray-400'>
            <div className='w-20 h-4 bg-blue-400'></div>
           </div>
            <p>70 GB free of 100 GB</p>
          </div>
          </div>

          <div className='flex'>
          <span className='mt-4'>
            <Image src={"/images/harddisc1.png"} width={50} height={50} alt='disc'/>
          </span>
          <div className="text-sm border rounded-lg p-4">
            <h3>Drive (D:)</h3>
            <div className='w-60 h-4.5 border border-gray-400'>
            <div className='w-40 h-4 bg-blue-400'></div>
           </div>
            <p>100 GB free of 400 GB</p>
          </div>
          </div>

         
        </div>
      </div>
</div> */}

<Drives/>
     
     </div>
    </div>
  );
};

export default MainLayout;
