import * as React from "react"
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Navbar } from './navbar';
import { Footer } from './footer';
import "./style.css";

export const CustomLayout = ({children}) => {
  return <>
    <Helmet>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet" /> 
    </Helmet>
    { children }
  </>
}

export const Layout = ({children}) => {
  return <CustomLayout>
    <Navbar />
    <div class='container-xxl'>
      { children }
    </div>
    <Footer />
  </CustomLayout>
}
