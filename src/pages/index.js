import React from 'react';
import Link from 'gatsby-link';
import Nav from '../components/Nav';
import Projects from './Projects';

const IndexPage = () => (
  <div>
    <div className="intro py-5">
      <Nav className="mb-6" />

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <p className="font-weight-light text-1 mb-0">
              Software engineer versed in web and design. Based in San Francisco.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-3">
      <Projects />
    </div>
  </div>
);

export default IndexPage;
