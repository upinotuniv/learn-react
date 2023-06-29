import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import MainLayout from "../templates/Main";

export default function DashboardAdmin() {
  // state for data
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState([]);

  // state for search data
  const [search, setSearch] = useState("");

  // state for sorting data
  const [sort, setSort] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        };
        const { data } = await axios.get(
          "http://localhost:5000/admin-dashboard",
          config
        );

        setStudent(data.student);
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();
  }, []);

  return (
    <>
      <MainLayout
        initial={user.username && user.username.charAt(0)}
        user={user.username}
        setSearch={setSearch}
        search={search}
        setSort={setSort}
        sort={sort}
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Fullname
                {sort === "ascending" && <span>&#8593;</span>}
                {sort === "descending" && <span>&#8595;</span>}
              </th>
              <th scope="col" className="px-6 py-3">
                Grade
              </th>
              <th scope="col" className="px-6 py-3">
                Date Of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Parent Name
              </th>
              <th scope="col" className="px-6 py-3">
                Parent Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {student
              .filter((students) => {
                return search.toLowerCase() === ""
                  ? students
                  : students?.student?.fullname.toLowerCase().includes(search);
              })
              .sort((a, b) => {
                if (sort === "ascending") {
                  // metode localeCompare() untuk membandingkan string dan mengurutkannya berdasarkan nilai sort yang ditentukan.
                  return a?.student?.fullname.localeCompare(
                    b?.student?.fullname
                  );
                } else if (sort === "descending") {
                  return b?.student?.fullname.localeCompare(
                    a?.student?.fullname
                  );
                } else {
                  return 0;
                }
              })
              .map((students, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={students.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{students?.student?.fullname}</td>
                  <td className="px-6 py-4">{students?.grade?.gradeName}</td>
                  <td className="px-6 py-4">
                    {moment(students?.student?.dateOfBirth).format(
                      "DD/MM/YYYY"
                    )}
                  </td>
                  <td className="px-6 py-4">{students?.student?.address}</td>
                  <td className="px-6 py-4">
                    {students?.student?.phoneNumber}
                  </td>
                  <td className="px-6 py-4">{students?.student?.parentName}</td>
                  <td className="px-6 py-4">
                    {students?.student?.parentNumber}
                  </td>
                  <td className="px-6 py-4">{students?.student?.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </MainLayout>
    </>
  );
}
