import { useState } from 'react';

export default function Window({ title, children, onClose }) {
  return (
    <div className="absolute w-96 h-80 bg-white border border-gray-300 shadow-lg p-4">
      <div className="flex justify-between items-center border-b pb-2">
        <h3>{title}</h3>
        <button onClick={onClose} className="text-red-500">X</button>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
