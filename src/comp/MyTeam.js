import {AbstractGamePage} from './AbstractGamePage';
import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {Loader} from './Loader';
import {RadioButtons} from './controls/RadioButtons';
import {ContestItem} from './ContestItem';
import {v, Component} from './../lib/V';
import {go} from './../lib/Router';
import {storage} from '../storage';
import {formatPrice} from '../Utils';


export class MyTeam extends AbstractGamePage {
    slots = null;
    playersUsed = {};
    emptySlots = {};
    salaryRemaining;
    availablePositions = [];
    activePos = null;

    add(player) {
        for (var i = 0; i < this.slots.length; i++) {
            let slot = this.slots[i];
            if (player.position === slot.position && !slot.player) {
                slot.player = player;
                this.playersUsed[player.id] = i;
                this.emptySlots[slot.position.id]--;
                this.salaryRemaining -= player.salary;
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
        this.salaryRemaining += player.salary;
        this.forceUpdate();
    }

    getPlayers() {
        return this.game.team1.players.filter(player => player.position === this.activePos || !this.activePos);
    }

    calcAverage() {
        var emptyCount = 0;
        for (var i in this.emptySlots) {
            emptyCount += this.emptySlots[i];
        }
        return this.salaryRemaining / emptyCount;
    }


    changeFilter(pos) {
        this.activePos = pos;
        this.forceUpdate();
    }

    possibleToAdd(player) {
        return this.emptySlots[player.position.id] > 0 && this.salaryRemaining >= player.salary;
    }

    gameLoaded() {
        this.contest = this.game.contests.filter(contest => contest.id == this.props.params.contestId).pop();
        console.log(this.contest, this.game.contests, this.props.params.contestId);
        this.slots = [];
        this.game.eventType.league.positions.forEach(pos => {
            if (!this.emptySlots[pos.id]) {
                this.emptySlots[pos.id] = 0;
                this.availablePositions.push(pos);
            }
            this.emptySlots[pos.id]++;
            this.slots.push({player: null, position: pos});
        });
        this.salaryRemaining = this.game.eventType.league.salary;
        this.salaryAverage = this.salaryRemaining / this.slots.length;
    }


    render() {
        return this.root(
            this.game ? v('div',
                v(GameInfo, {game: this.game}),
                v(ContestItem, {contest: this.contest}),

                v('.col',
                    v('.info',
                        v('h3', 'Available players'),
                        v(RadioButtons, {
                            active: this.activePos,
                            items: this.availablePositions,
                            label: pos => pos.name,
                            empty: 'All',
                            onChange: pos=>this.changeFilter(pos)
                        })
                    ),
                    v(FullLineUp,
                        this.getPlayers().map(player =>
                            v('tr',
                                v('td', player.position.name),
                                v('td', player.name),
                                v('td', player.team.name),
                                v('td', player.FPPG),
                                v('td', formatPrice(player.salary)),
                                v('td', this.playersUsed[player.id] == null
                                        ? this.possibleToAdd(player) && v('button', {onclick: ()=>this.add(player)}, '+')
                                        : v('button', {onclick: ()=>this.remove(player)}, 'x')
                                )
                            ))
                    )
                ),
                v('.col',
                    v('.info',
                        v('h3', 'Your LineUp'),
                        v('.left',
                            v('.salary-title', formatPrice(this.salaryRemaining)),
                            v('div', 'salary remaining')
                        ),
                        v('.right',
                            v('.salary-title', formatPrice(this.calcAverage())),
                            v('div', 'Avg Rem./Player')
                        )
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
                )
            ) : v(Loader)
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
