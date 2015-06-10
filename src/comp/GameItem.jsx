let React = require('./Dom');
let {getOrdinal, formatAMPM} = require('../Utils');

export default class GameItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let game:Game = this.props.game;
        return (
            <div className='item'>
                <div>
                    <span>{formatAMPM(game.date)}</span>
                    {game.isLive() ?
                        <span>
                            {' [ ' + game.team1Score + ':' + game.team2Score + ' ] ' +
                            game.activeMinute() + '\' ' +
                            getOrdinal(game.activePeriod()) + ' period'}
                        </span> : null}
                </div>
                <div>
                    {game.team1.name + '–' + game.team2.name}
                </div>
            </div>
        );
    }
} 