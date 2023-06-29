import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Modal from "../atoms/Modal";
import MainLayout from "../templates/Main";
import { useParams } from "react-router-dom";

export default function Profile() {
  // state for data
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  //state for action
  const [showModal, setShowModal] = useState(false);

  // state for form field
  const [fullname, setFullname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();
  }, []);

  useEffect(() => {
    const getStudent = async (id) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
          },
        };
        const { data } = await axios.get(
          `http://localhost:5000/student-profile/${id}`,
          config
        );

        setStudent(data.student);
      } catch (error) {
        console.log(error);
      }
    };

    getStudent(id);
  }, []);

  useEffect(() => {
    setFullname(student.fullname);
    setDateOfBirth(moment(student.dateOfBirth).format("YYYY-MM-DD"));
    setPhoneNumber(student.phoneNumber);
    setParentName(student.parentName);
    setParentNumber(student.parentNumber);
    setAddress(student.address);
    setEmail(student.email);
    setPassword(student.password);
  }, [student]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      };

      const requestData = {
        fullname: fullname,
        dateOfBirth: dateOfBirth,
        address: address,
        phoneNumber: phoneNumber,
        parentName: parentName,
        parentNumber: parentNumber,
        email: email,
        password: password,
      };
      await axios.put(
        `http://localhost:5000/update-student/${id}`,
        requestData,
        config
      );

      localStorage.removeItem("studentToken");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      };
      await axios.delete(`http://localhost:5000/delete-student/${id}`, config);
      localStorage.removeItem("studentToken");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          height="h-[35%]"
          title="Delete Account"
          setShowInsertModal={setShowModal}
          showInsertModal={showModal}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-center items-center w-full px-4 pb-8">
              <h1 className="text-3xl font-semibold">
                Are you sure want to delete your account?
              </h1>
            </div>
            <div className="flex justify-center items-center w-full px-28">
              <Button color="bg-red-500" onClick={() => handleDelete(id)}>
                YES
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <MainLayout
        type="student"
        initial={user.fullname && user.fullname.charAt(0)}
        user={user.fullname}
        id={user.id}
        remove={
          <button
            className="block text-white bg-red-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Delete Account
          </button>
        }
      >
        <form className="space-y-4 px-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="dateOfBirth">Date Of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="0895 1234 5678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="parentName">Parent Name</Label>
            <Input
              type="text"
              name="parentName"
              id="parentName"
              placeholder="Parent Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="parentNumber">Parent Number</Label>
            <Input
              type="text"
              name="parentNumber"
              id="parentNumber"
              placeholder="0895 1234 5678"
              value={parentNumber}
              onChange={(e) => setParentNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="address">Address</Label>
            <textarea
              name="address"
              id="address"
              className="w-full px-4 py-2 transition duration-500 bg-gray-200 rounded-lg focus:ring focus:ring-gray-700 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white resize-none h-24"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-center items-center w-full px-72 gap-x-20">
            <Button
              color="bg-gray-400"
              type="button"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </MainLayout>
    </>
  );
}
