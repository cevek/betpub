import {Game} from '../models/Game';
import {Team} from '../models/Team';
import {GameInfo} from './GameInfo';
import {Loader} from './Loader';
import {LineUp} from './LineUp';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';
import {storage} from '../storage';


export class GamePage extends Component {
    enterGame(gameId) {
        go('/contests/' + gameId);
    }

    game;

    propsUpdated() {
        this.game = null;
        let id = this.props.params.id;
        Game.fetch(id).then(game=> {
            this.game = game;
            this.forceUpdate();
        });
    }


    render() {
        let game = this.game;
        return this.root(
            game ? v('div',
                v(GameInfo, {game: game}),

                v('.enter', {onclick: ()=>this.enterGame(game.id)},
                    v('button', 'Enter this game')
                ),

                v('h3', 'Lineup – ' + game.team1.name),
                v(LineUp, {players: game.team1.players}),

                v('h3', 'Lineup – ' + game.team2.name),
                v(LineUp, {players: game.team2.players})
            ) : v(Loader)
        );
    }
}