import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";
import logo from "../../image/shiina.png";

const Login = () => {
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
                  <h3 class="title text-info mt-3">Login</h3>
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
                    <input class="input" id="pw" type="password" placeholder="*****" />
                  </p>
                </div>
                <div class="field mt-5">
                  <p class="control">
                    <button class="button is-success has-text-white is-fullwidth">
                      Login
                    </button>
                  </p>
                  <div class="field">
                    <p className="mt-3">
                      Belum punya akun? <NavLink to="/register">Daftar</NavLink>
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

export default Login;
