import React, { useState } from "react";

const Windowcontent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Windows Icon */}
      <span
        className="text-white cursor-pointer"
        onClick={toggleMenu}
      >
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

      {/* Start Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-gray-900 rounded-lg p-6 w-[600px] h-[500px] text-white">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Pinned Apps */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Pinned</h2>
              <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-600"
                  >
                    <span>App {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Apps */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Recommended</h2>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:bg-gray-600"
                  >
                    <div>
                      <h3 className="font-medium">Recommended App {index + 1}</h3>
                      <p className="text-sm text-gray-400">Description of the app</p>
                    </div>
                    <span className="text-gray-400">📄</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Windowcontent;
