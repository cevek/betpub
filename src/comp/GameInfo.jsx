import React from 'react';
let {formatAMPM, getOrdinal} = require('../Utils');
export default class GameInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let game = this.props.game;
        return (
            <div className="game-info">
                <div className="top">
                    <div className="game-name">
                        {game.eventType.league.name + ' – ' + game.eventType.name}
                    </div>
                    <div className="date">
                        <div className="mode">{game.isLive() ? 'Live' : 'Scheduled'}</div>
                        <div className="start-date">
                            {game.isLive() ? 'Started at ' + formatAMPM(game.date) : game.date.toString()}
                        </div>
                    </div>
                </div>
                <div className="team team1">
                    {game.team1.name}
                </div>

                {game.isLive() ?
                    <div className="score">
                        <div className="big">{game.team1Score + ':' + game.team2Score}</div>
                        <div>{game.activeMinute() + '\' ' + getOrdinal(game.activePeriod()) + ' period'}</div>
                    </div>
                    : null
                }
                <div className="team team2">
                    {game.team2.name}
                </div>
            </div>
        );
    }
} 