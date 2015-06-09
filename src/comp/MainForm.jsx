let React = require('react');
let MainFilters = require('./MainFilters');
let LeagueGroups = require('./LeagueGroups');
let {gameStore} = require('../models/Game');
export default class MainForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {filterDate: null, filterLeague: null};
    days = [new Date("2015-06-13T16:00:00Z"), new Date("2015-06-14T16:00:00Z"), new Date("2015-06-15T16:00:00Z")];
    currentDay = new Date("2015-06-14T16:00:00Z");

    changeDate(date:Date) {
        this.setState({filterDate: date});
    }

    getDays() {
        let days = this.state.filterDate && this.state.filterDate.getTime() ? [this.state.filterDate] : this.days;
        return days.filter(day => gameStore.getGamesByDay(day, false, this.state.filterLeague, null).length > 0);
    }

    setLeague(league) {
        this.setState({filterLeague: league});
    }


    render() {
        return (
            <div>
                <MainFilters onChange={(league)=>this.setLeague(league)}/>

                <h2>Live</h2>
                <LeagueGroups day={this.currentDay} league={this.state.filterLeague} isLive={true}/>

                <h2>Scheduled</h2>
                <input onInput={(e)=>this.changeDate(new Date(e.target.value))} type="date"/>
                {
                    this.getDays().map(day =>
                        <div>
                            <h3>{day.toDateString()}</h3>
                            <LeagueGroups day={day} league={this.state.filterLeague} isLive={false}/>
                        </div>)}
            </div>
        );
    }
}