import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6" data-aos="fade-right">
              <h1>Association of Civil Engineering</h1>
              <p className="lead">
                Empowering future civil engineers through knowledge, innovation, and collaboration.
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-ace">
                  Learn More
                </Link>
                <Link to="/events" className="btn btn-outline-ace ms-3">
                  Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links section-padding">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Quick Links</h2>
            <p>Explore our key sections and resources</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
              <Link to="/faculty" className="card-ace h-100">
                <div className="card-body">
                  <h3>Faculty</h3>
                  <p>Meet our distinguished faculty members</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
              <Link to="/team" className="card-ace h-100">
                <div className="card-body">
                  <h3>Team</h3>
                  <p>Our association's team members</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
              <Link to="/events" className="card-ace h-100">
                <div className="card-body">
                  <h3>Events</h3>
                  <p>Upcoming talks and events</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
              <Link to="/courses" className="card-ace h-100">
                <div className="card-body">
                  <h3>Courses</h3>
                  <p>Course details and curriculum</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;