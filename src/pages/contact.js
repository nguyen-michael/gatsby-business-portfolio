import React from "react"
import Layout from "../components/Layout"

import "../../assets/css/index.css"

export default function Contact() {
  return (
    <>
      <Layout title="Contact Me | Sathvik Aithala">
        <header>
          <div className="splash">
            <div className="container header-container">
              <h3 className="subtitle text-center">How To</h3>
              <h1 className="name text-center">
                <b>GET IN TOUCH</b>
              </h1>
            </div>
          </div>
        </header>

        <section className="info-container" id="links">
          <div className="container">
            <section className="container skill-container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="row text-center">
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
                          title="Collaborate with me on GitHub."
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
                          href="mailto:<sathvik.aithala@gmail.com>"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Send me an email."
                          className="link"
                        >
                          <i className="fas fa-envelope fa-3x"></i>
                        </a>
                        <p>Email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="container-dark text-center">
          <div className="container"></div>
        </section>
      </Layout>
    </>
  )
}
