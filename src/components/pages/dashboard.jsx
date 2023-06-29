import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import MainLayout from "../templates/Main";

export default function Dashboard() {
  // state for data
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
          },
        };
        const { data } = await axios.get(
          "http://localhost:5000/student-dashboard",
          config
        );

        console.log(data.user);
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
        type="student"
        initial={user.fullname && user.fullname.charAt(0)}
        user={user.fullname}
        id={user.id}
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Fullname
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
            {student.map((students, index) => (
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
                  {moment(students?.student?.dateOfBirth).format("DD/MM/YYYY")}
                </td>
                <td className="px-6 py-4">{students?.student?.address}</td>
                <td className="px-6 py-4">{students?.student?.phoneNumber}</td>
                <td className="px-6 py-4">{students?.student?.parentName}</td>
                <td className="px-6 py-4">{students?.student?.parentNumber}</td>
                <td className="px-6 py-4">{students?.student?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainLayout>
    </>
  );
}
