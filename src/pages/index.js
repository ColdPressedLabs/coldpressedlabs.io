import * as React from "react"
import { CustomLayout } from '../components/layout';
import { Navbar } from '../components/layout/navbar';
import { Footer } from '../components/layout/footer';


const PlaceholderImage = ({title, width, height}) => <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width={width} height={height} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6"  dominant-baseline="middle" text-anchor="middle" dy=".3em">{title}</text>
              </svg>

const Section = ({children}) => <section style={{marginTop: "150px", marginBottom: "150px"}}>
    {children}
  </section>

const Background = () => <div style={{width: "100%", height: "300vh", position: "absolute", display: "block", zIndex: "-1", top: "0"}}>
      <div style={{
        background: "linear-gradient(170deg, rgba(30,50,70,1) 0%, rgba(80,120,175,1) 30%, rgba(100,200,255,1) 60%, rgba(166,240,255,0) 70%)",
        //clipPath: "polygon(0 0, 100% 0%, 100% 60%, 0 100%)",
        width: "100%", height: "1000px"
      }}>
      </div>
  </div>

const IndexPage = () => {
  return <CustomLayout>
    <Navbar transparent />
    <Background />
    <main style={{minHeight: "900px"}}>
      <div class='container-xxl'>
        <Section>
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
        </Section>
        <Section>
          <div class='row'>
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
        </Section>
        <Section>
          <div class='row mt-5 mb-5'>
            <div class='col'>
              <h1>3-6 Month Sprints</h1>
              <p class="h4">
                We support early stage tech companies who need to rapidly and reliably get early software products and services to market while testing core business hypotheses.
              </p>
            </div>
            <div class='col'>
              <PlaceholderImage width="100%" height="400px" title="IMAGE" />
            </div>
          </div>
        </Section>
        <Section>
          <div class='row mt-5 mb-5'>
            <div class='col'>
              <PlaceholderImage width="100%" height="400px" title="IMAGE" />
            </div>
            <div class='col'>
              <h1>Experts at Computational Finance</h1>
              <p class="h4">
                The team has years of experience building financial systems such as payments and underwriting in multiple geographies as well as enterprise software solutions.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div class='row mt-5 mb-5'>
            <div class='col'>
              <h1>Cloud-based solutions</h1>
              <p class="h4">
                We pair with the main cloud providers to build proprietary b2b and b2c cloud based software services.
              </p>
            </div>
            <div class='col'>
              <PlaceholderImage width="100%" height="400px" title="IMAGE" />
            </div>
          </div>
        </Section>
      </div>
    </main>
    <Footer />
  </CustomLayout>
}

export default IndexPage
