import React, { useState, useEffect } from "react";
import axios from "axios";
import Label from "../../../atoms/Label";
import Input from "../../../atoms/Input";
import Button from "../../../atoms/Button";

export default function FormRegister() {
  const [grade, setGrade] = useState([]);
  const [form, setForm] = useState({
    fullname: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    parentName: "",
    parentNumber: "",
    email: "",
    password: "",
    gradeName: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  useEffect(() => {
    const getGradeData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/register");

        setGrade(data.grade);
      } catch (error) {
        console.log(error);
      }
    };

    getGradeData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        fullname: form.fullname,
        dateOfBirth: form.dateOfBirth,
        address: form.address,
        phoneNumber: form.phoneNumber,
        parentName: form.parentName,
        parentNumber: form.parentNumber,
        email: form.email,
        password: form.password,
        gradeName: form.gradeName,
      };

      await axios.post("http://localhost:5000/sign-up-student", requestData);
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex justify-center items-center w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center gap-y-4 w-full">
        <div className="flex justify-center items-center w-full gap-x-8">
          <div className="flex flex-1 flex-col justify-center items-center w-full gap-y-4">
            <div className="flex flex-col w-full">
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Fullname"
                value={form.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <Label htmlFor="dateOfBirth">Date Of Birth</Label>
              <Input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="0895 1234 5678"
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center w-full gap-y-4">
            <div className="flex flex-col w-full">
              <Label htmlFor="parentName">Parent Name</Label>
              <Input
                type="text"
                name="parentName"
                id="parentName"
                placeholder="Parent Name"
                value={form.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <Label htmlFor="parentNumber">Parent Number</Label>
              <Input
                type="text"
                name="parentNumber"
                id="parentNumber"
                placeholder="0895 1234 5678"
                value={form.parentNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-y-4">
          <div className="flex flex-col w-full">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <Label htmlFor="address">Address</Label>
            <textarea
              name="address"
              id="address"
              className="w-full px-4 py-2 transition duration-500 bg-gray-200 rounded-lg focus:ring focus:ring-gray-700 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white resize-none h-24"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col justify-center items-center w-full space-y-4">
            <div className="flex justify-start items-center w-full pt-2">
              <h1 className="text-sm font-medium text-gray-900">
                Choose student grade :
              </h1>
            </div>
            <div className="flex justify-start items-center w-full">
              <div className="flex flex-1 flex-col justify-start space-y-4">
                <div className="flex flex-col space-y-2 w-full">
                  {grade.map((gradeData, i) => {
                    return (
                      <div className="flex items-center space-x-2" key={i}>
                        <input
                          type="checkbox"
                          name="gradeName"
                          value={gradeData.id}
                          onChange={(e) => {
                            let newGrade = [...form.gradeName, e.target.value];
                            if (form.gradeName.includes(e.target.value)) {
                              newGrade = newGrade.filter(
                                (gradeStudent) =>
                                  gradeStudent !== e.target.value
                              );
                            }
                            form.gradeName = newGrade;

                            console.log(form.gradeName);
                          }}
                          className="text-gray-500 outline-none w-4 h-4"
                        />
                        <label
                          htmlFor="gradeName"
                          className="text-sm font-medium text-gray-900"
                        >
                          {gradeData.gradeName}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}
