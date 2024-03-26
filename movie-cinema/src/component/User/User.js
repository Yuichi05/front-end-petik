import "./User.css";

const User = (props) => {
  // const { nama, alamat, angkatan, hobi, isStatus, lihat, gambar } = props;
  const { nama, member, message, subscribe } = props;

  const handleClick = () => {
    message(nama); // Melihat nama sesuai yg kita klik
  };
  // const tableStyle = {
  //   border: "1px solid black",
  //   width: "300px",
  //   margin: "20px auto",
  // };
  // const headerStyle = { textAlign: "center", fontWeight: "bold" };
  // const cellStyle = { textAlign: "center" };
  return (
    <div>
      {/* <ul> */}
      <table className="card">
        <thead className="card-head">
          <tr>
            <td colSpan={2}>{nama}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr className="member">
            <td colSpan={2}>{member}</td>
          </tr>
          <tr>
            <td>
              <button onClick={handleClick}>message</button>
            </td>
            <td>
              <button onClick={subscribe}>subscribe</button>
            </td>
          </tr>
        </tbody>

        {/* <img src={gambar} alt="" width="150px" />
          <li>Nama : {nama}</li>
          <li>Alamat : {alamat}</li>
          <li>Angkatan : {angkatan}</li>
          <li>Hobi : {hobi}</li>
          <li>Status : {isStatus ? "Lulus" : "Sedang Belajar"}</li>
          <button onClick={handleClick}>Lihat</button> */}
      </table>
      {/* </ul> */}
    </div>
  );
};

export default User;
