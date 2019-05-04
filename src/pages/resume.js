import React from 'react';
import Page from '../components/Page';
import { PROJECTS } from '../data';

const Resume = () => (
  <Page title="Resume">
    <div className="alert alert-secondary mb-5 hide-for-printing">
      To save this as a PDF, open the Print dialog and select "Save as PDF".
    </div>

    <div className="row">
      <div className="col-12 col-12 mb-3">
        <h1>Resume - Kevin Qi</h1>
      </div>

      <div className="col-12 col-sm-8">
        <h2 className="ResumeHeader">Summary</h2>
        <SummarySection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Experience</h2>
        <ExperienceSection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Selected projects</h2>
        <ProjectsSection className="mt-3 mb-5" />

        <h2 className="ResumeHeader">Education</h2>
        <div className="mt-3 mb-5">
          <h3>Carnegie Mellon University</h3>
          <p>B.S. in Computer Science, 2006-2009</p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-4">
        <h2 className="ResumeHeader">Contact</h2>
        <ContactSection
          className="mt-3 mb-5"
          email="iqnivek@gmail.com"
          github="kevinsqi"
          website="https://kevinqi.com"
        />

        <h2 className="ResumeHeader">Skills</h2>
        <div className="mt-3 mb-5">
          <ul className="list-unstyled">
            <li>Javascript, Typescript, Flow, NodeJS</li>
            <li>React, Redux</li>
            <li>Python, Flask</li>
            <li>Ruby, Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>Conversant in Mandarin Chinese</li>
          </ul>
        </div>
      </div>
    </div>
  </Page>
);

function SummarySection(props) {
  return (
    <div className={props.className}>
      <p>
        I'm a full-stack software engineer with 8 years of experience working at web startups. I
        write readable, well-documented and tested code&mdash;while still iterating quickly. I
        believe in being involved with a product holistically, including working on specs, metrics,
        and product impact. I try to make a strong team impact by introducing scalable design
        systems and reusable components. I also enjoy writing open source projects.
      </p>
      <p>
        I'm interested in working at companies with driven teams where I can help build interesting,
        impactful products.
      </p>
    </div>
  );
}

function ExperienceSection(props) {
  return (
    <div className={props.className}>
      <Job name="Amino" position="Senior software engineer" startDate="Jan 2017" endDate="present">
        <ul>
          <li>Lead engineer on the HSA banking product.</li>
        </ul>
      </Job>
      <Job
        name="PatientsLikeMe"
        position="Senior software engineer"
        startDate="Dec 2014"
        endDate="Aug 2016"
      >
        <ul>
          <li>
            Built React frontend for general-purpose patient interview framework, and wrote dozens
            of other React components.
          </li>
          <li>
            Helped introduce technologies and best practices, including React/ES6/webpack and
            javascript testing. Gave presentations on GraphQL, ES6 best practices, and React.
          </li>
          <li>
            Open-sourced two react components,{' '}
            <a href={PROJECTS.react_calendar_heatmap.github}>react-calendar-heatmap</a> and{' '}
            <a href={PROJECTS.react_circular_progressbar.github}>react-circular-progressbar</a>.
          </li>
          <li>
            Quickly learned and handled development on{' '}
            <a href={PROJECTS.patientslikeme_app.website}>PLM Connect iOS app</a> for two months,
            adding treatment reports and other features to the app.
          </li>
        </ul>
      </Job>

      <Job name="Panjiva" position="Software engineer" startDate="May 2011" endDate="Apr 2014">
        <ul>
          <li>
            Revamped a shipment search interface with sophisticated refinements and filtering, and
            built an interface to visualize Chinese trade data. Worked on numerous projects on
            homepage, search, subscription flows, and user dashboard. Improved conversion rate of
            high-traffic public company profiles.
          </li>
          <li>
            Helped introduce performance monitoring via NewRelic, acceptance testing, easier A/B
            testing, and established a code review process.
          </li>
        </ul>
      </Job>

      <Job
        name="Lockheed Martin"
        position="Software engineer"
        startDate="Jan 2010"
        endDate="May 2011"
      >
        <ul>
          <li>
            Developed major frontend improvements to an emergency preparedness training application
            built with Ruby on Rails.
          </li>
        </ul>
      </Job>
    </div>
  );
}

function ProjectsSection(props) {
  return (
    <div className={props.className}>
      <h3>react-circular-progressbar</h3>
      <p>
        <a className="text-muted" href={PROJECTS.react_circular_progressbar.github}>
          {PROJECTS.react_circular_progressbar.github}
        </a>
        <br />
        {PROJECTS.react_circular_progressbar.description}
      </p>

      <h3>react-calendar-heatmap</h3>
      <p>
        <a className="text-muted" href={PROJECTS.react_calendar_heatmap.github}>
          {PROJECTS.react_calendar_heatmap.github}
        </a>
        <br />
        {PROJECTS.react_calendar_heatmap.description}
      </p>

      <h3>react-piano</h3>
      <p>
        <a className="text-muted" href={PROJECTS.react_piano.github}>
          {PROJECTS.react_piano.github}
        </a>
        <br />
        {PROJECTS.react_piano.description}
      </p>
    </div>
  );
}

function ContactSection({ className, email, github, website }) {
  return (
    <div className={className}>
      <ul className="list-unstyled">
        <li>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          Website: <a href={website}>{website}</a>
        </li>
        <li>
          Github: <a href={`https://github.com/${github}`}>@{github}</a>
        </li>
      </ul>
    </div>
  );
}

const Job = ({ name, position, startDate, endDate, children }) => (
  <div>
    <h3>{name}</h3>
    <p className="text-muted">
      {position ? `${position}, ` : null}
      {startDate}
      {endDate ? `–${endDate}` : null}
    </p>

    {children}
  </div>
);

export default Resume;
