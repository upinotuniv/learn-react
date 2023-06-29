import React, { useState } from "react";
import axios from "axios";
import Input from "../../../../atoms/Input";
import Label from "../../../../atoms/Label";
import Button from "../../../../atoms/Button";

export default function FormLoginAdmin() {
  // state untuk mengirimkan nilai dari form input ke request
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // fungsi login untuk mendapatkan akses token
  const Auth = async (e) => {
    e.preventDefault(); // agar tidak reload ketika mengirimkan data
    try {
      // validasi login
      if (email !== "admin@gmail.com") {
        window.alert("Invalid User");
      } else {
        // membuat variable baru dengn method post dengan mengirimkan dua parameter
        // parameter ke-1 endpoint atau url yang akan dihit apinya
        // parameter ke-2 request data yang diambil dari useState sebelumnya untuk dikirimkan ke server
        const response = await axios.post("http://localhost:5000/sign-in", {
          email: email,
          password: password,
        });

        // menyimpan accessToken ke localStorage
        localStorage.setItem("adminToken", response.data.userAccessToken);

        // setelah berhasil menyimpan accessToken ke localStorage maka akan diarahkan ke halaman dashboard
        window.location.href = "/dashboard-admin";
      }
    } catch (error) {
      // ketika semua kode di atas error maka akan menjalankan bagian kode di bawah
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col space-y-8 w-full" onSubmit={Auth}>
      <div className="flex flex-col justify-center w-full space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center w-full space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="*****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
