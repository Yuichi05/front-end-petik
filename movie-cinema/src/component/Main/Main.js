import User from "../User/User.js";
import Car from "../Car/Car.js";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      {/* <User
        nama="Yuichi"
        member="platinum"
      />
      <User
        nama="Zenns"
        member="gold"
      />
      <User
        nama="Gensuki"
        member="silver"
          />
          <User
        nama="Samsul"
        member="platinum"
      />
      <User
        nama="Asep"
        member="gold"
      />
      <User
        nama="Dobleh"
        member="silver"
          />
          <User
        nama="Udin"
        member="platinum"
      />
      <User
        nama="Agus"
        member="gold"
      />
      <User
        nama="Ucok"
        member="silver"
          />
          <User
        nama="Koclak"
        member="platinum"
      /> */}
      <Car
        merk="Supra"
        harga={5}
        isNew={true}
        colors={["Hitam, Biru, Merah"]}
        beli={() => alert("Selamat Anda telah membeli mobil!")} //ini () => disebut function callback / function anonymous supaya alertnya tidak muncul terus menerus
      />
      <Car
        merk="Supra"
        harga={5}
        isNew={true}
        colors={["Hitam, Biru, Merah"]}
        beli={() => alert("Selamat Anda telah membeli mobil!")} //ini () => disebut function callback / function anonymous supaya alertnya tidak muncul terus menerus
      />
      <Car
        merk="Supra"
        harga={5}
        isNew={true}
        colors={["Hitam, Biru, Merah"]}
        beli={() => alert("Selamat Anda telah membeli mobil!")} //ini () => disebut function callback / function anonymous supaya alertnya tidak muncul terus menerus
      />
      <Car
        merk="Supra"
        harga={5}
        isNew={true}
        colors={["Hitam, Biru, Merah"]}
        beli={() => alert("Selamat Anda telah membeli mobil!")} //ini () => disebut function callback / function anonymous supaya alertnya tidak muncul terus menerus
      />
      <Car
        merk="Supra"
        harga={5}
        isNew={true}
        colors={["Hitam, Biru, Merah"]}
        beli={() => alert("Selamat Anda telah membeli mobil!")} //ini () => disebut function callback / function anonymous supaya alertnya tidak muncul terus menerus
      />
    </div>
  );
};

export default Main;
