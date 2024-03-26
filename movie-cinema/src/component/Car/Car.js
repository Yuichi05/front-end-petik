import sups from "../supra.jpg";
import "./Car.css";
const Car = (props) => {
  const { merk, harga, isNew, colors, beli } = props;
  return (
    <div className="card">
      <img src={sups} alt="foto-mobil" />
      <div class="card-header">
        <h3>Merk Mobil : {merk}</h3>
      </div>
      <div className="card-body">
        <h5>Harga Mobil : Rp {harga} Miliyar</h5>
        <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
        <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
        <button onClick={beli} className="button">
          Beli
        </button>
      </div>
    </div>
  );
};

export default Car;
