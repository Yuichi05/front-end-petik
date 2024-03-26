const User = (props) => {
	const { nama, alamat, angkatan, hobi, isStatus, lihat, gambar } = props;
  
	const handleClick = () => {
	  lihat(nama); // Melihat nama sesuai yg kita klik
	};
	return (
	  <div>
		<ul>
		  <img src={gambar} alt="" width="150px" />
		  <li>Nama : {nama}</li>
		  <li>Alamat : {alamat}</li>
		  <li>Angkatan : {angkatan}</li>
		  <li>Hobi : {hobi}</li>
		  <li>Status : {isStatus ? "Lulus" : "Sedang Belajar"}</li>
		  <button onClick={handleClick}>Lihat</button>
		</ul>
	  </div>
	);
  };
  
  export default User;
  