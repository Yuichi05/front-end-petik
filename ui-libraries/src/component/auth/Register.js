import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";
import logo from "../../image/shiina.png";

const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form action="" className="box">
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={logo} alt="logo" width={130} />
                  </NavLink>
                  <h3 class="title text-info mt-3">Register</h3>
                </div>
                <div class="field">
                  <p class="control">
                    <label for="" className="label">
                      Username
                    </label>
                    <input class="input" id="name" type="text" placeholder="Masukkan Username" />
                  </p>
                  {/* input role user */}
                  <input class="input" type="hidden" />
                </div>
                <div class="field">
                  <p class="control">
                    <label for="" className="label">
                      Email
                    </label>
                    <input class="input" id="email" type="email" placeholder="Masukkan Email" />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <label for="" className="label">
                      Password
                    </label>
                    <input class="input" id="pw" type="password" placeholder="********" />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <label for="conf" className="label">
                      Confirm Password
                    </label>
                    <input class="input" type="password" id="conf" placeholder="********" />
                  </p>
                </div>
                <div class="field mt-5">
                  <p class="control">
                    <button class="button is-success has-text-white is-fullwidth">
                      Daftar
                    </button>
                  </p>
                  <div class="field">
                    <p className="mt-3">
                      Sudah punya akun? <NavLink to="/login">Login</NavLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
