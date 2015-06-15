import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {gameStore} from '../models/Game';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';

export class GamePage extends Component {
    enterGame(gameId) {
        go('/contests/' + gameId);
    }

    render() {
        let id = this.props.params.id;
        let game = gameStore.getById(id);
        return v('.game-page',
            v(GameInfo, {game: game}),

            v('.enter', {onclick: ()=>this.enterGame(id)},
                v('button', 'Enter this game')
            ),

            v('h3', 'Lineup – ' + game.team1.name),
            v(LineUp, {players: game.team1.players}),

            v('h3', 'Lineup – ' + game.team2.name),
            v(LineUp, {players: game.team2.players})
        );
    }
}