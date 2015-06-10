let React = require('./Dom');
let MainFilters = require('./MainFilters');
let GameList = require('./GameList');
let {gameStore} = require('../models/Game');
export default class MainForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {filterDate: null, filterLeague: null};
    days = [];

    changeDate(date:Date) {
        this.setState({filterDate: date});
    }

    getDays() {
        let days = this.state.filterDate && this.state.filterDate.getTime() ? [this.state.filterDate] : this.days;
        return days;
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
        gameStore.data.forEach((game:Game) => {
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
                var dayInt = game.date.getDayInt();
                this.dayGames[dayInt] = this.dayGames[dayInt] || {day: game.date, games: []};
                this.dayGames[dayInt].games.push(game);
            }
        });
    }


    render() {
        this.filterGames();
        return (
            <div>
                <MainFilters active={this.state.filterLeague} onChange={(league)=>this.setLeague(league)}/>

                <h2>Live</h2>
                <GameList games={this.liveGames}/>

                <h2>Scheduled</h2>
                <input onInput={(e)=>this.changeDate(new Date(e.target.value))} type="date"/>
                {
                    Object.keys(this.dayGames).map(dayInt => this.dayGames[dayInt].games.length ?
                            <div key={dayInt}>
                                <h3>{this.dayGames[dayInt].day.toDateString()}</h3>
                                <GameList games={this.dayGames[dayInt].games}/>
                            </div> : null
                    )}
            </div>
        );
    }
}