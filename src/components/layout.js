import * as React from "react"
import { Helmet } from 'react-helmet';

const Navbar = () => {
  return (
    <div class="container-fluid bg-light">
      <nav class="navbar navbar-expand-lg navbar-light bg-light container-xxl">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Cold Pressed Labs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/careers">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

const Footer = () => {
  return <footer style={{minHeight: "300px"}} className='bg-dark bg-gradient text-light pt-5'>
    <div class="container-xxl">
      <div class='row'>
        <div class='col-sm'>
          Cold Pressed Labs
        </div>
        <div class='col-sm'>
          
        </div>
        <div class='col-sm'>
          Careers
        </div>
        <div class='col-sm'>
          About
        </div>
      </div>
    </div>
  </footer>
}

export const Layout = ({children}) => {
  return <>
    <Helmet>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </Helmet>
    <Navbar />
    <div class='container-xxl'>
      { children }
    </div>
    <Footer />
  </>
}

export const CustomLayout = ({children}) => {
  return <>
    <Helmet>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </Helmet>
    <Navbar />
    { children }
    <Footer />
  </>
}
