import React from 'react'

export const Topbar1 = () => {
  return (
    <div>
        <div className="fixed h-12 flex justify-between cursor-pointer items-center">
        <div className="flex items-center space-x-5 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"
              />
            </svg>
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M12.646 6.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l4.147-4.146H6a.5.5 0 0 1 0-1h10.793l-4.147-4.146a.5.5 0 0 1 0-.708"
              />
            </svg>{" "}
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58a.996.996 0 1 0 1.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1"
              />
            </svg>
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M5 5h5v5H9V6.5c-2.35.97-4 3.29-4 6c0 3.58 2.91 6.5 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-3.08-2.14-5.66-5-6.33V5.14c3.42.7 6 3.72 6 7.36c0 4.13-3.36 7.5-7.5 7.5A7.5 7.5 0 0 1 4 12.5C4 9.72 5.5 7.3 7.74 6H5z"
              />
            </svg>
          </span>

          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.6em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" fillRule="nonzero" d="M19 3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4v1h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm-6 15h-2v1h2zm6-13H5v11h14z"/></g></svg>
          </span>

          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="black" fillRule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"/></svg>
          </span>

          <span className="font-sm text-gray-800">
            <p>This PC</p>
          </span>

          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="black" fillRule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"/></svg>
          </span>
        </div>

      <div className="flex items-center ml-auto">
        <span>
      <div className="relative my-6">
        <input
          id="id-s01"
          type="search"
          name="id-s01"
          placeholder="Search This PC"
          aria-label="Search content"
          className="peer relative h-10 w-full border hover:border-slate-300 px-4 pr-12 text-sm text-black outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500  focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
        </span>
</div>
      </div>
    </div>
  )
}
