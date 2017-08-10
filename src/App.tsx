import * as React from 'react';
import './App.css';

const ClicketyClack = require('react-clicketyclack').default;

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
      <div className="root">
        <div className="header">
          <div className="acrylic acrylic-light shadow">
            <div className="header-text">
              <h1 style={{ color: 'black' }}>David Bottiau</h1>
              <h3 style={{ color: '#404040' }}>Software developer</h3>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="acrylic acrylic-dark shadow" style={{ minHeight: 70 }}>
            <div className="content-text">
              <ClicketyClack className="ClicketyClack" lines={keywordLines} speed={100} pause={2000} />
              <span className="ClicketyClack__cursor">_</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-link acrylic acrylic-light shadow">
            <span className="fa fa-4x fa-github" />
          </div>

          <div className="footer-link acrylic acrylic-light shadow">
            <span className="fa fa-4x fa-twitter" />
          </div>

          <div className="footer-link acrylic acrylic-light shadow">
            <span className="fa fa-4x fa-linkedin-square" />
          </div>

          <div className="footer-link acrylic acrylic-light shadow">
            <span className="fa fa-4x fa-medium" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
