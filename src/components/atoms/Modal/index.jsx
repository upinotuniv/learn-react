import React from "react";

export default function Modal({
  title,
  children,
  showInsertModal,
  setShowInsertModal,
  width = "w-[35%]",
  height = "h-[80%]",
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen absolute z-20">
      <div className="w-full h-screen absolute bg-black/80"></div>
      {/* <!-- Modal content --> */}
      <div
        className={`flex flex-col justify-center items-center absolute bg-white ${width} ${height} rounded-lg`}
      >
        <div className="flex justify-between items-center px-4 py-2 w-full bg-gray-100 rounded-t-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={() => setShowInsertModal(false)}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm p-2 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="w-full px-6 py-6 lg:px-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
