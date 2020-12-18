import * as React from "react"
import { Layout } from '../components/layout';


const PlaceholderImage = ({title, width, height}) => <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width={width} height={height} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6"  dominant-baseline="middle" text-anchor="middle" dy=".3em">{title}</text>
              </svg>

const Section = ({children}) => <section style={{marginTop: "150px", marginBottom: "150px"}}>
    {children}
  </section>

const IndexPage = () => {
  return <Layout>
    <main style={{minHeight: "900px"}}>
      <div class='container-xxl'>
        <Section>
          <div class='row justify-content-center'>
            <div class='col-8'>
              <h1 class='display-3 text-center'>
                Our mission is to construct the companies of the future
              </h1>
              <p class='h4 text-center text-muted'>
Cold Pressed Labs assembles highly motivated and experienced teams to build proprietary b2b and b2c cloud based software services in 3 to 6 month sprints.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div class='row mt-5 mb-5'>
            <div class='col col-9'>
              <h1>3-6 Month Sprints</h1>
              <p class="h4">
                We support early stage tech companies who need to rapidly and reliably get early software products and services to market while testing core business hypotheses.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div class='row mt-5 mb-5'>
            <div class='col col-9 offset-3 text-end'>
              <h1>Experts at Computational Finance</h1>
              <p class="h4">
                The team has years of experience building financial systems such as payments and underwriting in multiple geographies as well as enterprise software solutions.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div class='row mt-5 mb-5'>
            <div class='col col-9'>
              <h1>Cloud-based solutions</h1>
              <p class="h4">
                We pair with the main cloud providers to build proprietary b2b and b2c cloud based software services.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  </Layout>
}

export default IndexPage
