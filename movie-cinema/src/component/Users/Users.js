import React from "react";
import User from "../User/User.js";
import "../User/User.css";
import "./Users.css";

const Users = () => {
  const datas = [
    {
      nama: "Kiyotaka Ayanokouji",
      member: "GrandMaster",
      message: "Manusia hanyalah alat",
    },
    {
      nama: "Oreki Houtarou",
      member: "Master",
      message: "Jika kau tidak ingin melakukannya, tidak usah dilakukan. Jika kau ingin melakukannya, lakukanlah dengan cepat",
    },
    {
      nama: "Judul film 3",
      member: "Diamond",
      message: "Jangan terlalu berharap kepada manusia",
    },
    {
      nama: "Judul film 4",
      member: "Platinum",
      message: "Hanya sekadar cerita tentang batu",
    },
  ];
  return (
    <div>
      <h2>User</h2>
      <div class="User-container">
        {datas.map((data, index) => {
          return (
            <User
              nama={data.nama}
              member={data.member}
              message={() => alert(data.message)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
