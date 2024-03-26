import { Component } from "react";
import Header from "./component/Header.js";
import User from "./component/User.js";
import Car from "./component/Car.js";
import Footer from "./component/Footer.js";
import imgProfile from "./component/prof.png";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <User
        gambar={imgProfile}
        nama="Yuichi"
        alamat="Tangerang"
        angkatan={11}
        hobi={["Futsal, Game, Badminton, Nonton, Basket"]}
        isStatus={false}
        lihat={(nama) => alert("Profil " + nama + " telah dibuka")}
      />
      <User
        gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nPR4_CyTE4xJdV3eDJ3P4rDGs8uvpTEW-qK_-WzU6xfjqg1I1CeyCcPOHztCFtwfbrc&usqp=CAU"
        nama="Zenns"
        alamat="Bandung"
        angkatan={10}
        hobi="Badminton, Game"
        isStatus={true}
        lihat={(nama) => alert("Profil " + nama + " telah dibuka")}
      />
      <User
         gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhjuzX_MetFn5xi8007XsRyX8X9_doXQDuMdaiX4DpUAZQdCW-jrn92jAVvE-iCPfvqY&usqp=CAU"
        nama="Dobleh"
        alamat="Medan"
        angkatan={9}
        hobi="Basket, Tidur"
        isStatus={true}
        lihat={(nama) => alert("Profil " + nama + " telah dibuka")}
      />
      <Car
        merk="Supra"
        harga={5}
        isNew={true}
        colors={["Hitam, Biru, Merah"]}
        beli={() => alert("Selamat Anda telah membeli mobil!")} //ini () => disebut function callback / function anonymous supaya alertnya tidak muncul terus menerus
      />
      <Footer nama="Muhammad Yusuf" />
    </div>
  );
}

// const Car = ({ merk, harga, isNew, colors }) => {}
// const Car = (props) => {
//   const { merk, harga, isNew, colors, beli } = props;
//   return (
//     <>
//       <h3>Merk Mobil : {merk}</h3>
//       <h4>Harga Mobil : Rp {harga} Miliyar</h4>
//       <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
//       <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
//       <button onClick={beli}>Beli</button>
//     </>
//   );
// };

// const User = (props) => {
//   const { nama, alamat, angkatan, hobi, isStatus, lihat } = props;
//   return (
//     <div>
//       <ul>
//         <li>Nama : {nama}</li>
//         <li>Alamat : {alamat}</li>
//         <li>Angkatan : {angkatan}</li>
//         <li>Hobi : {hobi}</li>
//         <li>Status : {isStatus ? "Lulus" : "Sedang Belajar"}</li>
//         <button onClick={lihat}>Lihat</button>
//       </ul>
//     </div>
//   );
// };

// class Footer extends Component {
//   render() {
//     return (
//       <footer>
//         <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
//         <span>Make with &#10084</span>
//       </footer>
//     );
//   }
// }

export default App;
