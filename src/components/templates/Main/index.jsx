import React, { useState } from "react";
import FormInsertStudent from "../../molecules/Form/FormInsertStudent";
import Sidebar from "../../organisms/Sidebar";
import Navbar from "../../organisms/Navbar";

export default function MainLayout({
  children,
  type,
  initial,
  user,
  id,
  remove,
  search,
  setSearch,
  sort,
  setSort,
}) {
  // action state
  const [showInsertModal, setShowInsertModal] = useState(false);

  return (
    <>
      {type === "student" ? (
        <div className="flex justify-center items-center w-full font-inter bg-gray-200 ">
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center w-[20%] h-screen">
              {/* sidebar */}
              <Sidebar type="student" />
            </div>

            <div className="flex flex-col justify-center w-[80%] h-screen">
              {/* Navbar */}
              <Navbar type="student" initial={initial} user={user} id={id} />

              {/* content */}
              <div className="flex justify-center w-full h-[85%] p-4">
                <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
                  <div className="flex justify-between w-full border-b-2 px-8 py-4">
                    <h1 className="text-gray-700 font-bold text-xl">
                      Student Data
                    </h1>
                    {remove}
                  </div>
                  <div className="flex flex-col justify-center px-8 py-4 overflow-y-auto">
                    <div className="relative overflow-x-auto">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {showInsertModal && (
            <FormInsertStudent
              setShowInsertModal={setShowInsertModal}
              showInsertModal={showInsertModal}
            />
          )}
          <div className="flex justify-center items-center w-full font-inter bg-gray-200 ">
            <div className="flex justify-center items-center w-full">
              <div className="flex justify-center w-[20%] h-screen">
                {/* sidebar */}
                <Sidebar />
              </div>

              <div className="flex flex-col justify-center w-[80%] h-screen">
                {/* Navbar */}
                <Navbar type="admin" initial={initial} user={user} />

                {/* content */}
                <div className="flex justify-center w-full h-[85%] p-4">
                  <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
                    <div className="flex justify-between w-full border-b-2 px-8 py-4">
                      <h1 className="text-gray-700 font-bold text-xl">
                        Student Data
                      </h1>
                      {/* Modal */}
                      {/* <!-- Modal toggle --> */}
                      <button
                        className="block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                        onClick={() => setShowInsertModal(true)}
                      >
                        + Insert Student
                      </button>

                      {/* <!-- Main modal --> */}
                    </div>
                    <div className="flex flex-col justify-center px-8 py-4 overflow-y-auto">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex justify-start w-1/2">
                          <label htmlFor="table-search" className="sr-only">
                            Search
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <input
                              onChange={(e) => setSearch(e.target.value)}
                              type="text"
                              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white "
                              placeholder="Search for items"
                            />
                          </div>
                        </div>

                        <div className="flex justify-end w-1/2">
                          <select
                            onChange={(e) => setSort(e.target.value)}
                            defaultValue="default"
                            className="text-gray-500 bg-white border font-normal rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            <option value="default" disabled>
                              Sort By
                            </option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
