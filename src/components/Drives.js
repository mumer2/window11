import { useState } from 'react';
import Image from 'next/image';

function Drives() {
  const [showDisks, setShowDisks] = useState(true);

  const handleDoubleClick = () => {
    setShowDisks(!showDisks); 
  };

  return (
    <div className="flex-grow ml-2 bg-white p-5">
      <div
        className="flex cursor-pointer hover:bg-slate-200 p-2 h-8"
        onDoubleClick={handleDoubleClick}
      >
        <svg
          className={`transform transition-transform ${showDisks ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="#c15777"
            fillRule="evenodd"
            d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xs text-blue-800 font-thin mb-4">Devices and drives</h2>
      </div>

      {showDisks && (
        <div className="grid grid-cols-3">
          <div className="flex">
            <span className="mt-4 relative">
              <Image
                className="absolute"
                src={"/images/devicon--windows11.png"}
                width={18}
                height={10}
                alt="windows icon"
              />
              <Image
                src={"/images/harddisc1.png"}
                width={50}
                height={50}
                alt="disk"
              />
            </span>
            <div className="text-sm border rounded-lg p-4">
              <h3>Local Disk (C:)</h3>
              <div className="w-60 h-4.5 border border-gray-400">
                <div className="w-20 h-4 bg-blue-400"></div>
              </div>
              <p>70 GB free of 100 GB</p>
            </div>
          </div>

          <div className="flex">
            <span className="mt-4">
              <Image
                src={"/images/harddisc1.png"}
                width={50}
                height={50}
                alt="disk"
              />
            </span>
            <div className="text-sm border rounded-lg p-4">
              <h3>Drive (D:)</h3>
              <div className="w-60 h-4.5 border border-gray-400">
                <div className="w-40 h-4 bg-blue-400"></div>
              </div>
              <p>100 GB free of 400 GB</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drives;
