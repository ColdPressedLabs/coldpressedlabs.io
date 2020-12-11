import * as React from "react"
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Footer = () => {
  return <footer style={{minHeight: "300px"}} className='bg-dark bg-gradient text-light pt-5'>
    <div class="container-xxl">
      <div class='row'>
        <div class='col-sm'>
          <Link className="navbar-brand" to="/">Cold Pressed Labs</Link>
        </div>
        <div class='col-sm'>
          
        </div>
        <div class='col-sm'>
          <Link className="nav-link" to="/careers">Careers</Link>
        </div>
        <div class='col-sm'>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>
    </div>
  </footer>
}
