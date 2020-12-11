import * as React from "react"
import { CustomLayout } from '../components/layout';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#8954A8",
}

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
]

const PlaceholderImage = ({title, width, height}) => <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width={width} height={height} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6"  dominant-baseline="middle" text-anchor="middle" dy=".3em">{title}</text>
              </svg>

// markup
const IndexPage = () => {
  return <CustomLayout>
    <div style={{
        background: "linear-gradient(170deg, rgba(30,50,70,1) 0%, rgba(80,120,175,1) 30%, rgba(100,200,255,1) 60%, rgba(166,240,255,0) 70%)",
        position: "absolute", height: "800px", display: "block", width: "100%", zIndex: "-1",
        clipPath: "polygon(0 0, 100% 0%, 100% 60%, 0 100%)",
      }}>
    </div>
    <main style={{paddingTop: "120px", minHeight: "900px"}}>
      <div class='container-xxl'>
        <div class='row'>
          <div class='col-8'>
            <title>Home Page</title>
            <h1 class='display-1 text-light'>
              <strong>
              From idea<br />
              to full fledged startup<br />
              in 3 months
              </strong>
            </h1>
            <p class="h4 text-light">
              Cold Pressed Labs brings dedicated developers and project planning together to incubate and deliver full cloud based services.
            </p>
            <p class="h4 text-light">
              We partner with talented founders and developers to turn ideas into startups.
            </p>
            <button className='btn btn-primary btn-lg rounded-pill mt-4'>
              Launch my Startup &nbsp;
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
          <div class='col'>
            <PlaceholderImage width="100%" height="500px" title="HERO IMAGE" />
          </div>
        </div>
        <div class='row' style={{marginTop: "150px"}}>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
        </div>
        <div class='row mt-4 mb-5'>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
          <div class='col'>
              <PlaceholderImage width="100%" height="100" title="LOGO" />
          </div>
        </div>
      </div>
    </main>
  </CustomLayout>
}

export default IndexPage
