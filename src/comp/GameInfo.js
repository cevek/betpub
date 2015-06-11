import {formatAMPM, getOrdinal} from '../Utils';
import {v, React} from './../lib/V';

export class GameInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let game = this.props.game;
        return v('.game-info',
            v('.top',
                v('.game-name', game.eventType.league.name + ' – ' + game.eventType.name),
                v('.date',
                    v('.mode', game.isLive() ? 'Live' : 'Scheduled'),
                    v('.start-date',
                        game.isLive()
                            ? 'Started at ' + formatAMPM(game.date)
                            : game.date.toString()
                    )
                )
            ),
            v('.team.team1', game.team1.name),
            game.isLive() &&
            v('.score',
                v('.big', game.team1Score + ':' + game.team2Score),
                v('', game.activeMinute() + "' " + getOrdinal(game.activePeriod()) + ' period')
            ),
            v('.team.team2', game.team2.name)
        );
    }
} 