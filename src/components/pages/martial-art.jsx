import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../templates/Main";
import { Link } from "react-router-dom";

export default function MartialArt() {
  // state for data
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getMartialArtClass = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
          },
        };
        const { data } = await axios.get(
          "http://localhost:5000/martial-art-grade",
          config
        );

        setUser(data.user);
        setMessage(data.message);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    };

    getMartialArtClass();
  }, []);

  return (
    <>
      {error ? (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-white gap-4">
          <div className="flex justify-center items-center w-full">
            <h1 className="text-5xl font-black text-red-500 uppercase">
              {error}
            </h1>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link
              className="text-2xl font-semibold hover:underline"
              to="/dashboard"
            >
              Back to dashboard
            </Link>
          </div>
        </div>
      ) : (
        <MainLayout
          type="student"
          initial={user.fullname && user.fullname.charAt(0)}
          user={user.fullname}
          id={user.id}
        >
          {message}
        </MainLayout>
      )}
    </>
  );
}
