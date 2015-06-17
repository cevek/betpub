import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';
import {storage} from '../storage';


export class MyTeam extends Component {
    game;
    positions = null;
    playersUsed = {};

    add(player) {
        for (var i = 0; i < this.positions.length; i++) {
            var pos = this.positions[i];
            if (player.position === pos.position && !pos.player) {
                pos.player = player;
                this.playersUsed[player.id] = i;
                this.forceUpdate();
                return;
            }
        }
    }

    remove(player) {
        this.positions[this.playersUsed[player.id]].player = null;
        this.playersUsed[player.id] = null;
        this.forceUpdate();
    }

    getPlayers() {
        return this.game.team1.players;
    }

    prepareLineUp() {
        if (!this.positions) {
            this.positions = this.game.eventType.league.positions.map(pos => ({player: null, position: pos}));
        }
    }

    render() {
        let id = this.props.params.id;
        this.game = storage.games.getById(id);
        this.prepareLineUp();

        return this.root(
            v(GameInfo, {game: this.game}),
            v(FullLineUp,
                this.getPlayers().map(player =>
                    v('tr',
                        v('td', player.position.name),
                        v('td', player.name),
                        v('td', player.team.name),
                        v('td', player.FPPG),
                        v('td', player.salary),
                        this.playersUsed[player.id] == null
                            ? v('td', v('button', {onclick: ()=>this.add(player)}, '+'))
                            : v('td', v('button', {onclick: ()=>this.remove(player)}, 'x'))
                    ))
            ),

            v(FullLineUp,
                this.positions.map(({player, position}) =>
                    v('tr',
                        v('td', position.name),
                        v('td', player ? player.name : ''),
                        v('td', player ? player.team.name : ''),
                        v('td', player ? player.FPPG : ''),
                        v('td', player ? player.salary : ''),
                        v('td', player && v('button', {onclick: ()=>this.remove(player)}, 'x'))
                    ))
            )
        );
    }
}

class FullLineUp extends Component {
    render() {
        return this.root(
            v('table',
                v('thead',
                    v('th.pos', 'Pos'),
                    v('th.player', 'Player'),
                    v('th.team', 'Team'),
                    v('th.fppg', 'FPPG'),
                    v('th.salary', 'Salary'),
                    v('th.edit', '')
                ),
                v('tbody', this.props.children)
            )
        );
    }
}
