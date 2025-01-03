"use client";
import { useState } from 'react';
import Taskbar from "@/components/Taskbar";
import MyComputer from "@/components/MyComputer";
import RecycleBin from "@/components/RecycleBin"; 
import DesktopIcon from "@/components/DesktopIcon";
import Image from 'next/image';

export default function Home() {
  const [showMyComputer, setShowMyComputer] = useState(false);
  const [showRecycleBin, setShowRecycleBin] = useState(false); 

  const openMyComputer = () => {
    setShowMyComputer(true); 
  };

  const closeMyComputer = () => {
    setShowMyComputer(false);
  };

  const openRecycleBin = () => {
    setShowRecycleBin(true); 
  };

  const closeRecycleBin = () => {
    setShowRecycleBin(false);
  };

  return (
    <div className="bg relative h-screen bg-[url('/images/Window11.jpeg')] bg-cover bg-center">
      {showMyComputer && <MyComputer onClose={closeMyComputer} title={"This PC"} />} 

      {showRecycleBin && <RecycleBin onClose={closeRecycleBin} title={"Recycle Bin"}/>} 

      <div className="grid p-4">
        <DesktopIcon iconSrc="/images/d1.png" label="This PC" onDoubleClick={openMyComputer} />
        <DesktopIcon iconSrc="/images/Recycle.png" label="Recycle Bin" onDoubleClick={openRecycleBin} />
      </div>
      <Taskbar />
    </div>
  );
}
