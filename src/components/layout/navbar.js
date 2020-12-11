import * as React from "react"
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Navbar = ({transparent}) => {
  const backgroundClass = transparent ? "" : "bg-light";
  const navClass = transparent ? "navbar-dark" : "navbar-light";
  return (
    <div class={`container-fluid ${backgroundClass}`}>
      <nav class={`navbar navbar-expand-lg ${navClass} container-xxl`}>
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">Cold Pressed Labs</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to="/careers">Careers</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
