import * as React from 'react';
import './App.css';
import './FluentDesign.css';
import './Motion.css';
const ClicketyClack = require('react-clicketyclack').default;

const rootClassName = 'root ' + (navigator.appName === 'Microsoft Internet Explorer' ? 'ie-browser' : 'not-ie-browser');

const keywordLines = [
  '#microsoft #windows10 #surface',
  '#gaming #fun #xbox :)',
  '#twitter #hashTag #noKidding',
  '#lean #kanban #shuHaRi #kaizen',
  '#uwp #csharp #fsharp',
  '#quality #agile #devOps #continuousIntegration',
  '#js #typescript #node #react',
  '#github #commit #pullRequest #openSource'
].sort(() => 0.5 - Math.random());

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={rootClassName}>
        <div className="header">
          <div className="acrylic acrylic-light shadow">
            <div className="header-text">
              <h1 style={{ color: 'black' }}>David Bottiau</h1>
              <h3 style={{ color: '#404040', marginLeft: 2 }}>Software developer</h3>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="content-element acrylic acrylic-dark shadow" style={{ minHeight: 70 }}>
            <div className="content-text">
              <ClicketyClack className="ClicketyClack" lines={keywordLines} speed={100} pause={2000} />
              <span className="ClicketyClack__cursor">_</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <div
            className="footer-link acrylic acrylic-light shadow"
            onClick={() => window.open('https://github.com/Odonno')}
          >
            <span className="fa fa-4x fa-github" />
          </div>

          <div
            className="footer-link acrylic acrylic-light shadow"
            onClick={() => window.open('https://twitter.com/dbottiau')}
          >
            <span className="fa fa-4x fa-twitter" />
          </div>

          <div
            className="footer-link acrylic acrylic-light shadow"
            onClick={() => window.open('https://fr.linkedin.com/in/david-bottiau')}
          >
            <span className="fa fa-4x fa-linkedin-square" />
          </div>

          <div
            className="footer-link acrylic acrylic-light shadow"
            onClick={() => window.open('https://medium.com/@dbottiau')}
          >
            <span className="fa fa-4x fa-medium" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
