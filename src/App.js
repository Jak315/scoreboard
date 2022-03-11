import React from 'react';
import Player from './components/Player';
import Header from './components/Header';
import './App.css';


class App extends React.Component {

  state = {
    players: [
      {
        name: "John",
        score: 15,
        id: 1
      },
      {
        name: "Ben",
        score: 20,
        id: 2
      },
      {
        name: "Jack",
        score: 50,
        id: 3
      },
      {
        name: "Jane",
        score: 55,
        id: 4
      }
    ]
  }

  changeScore = (delta, index) => {
    this.setState(prevState => {
      const updatedPlayers = [...prevState.players]
      const updatedPlayer = { ...updatedPlayers[index] }

      updatedPlayer.score += delta
      updatedPlayers[index] = updatedPlayer
      return {
        player: updatedPlayers
      }
    })
  }

  deleteData = (paraID) => {
    this.setState(prevState => {

      return {
        players: prevState.players.filter(p => p.id !== paraID)
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length} />
        {this.state.players.map((
          player, index) =>
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            index={index}
            deleteData={this.deleteData}
            changeScore={this.changeScore}
          />
        )}
      </div>
    )
  }
}


export default App;