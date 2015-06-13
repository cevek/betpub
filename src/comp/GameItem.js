import {getOrdinal, formatAMPM} from '../Utils';
import {v, React} from './../lib/V';
import {go} from './Router';


export class GameItem extends React.Component {
    click() {
        go('/game/' + this.props.game.id);
    }

    render() {
        let game = this.props.game;
        return v('.item', {onMouseDown: ()=>this.click()},
            v('div',
                v('span', formatAMPM(game.date)),
                game.isLive() ?
                    v('span',
                        ' [ ' + game.team1Score + ':' + game.team2Score + ' ] ' +
                        game.activeMinute() + '\' ' +
                        getOrdinal(game.activePeriod()) + ' period'
                    ) : null
            ),
            v('div', game.team1.name + '–' + game.team2.name)
        );
    }
} 