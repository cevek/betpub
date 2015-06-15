import {MainFilters} from './MainFilters';
import {GameList} from './GameList';
import {gameStore} from '../models/Game';
import {v, Component} from './../lib/V';

export class MainForm extends Component {
    state = {filterDate: null, filterLeague: null};
    days = [];

    changeDate(date) {
        this.setState({filterDate: date});
    }

    leagueFilter() {
        return this.state.filterDate && this.state.filterDate.getTime() ? [this.state.filterDate] : days;
    }

    setLeague(league) {
        this.setState({filterLeague: league});
    }

    dayGames;
    liveGames;

    filterGames() {
        this.dayGames = {};
        this.liveGames = [];
        gameStore.data.forEach(game => {
            if (this.state.filterLeague && game.eventType.league !== this.state.filterLeague) {
                return;
            }
            if (game.isLive()) {
                this.liveGames.push(game);
            }
            else {
                if (this.state.filterDate && this.state.filterDate.getTime() && this.state.filterDate.getDayInt() !== game.date.getDayInt()) {
                    return;
                }
                let dayInt = game.date.getDayInt();
                this.dayGames[dayInt] = this.dayGames[dayInt] || {day: game.date, games: []};
                this.dayGames[dayInt].games.push(game);
            }
        });
    }


    render() {
        this.filterGames();
        return v('div',
            //v('div', this.props.params.id),
            v(MainFilters, {
                active: this.state.filterLeague,
                onChange: (league)=>this.setLeague(league)
            }),

            v('h2', 'Live'),
            v(GameList, {games: this.liveGames}),

            v('h2', 'Scheduled'),
            v('input', {onInput: (e)=>this.changeDate(new Date(e.target.value)), type: 'date'}),

            Object.keys(this.dayGames).map(dayInt => this.dayGames[dayInt].games.length ?
                v('div', {key: dayInt},
                    v('h3', this.dayGames[dayInt].day.toDateString()),
                    v(GameList, {games: this.dayGames[dayInt].games})
                ) : null)
        )
    }
}