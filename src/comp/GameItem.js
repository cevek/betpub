import {getOrdinal, formatAMPM} from '../Utils';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';
import {routes} from '../routes';



export class GameItem extends Component {
    dontConsole = true;

    click() {
        routes.game.goto({id: this.props.game.id});
    }

    render() {
        let game = this.props.game;
        return this.root({onclick: ()=>this.click()},
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