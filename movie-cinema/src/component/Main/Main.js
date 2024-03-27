import Movies from "../Movies/Movies.js";
import "./Main.css";
import "../Movies/Movies.css"
import Hero from "../Hero/Hero.js";
import Users from "../Users/Users.js";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Movies />
      <Users />
    </div>
  );
};

export default Main;
