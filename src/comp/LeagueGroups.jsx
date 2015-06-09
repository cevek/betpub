let React = require('react');
let {leagueStore} = require('../models/League');
let {gameStore} = require('../models/Game');
let GameItem = require('./GameItem');


class GameItems extends React.Component {
    render() {
        let {isLive, day, event, league} = this.props;
        let games = gameStore.getGamesByDay(day, isLive, league, event);
        return games.length > 0 ? (
            <div>
                <div className="header">
                    {league.name} - {event.name}
                </div>
                <div className="items">
                    {games.map((game:Game) =>
                            <GameItem game={game}/>
                    )}
                </div>
            </div>
        ) : null;
    }
}

export default class LeagueGroups extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {leagueStore.data.map((league:League) =>
                        league.events.map((event:LeagueEventType) =>
                            <GameItems isLive={this.props.isLive}
                                       day={this.props.day}
                                       league={league}
                                       event={event}/>)
                )}
            </div>
        );
    }
}
