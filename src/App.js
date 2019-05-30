import React, { Component } from "react";
import Episode from "./Episode";
import Sherlock from "./data/Sherlock.json";
import EpisodeSelector from "./EpisodeSelector";
import "./App.css";

class App extends Component {
  state = { searchEpisodes: Sherlock };
  onSelectChange = e => {
    const r = e.target.value;
    console.log(e.target.value);
    this.setState(prev => {
      return { searchEpisodes: Sherlock.filter(eposide => eposide.name === r) };
    });
  };
  reloadAllEposides = () => {
    this.setState({ searchEpisodes: Sherlock });
  };
  componentDidMount() {
    this.setState({ searchEpisodes: Sherlock });
    console.log(Sherlock);
  }
  render() {
    return (
      <div className="flext-container">
        <h1 className="shaerlock">Sherlock</h1>
        <EpisodeSelector
          onSelectChange={this.onSelectChange}
          data={Sherlock}
          reloadAllEposides={this.reloadAllEposides}
        />
        {this.state.searchEpisodes.map(episode => (
          <Episode key={episode.id} data={episode} />
        ))}
      </div>
    );
  }
}

export default App;
