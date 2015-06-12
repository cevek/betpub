import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {gameStore} from '../models/Game';
import {v, React} from './../lib/V';

export class GamePage extends React.Component {
    render() {
        let id = this.props.params.id;
        let game = gameStore.getById(id);
        return v('.game-page',
            v(GameInfo, {game: game}),

            v('.enter',
                v('button', 'Enter this game')
            ),

            v('h3', 'Lineup – ' + game.team1.name),
            v(LineUp, {players: game.team1.players}),

            v('h3', 'Lineup – ' + game.team2.name),
            v(LineUp, {players: game.team2.players})
        );
    }
}