let React = require('react');
let MainFilters = require('./MainFilters');
let LeagueGroups = require('./LeagueGroups');
let {gameStore} = require('../models/Game');
export default class MainForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {filterDate: null};
    days = [new Date("2015-06-13T16:00:00Z"), new Date("2015-06-14T16:00:00Z"), new Date("2015-06-15T16:00:00Z")];
    currentDay = new Date("2015-06-14T16:00:00Z");

    changeDate(date:Date) {
        this.setState({filterDate: date});
    }


    render() {
        let days = this.state.filterDate && this.state.filterDate.getTime() ? [this.state.filterDate] : this.days;
        days = days.filter(day => gameStore.getGamesByDay(day, false, null, null).length > 0);
        return (
            <div>
                <MainFilters/>

                <h2>Live</h2>
                <LeagueGroups day={this.currentDay} isLive={true}/>

                <h2>Scheduled</h2>
                <input onInput={(e)=>this.changeDate(new Date(e.target.value))} type="date"/>
                {
                    days.map(day =>
                        <div>
                            <h3>{day.toDateString()}</h3>
                            <LeagueGroups day={day} isLive={false}/>
                        </div>)}
            </div>
        );
    }
}