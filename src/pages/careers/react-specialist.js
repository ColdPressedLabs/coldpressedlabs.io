import * as React from "react"
import { Layout } from '../../components/layout';


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
                Work with Cold Pressed Labs
              </h1>
              <p class='h4 text-center text-muted'>
                Cold Pressed Labs works with leading investors and entrepreneurs across the world to launch innovative software services from connected car auto insurance companies to fraud detection for payments.
              </p>
              <p class='h4 text-center text-muted'>
                We’re only as good as the people we work with and try to build highly capable and technical teams that love working together.
              </p>
              <p class='h4 text-center text-muted'>
                Some of what you can expect working with Cold Pressed are:
              </p>
              <div class='row mb-5 mt-5'>
                <div class='col-6'>
                  <h2>Remote work.<br />Work from home.</h2>
                  <p>It’s not just because of Covid, it’s the nature of our business. We are constantly working with and seeking out top development talent from around the world.</p>
                </div>
                <div class='col-6'>
                  <h2>Work directly with US/UK/EU/AUS companies.</h2>
                  <p>Talk directly with CEOs, founders and directors of companies at technological hubs.</p>
                </div>
              </div>
              <div class='row mb-5 mt-5'>
                <div class='col-6'>
                  <h2>Focus on results, not hours worked.</h2>
                  <p>
                    Use your skills and creativity to get things done, then enjoy your extra time off.
                    We disagree about billing by the hour, because we don't want you to be sitting at your chair for many hours just to make some accountant happy.
                  </p>
                </div>
                <div class='col-6'>
                  <h2>Projects with closed scopes</h2>
                  <p>
                    We aim to deliver startups in 3 months, not to pile feature upon feature upon feature.
                    We focus on what's needed, not on scope creep or bikeshedding.
                    No more never-ending expanding projects.
                  </p>
                </div>
              </div>
              <div class='row mb-5 mt-5'>
                <div class='col-12'>
                  <h2>Quick interview process</h2>
                  <p>
                    We value time; both your time, the clients' time and our time.
                    So we cut through the bullshit and we go direct to what matters.
                  </p>
                  <p>There will be two 1-hour remote interviews, and then we have an offer for you.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  </Layout>
}

export default IndexPage
