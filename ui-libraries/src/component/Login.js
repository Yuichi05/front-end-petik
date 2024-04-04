import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form action="" className="box">
                <h3 class="title text-primary">Login</h3>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <label for="">Email</label>
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <label for="">Password</label>
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field mt-5">
                  <p class="control text-end">
                  <NavLink className="text-light mx-3 text-decoration-none" to={'/'}>Back</NavLink>
                    <button class="button is-success">Login</button>
                  </p>
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
