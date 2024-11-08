import Image from "next/image";

export default function DesktopIcon({ iconSrc, label, onDoubleClick }) {
    return (
      <div className="flex flex-col select-none items-center text-white w-20 h-20 cursor-pointer hover:bg-gray-100/15 p-2 " 
      onDoubleClick={onDoubleClick}
      >
        <Image width={50} height={50} src={iconSrc} alt={label} className="w-12 h-12" />
        <span className="text-xs text-center mt-2">{label}</span>
      </div>
    );
  }
  