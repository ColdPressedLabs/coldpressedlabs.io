import * as React from "react"
import { Layout } from '../../components/layout';
import { Section } from '../index';
import { Link } from 'gatsby';

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
              <h2>Junior React UI Developer Needed</h2>
              <p>Many of our projects need a Great Professional to construct a Great UI. You can be this Great Professional.</p>
              <p>
                At Cold Pressed Labs we work with financial and insurance startups to bring great products to life in short deadlines.
              </p>
              <p>
                As a Junior React UI Developer, you will focus on constructing UIs following mockups from designers, as well as giving feedback on how these designs have to be adapted to the reality of what can be implemented.
              </p>
              <p>
                You will work in a small team, but we understand your limitations, so there will be seniors guiding and helping you. We don't expect you to be a master of everything, and it's perfectly fine to call other people to help you on the parts that you may lack confidence.
              </p>
              <h3>Minimum requirements</h3>
              <ul>
                <li>2 years of experience doing React, HTML and CSS</li>
                <li>Ability to talk with designers, and implement their designs</li>
              </ul>
              <h3>But it would be great if you have</h3>
              <ul>
                <li>Strong gasp of Javascript beyond React</li>
                <li>Experience with React frameworks, such as NextJS or GatsbyJS</li>
                <li>Experience with NodeJS and Backend Javascript frameworks, such as ExpressJS</li>
              </ul>

              <Link to="Apply URL">Apply to offer in ...</Link>
              <div className="container text-center">
                <Link to="/careers/">Back to job offers</Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  </Layout>
}

export default IndexPage
