import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {RadioButtons} from './controls/RadioButtons';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';
import {storage} from '../storage';
import {formatPrice} from '../Utils';


export class MyTeam extends Component {
    game;
    slots = null;
    playersUsed = {};
    emptySlots = {};

    add(player) {
        for (var i = 0; i < this.slots.length; i++) {
            let slot = this.slots[i];
            if (player.position === slot.position && !slot.player) {
                slot.player = player;
                this.playersUsed[player.id] = i;
                this.emptySlots[slot.position.id]--;
                console.log(this);
                this.forceUpdate();
                return;
            }
        }
    }

    remove(player) {
        var slot = this.slots[this.playersUsed[player.id]];
        slot.player = null;
        this.playersUsed[player.id] = null;
        this.emptySlots[slot.position.id]++;
        this.forceUpdate();
    }

    getPlayers() {
        return this.game.team1.players.filter(player => player.position === this.activePos || !this.activePos);
    }

    availablePositions = [];

    prepareLineUp() {
        if (!this.slots) {
            this.slots = [];
            this.game.eventType.league.positions.forEach(pos => {
                if (!this.emptySlots[pos.id]) {
                    this.emptySlots[pos.id] = 0;
                    this.availablePositions.push(pos);
                }
                this.emptySlots[pos.id]++;
                this.slots.push({player: null, position: pos});
            });
        }
    }

    activePos = null;

    changeFilter(pos) {
        this.activePos = pos;
        this.forceUpdate();
    }

    render() {
        let id = this.props.params.id;
        this.game = storage.games.getById(id);
        this.prepareLineUp();

        return this.root(
            v(GameInfo, {game: this.game}),
            v(RadioButtons, {
                active: this.activePos,
                items: this.availablePositions,
                label: pos => pos.name,
                empty: 'All',
                onChange: pos=>this.changeFilter(pos)
            }),
            v(FullLineUp,
                this.getPlayers().map(player =>
                    v('tr',
                        v('td', player.position.name),
                        v('td', player.name),
                        v('td', player.team.name),
                        v('td', player.FPPG),
                        v('td', formatPrice(player.salary)),
                        v('td', this.playersUsed[player.id] == null
                                ? this.emptySlots[player.position.id] > 0 && v('button', {onclick: ()=>this.add(player)}, '+')
                                : v('button', {onclick: ()=>this.remove(player)}, 'x')
                        )
                    ))
            ),

            v(FullLineUp,
                this.slots.map(({player, position}) =>
                    v('tr',
                        v('td', position.name),
                        v('td', player ? player.name : ''),
                        v('td', player ? player.team.name : ''),
                        v('td', player ? player.FPPG : ''),
                        v('td', player ? formatPrice(player.salary) : ''),
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
