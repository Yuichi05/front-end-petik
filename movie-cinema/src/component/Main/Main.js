import Movies from "../Movies/Movies.js";
import "./Main.css";
import "../Movies/Movies.css"
import Hero from "../Hero/Hero.js";
import Users from "../Users/Users.js";
import Counter from "../Counter/Counter.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Movies />
      <Users />
      {/* <Counter />  */}
      {/* <AddMovieForm /> */}
    </div>
  );
};

export default Main;
