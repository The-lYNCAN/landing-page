import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import Logo from './assets/image-removebg-preview.png'
// import {Switch, Route} from 'react-router'

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="http://cypherash.com"><img style={{width: "80px", height: "48px"}} src={Logo} alt="nothing here" /></a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com/spadework_tech" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/The-lYNCAN" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Website will be available on 1st Jan after hackathon.</h1>
            {/* <p>register yourself for Spadework annual hackathon 2021 from this <a href="https://docs.google.com/forms/d/e/1FAIpQLScJ8ay3XPf2-r8yFLtDoi4FpVlhQrVOtbLZQCGrMIQmq8sOFA/viewform">link</a></p> */}
            <h1 style={{marginTop: "50px"}}>COMING SOON!!!!</h1>
          </div>
          <a href="https://www.instagram.com/spadework.tech/">
            <div className="cta">Follow us on Instagram</div>
            {/* <h1>Coming Soon</h1> */}
          </a>
        </div>
        <div className="footer">
          {/* <span>made by <a className="underlined" href="https://github.com/arkn98" target="_blank" rel="noopener noreferrer">arkn98</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span> */}
        </div>
      </div>
    );
  }
}

export default App;