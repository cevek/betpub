import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {gameStore} from '../models/Game';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';

export class MyTeam extends Component {
    players = [];

    add(player) {
        this.players.push(player);
        this.forceUpdate();
    }

    remove(player) {
        var pos = this.players.indexOf(player);
        this.players.splice(pos, 1);
        this.forceUpdate();
    }

    getPlayers(game) {
        return game.team1.players.filter(player => this.players.indexOf(player) === -1);
    }


    render() {
        let id = this.props.params.id;
        let game = gameStore.getById(id);
        return v('div',
            v(GameInfo, {game: game}),
            v(LineUpEditable, {players: this.getPlayers(game), onAdd: (player)=>this.add(player)}),
            v(LineUpEditable, {players: this.players, onRemove: (player)=>this.remove(player)})
        );
    }
}


export class LineUpEditable extends Component {
    render() {
        return v('div.my-line-up',
            v('table.line-up',
                v('thead',
                    v('th', 'Pos'),
                    v('th', 'Player'),
                    v('th', 'Team'),
                    v('th', 'FPPG'),
                    v('th', 'Salary'),
                    v('th', '')
                ),
                v('tbody',
                    this.props.players.map(player =>
                        v('tr',
                            v('td', player.position.name),
                            v('td', player.name),
                            v('td', 'TEAM' || player.team.name),
                            v('td', player.FPPG),
                            v('td', player.salary),
                            this.props.onAdd && v('td', v('button', {onclick: ()=>this.props.onAdd(player)}, '+')),
                            this.props.onRemove && v('td', v('button', {onclick: ()=>this.props.onRemove(player)}, 'x'))
                        ))
                )
            )
        );
    }
}

