import { Component } from "react";
import "./App.css";
import Header from "./component/Navbar/Navbar.js";
import User from "./component/User/User.js";
import Main from "./component/Main/Main.js";
import Car from "./component/Car/Car.js";
import Footer from "./component/Footer/Footer.js";
import imgProfile from "./component/prof.png";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      {/* <h1>Hello World</h1> */}
      {/* <User
        // gambar={imgProfile}
        nama="Yuichi"
        member="platinum"
        // alamat="Tangerang"
        // angkatan={11}
        // hobi={["Futsal, Game, Badminton, Nonton, Basket"]}
        // isStatus={false}
        message={(nama) => alert("Profil " + nama + " telah dibuka")}
        subscribe={() => alert("Terimakasi sudah mensubscribe kami")}
      />
      <User
        // gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nPR4_CyTE4xJdV3eDJ3P4rDGs8uvpTEW-qK_-WzU6xfjqg1I1CeyCcPOHztCFtwfbrc&usqp=CAU"
        nama="Zenns"
        member="gold"
        // alamat="Bandung"
        // angkatan={10}
        // hobi="Badminton, Game"
        // isStatus={true}
        message={(nama) => alert("Profil " + nama + " telah dibuka")}
        subscribe={() => alert("Terimakasi sudah mensubscribe kami")}
      />
      <User
        // gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhjuzX_MetFn5xi8007XsRyX8X9_doXQDuMdaiX4DpUAZQdCW-jrn92jAVvE-iCPfvqY&usqp=CAU"
        nama="Gensuki"
        member="silver"
        // alamat="Medan"
        // angkatan={9}
        // hobi="Basket, Tidur"
        // isStatus={true}
        message={(nama) => alert("Profil " + nama + " telah dibuka")}
        subscribe={() => alert("Terimakasi sudah mensubscribe kami")}
      /> */}
      {/* <Car /> */}
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
