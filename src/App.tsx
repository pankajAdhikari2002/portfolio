import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand fs-2" href="#home">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="section hero d-flex align-items-center">
          <div className="container text-center">
            <h1 className="display-5 fw-bold mb-4">Hey, this is Pankaj</h1>
            <div className="typing-text">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'Python Fanatic',
                  1000,
                  'Cybersecurity Enthusiast',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="lead"
              />
            </div>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-wrapper">
              <div className="about-card">
                <div className="about-card-inner">
                  <div className="about-card-front">
                    <div className="about-image">
                      <img src="/src/assets/my-character.png" alt="Profile" />
                    </div>
                    <h3>Pankaj Adhikari</h3>
                    <p className="role">Full Stack Developer</p>
                  </div>
                  <div className="about-card-back">
                    <div className="about-content">
                      <p>
                        A passionate developer with expertise in web technologies and cybersecurity.
                        I love creating elegant solutions to complex problems.
                      </p>
                      <div className="stats">
                        <div className="stat-item">
                          <span className="stat-number">3+</span>
                          <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">20+</span>
                          <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">15+</span>
                          <span className="stat-label">Happy Clients</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-details align-left">
                <div className="detail-item">
                  <h4>Education</h4>
                  <p>Bachelor's in Computer Science</p>
                </div>
                <div className="detail-item">
                  <h4>Hobbies</h4>
                  <p>Reading tech blogs, hiking, and playing chess.</p>
                </div>
                <div className="detail-item">
                  <h4>Goals</h4>
                  <p>To contribute to open-source projects and mentor aspiring developers.</p>
                </div>
                <div className="detail-item">
                  <h4>Skills</h4>
                  <ul className="skills-list">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <img src="src/assets/project1.jpg" alt="Project 1" />
                </div>
                <div className="project-content">
                  <h3>E-Commerce Platform</h3>
                  <p>A full-stack e-commerce platform with user authentication, product management, and payment integration.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-outline">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src="src/assets/project2.jpg" alt="Project 2" />
                </div>
                <div className="project-content">
                  <h3>Task Management App</h3>
                  <p>A collaborative task management application with real-time updates and team features.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Firebase</span>
                    <span>Material-UI</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-outline">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src="src/assets/project3.jpg" alt="Project 3" />
                </div>
                <div className="project-content">
                  <h3>Portfolio Website</h3>
                  <p>A modern portfolio website showcasing my work and skills with smooth animations.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Bootstrap</span>
                    <span>CSS3</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-primary">Live Demo</a>
                    <a href="#" className="btn btn-outline">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section py-5">
          <div className="container">
            <h2 className="text-center mb-5">Contact Me</h2>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <form className="contact-form">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows={5} placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Pankaj Adhikari</h3>
              <p>Full Stack Developer & Cybersecurity Enthusiast</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect With Me</h4>
              <div className="social-links text-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Pankaj Adhikari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
