import {AbstractGamePage} from './AbstractGamePage';
import {GameInfo} from './GameInfo';
import {Loader} from './Loader';
import {LineUp} from './LineUp';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';
import {routes} from '../routes';
//import {storage} from '../storage';


export class GamePage extends AbstractGamePage {
    enterGame(gameId) {
        routes.gameContests.goto({id: gameId});
    }

    render() {
        let game = this.game;
        if (!game) {
            return this.root(v(Loader));
        }

        return this.root(
            v(GameInfo, {game: game}),

            v('.enter', {onclick: ()=>this.enterGame(game.id)},
                v('button', 'Enter this game')
            ),

            v('h3', 'Lineup – ' + game.team1.name),
            v(LineUp, {players: game.team1.players}),

            v('h3', 'Lineup – ' + game.team2.name),
            v(LineUp, {players: game.team2.players})
        );
    }
}