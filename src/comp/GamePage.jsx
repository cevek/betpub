import React from 'react';
import GameInfo from './GameInfo';
import LineUp from './LineUp';
let {gameStore} = require('../models/Game');
export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var id = this.props.params.id;
        var game:Game = gameStore.getById(id);
        return (
            <div className="game-page">
                <GameInfo game={game}/>

                <div className="enter">
                    <button>Enter this game</button>
                </div>

                <h3>Lineup – {game.team1.name}</h3>
                <LineUp players={game.team1.players}/>

                <h3>Lineup – {game.team2.name}</h3>
                <LineUp players={game.team2.players}/>
            </div>
        );
    }
}