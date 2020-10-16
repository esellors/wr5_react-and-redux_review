import React from 'react';
import './App.css';
import Header from './Components/Header';
import MoodInput from './Components/MoodInput';
import MoodHistory from './Components/MoodHistory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    const userName = window.prompt('What is your name?');

    this.setState({ name: userName })
  }

  sendEntry = moodObj => {
    const newEntries = [ moodObj, ...this.state.entries]

    this.setState({ entries: newEntries });
  }

  render() {
    return (
      <div className="App">
        <Header /> 
        <MoodInput sendEntry={this.sendEntry} userName={this.state.name} />
        <MoodHistory />
      </div>
    );
  }
}

export default App;
