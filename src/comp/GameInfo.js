import {formatAMPM, getOrdinal} from '../Utils';
import {v, Component} from './../lib/V';

export class GameInfo extends Component {
    render() {
        let game = this.props.game;
        return this.root(
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