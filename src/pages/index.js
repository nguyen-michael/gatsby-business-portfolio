import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import TimelineItem from "../components/TimelineItem"
import "../../assets/css/index.css"

export default function Home({ data }) {
  const dataNodes = data.allTimelineYaml.edges
  console.log(dataNodes);

  return (
    <>
      <Layout title="Sathvik Aithala | Business & Data Analyst">
        <header>
          <div className="splash">
            <div className="container header-container">
              <h3 className="subtitle text-center"> Hi, I'm </h3>
              <h1 className="name text-center">
                <b>SATHVIK AITHALA</b>
              </h1>
              <h3 className="subtitle text-center">Business & Data Analyst</h3>
            </div>
          </div>
        </header>
        <section className="container text-center">
          <h1 className="title">
            <br />
            Welcome to my page!
          </h1>
          <h3 className="subtitle">
            <br />
            Stick around to{" "}
            <Link className="link" to="#aboutme">
              get to know me
            </Link>
            , <br /> check out{" "}
            <Link className="link " to="#portfolio">
              my projects
            </Link>
            , and{" "}
            <Link className="link" to="/contact">
              get in touch
            </Link>
            .{" "}
          </h3>
          <br />
          <br />
          <br />
        </section>
        <section className="container-color" id="aboutme">
          {" "}
        </section>

        <section className="container">
          <div className="card custom-card">
            <div className="card-body">
              <img
                src="/headshot.png"
                className="headshot"
                alt="Sathvik Aithala"
              />

              <h3 className="card-title">About Me</h3>
              <p className="card-text">
                My name is Sathvik, and I'm a business and data analyst with a
                passion for helping <br /> businesses explore, utilize, and
                visualize their data to drive decisions.
                <br />
                <br /> Throughout my career, I have worked in business,
                research, medical, engineering, <br /> and service-sector
                environments. Through these varied experiences, I have always{" "}
                <br />
                been intrigued by the power of data, and by how many companies
                are either unable <br /> or unwilling to unleash this power to
                guide their business decisions.
                <br />
                <br /> I believe that, with a little effort and a deep
                understanding of the data available, <br />
                businesses can be taken from <i>good</i> to{" "}
                <b>
                  <i>great</i>
                </b>
                .
              </p>
              <h3 className="card-title">
                <br />
                <hr />
                <br />
                <br />
                Skills & Tools:
              </h3>
              <p className="card-text">
                PowerBI, Tableau, R
                <br /> Python, SQL, Matlab, VBA
                <br /> JavaScript, HTML, CSS
                <br /> Excel, PowerPoint, Word
                <br /> Data Pipelining (ETL)
                <br /> Machine Learning
                <br /> Big Data
                <br /> Customer Experience Enhancement
                <br /> Survey Design, Deployment, and Analysis
                <br /> Technical Report Writing
                <br />
                <br />
              </p>
            </div>
            <section className="container-color"> </section>
          </div>
        </section>
        <section className="info-container" id="links">
          <div className="container">
            <hr />
            <h1 className="title">Associated Links</h1>
            <br />

            <section className="container skill-container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="row text-center">
                    <div className="col">
                      <div className="skill-bar-title">
                        <a
                          href="https://resume.io/r/44XvNfulQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Want to know more about me? Click here to see my resume."
                          className="link"
                        >
                          <i className="fas fa-file fa-3x"></i>
                        </a>
                        <p>Resume</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-bar-title">
                        <a
                          href="https://www.avadata.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Check out my Data Analytics Consulting firm, AvaData Solutions, Inc. We specialize in helping small businesses understand, organize, and visualize their data."
                          className="link"
                        >
                          <i className="fas fa-globe fa-3x"></i>
                        </a>
                        <p>AvaData Solutions</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-bar-title">
                        <a
                          href="https://linkedin.com/in/sathvikaithala"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect with me on LinkedIn!"
                          className="link"
                        >
                          <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        <p>LinkedIn</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-bar-title">
                        <a
                          href="https://github.com/sathvikaithala"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Check out my past and current projects on GitHub."
                          className="link"
                        >
                          <i className="fab fa-github fa-3x"></i>
                        </a>
                        <p>GitHub</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="skill-bar-title">
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/?term=Sathvik+Aithala"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Here are four publications I was involved with in my time as a Research Assitant at MD Anderson."
                          className="link"
                        >
                          <i className="fas fa-scroll fa-3x"></i>
                        </a>
                        <p>Publications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="container" id="portfolio">
          <hr />
          <h1 className="title">Portfolio</h1>
          <h3 className="subtitle">
            Here are a few of my favorite projects.
          </h3>{" "}
          More can be found at my{" "}
          <a
            href="https://github.com/sathvikaithala"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub Repository.
          </a>
        </section>

        <div className="container">
          <div id="timeline">
            {dataNodes
              ? dataNodes.map((item, index) => {
                  return <TimelineItem {...item.node} key={item.node.title} isRight={index % 2 !== 0} />
                })
              : null}
          </div>
        </div>

        <section className="container info-container" id="education">
          <hr />
          <h1 className="title">Education </h1>
          <article className="info-item">
            <h3 className="subtitle">The University of California, Berkeley</h3>
            <span className="text-muted">Data Analytics Boot Camp | 2020</span>
          </article>
          <article className="info-item">
            <h3 className="subtitle">The University of Texas at Austin</h3>
            <span className="text-muted">
              B.S Physics, Radiation Physics and Nuclear Engineering | 2012 -
              2016
            </span>
          </article>
        </section>

        <section className="container-dark text-center" id="contact">
          <div className="container">
            <h1>Contact Me&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <h3 className="intro subtitle">
              <a
                href="https://linkedin.com/in/sathvikaithala"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/sathvikaithala"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:<sathvik.aithala@gmail.com>"
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
                className="social-icon"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </h3>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allTimelineYaml {
      edges {
        node {
          githubURL
          description
          otherURL {
            title
            icon
            url
          }
          title
          icon
          toolsSkills
        }
      }
    }
  }
`
