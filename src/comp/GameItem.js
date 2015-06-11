import {getOrdinal, formatAMPM} from '../Utils';
import {v, React} from './../lib/V';


export class GameItem extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        location.hash = '/game/' + this.props.game.id;
    }

    render() {
        let game = this.props.game;
        return v('.item', {onTouchTap: ()=>this.click()},
            v('div',
                v('span', formatAMPM(game.date)),
                game.isLive() ?
                    v('span',
                        ' [ ' + game.team1Score + ':' + game.team2Score + ' ] ' +
                        game.activeMinute() + '\' ' +
                        getOrdinal(game.activePeriod()) + ' period'
                    ) : null
            ),
            v(game.team1.name + '–' + game.team2.name)
        );
    }
} 