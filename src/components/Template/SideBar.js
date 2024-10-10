import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Kunal Arya</h2>
        <p>
          <a href="mailto:kunalarya873@gmail.com">kunalarya873@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Kunal. I am a skilled software engineer and full-stack web
        developer specializing in
        <a href="https://www.djangoproject.com/"> Django</a>, Python, and React.
        Last, I work as a Full-Stack Developer at
        <a href="http://abun.com"> Abun.com</a> and as a Backend Developer at
        <a href="https://www.entrepreneurshipnetwork.net/">
          The Entrepreneurship Network
        </a>
        . I am also involved with{' '}
        <a href="http://scitomepublicationhouse.com">
          Scitome Publication House
        </a>{' '}
        and
        <a href="http://kuberns.com"> Kuberns</a> as a Backend Developer.
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Kunal Arya <Link to="/">kunal</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
