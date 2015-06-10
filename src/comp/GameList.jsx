let React = require('./Dom');
let GameItem = require('./GameItem');
export default class GameList extends React.Component {
    constructor(props) {
        super(props);
    }

    leagueEvents;
    leagueEventsHash;

    sort() {
        this.leagueEvents = [];
        this.leagueEventsHash = {};
        this.props.games.forEach((game:Game) => {
            var id = game.eventType.id;
            if (!this.leagueEventsHash[id]) {
                this.leagueEvents.push(game.eventType);
                this.leagueEventsHash[id] = [];
            }
            this.leagueEventsHash[id].push(game);
        });
    }

    render() {
        this.sort();
        return (
            <div>
                {this.leagueEvents.map(event =>
                        <div className="group">
                            <div className="header">{event.league.name + ' – ' + event.name}</div>
                            {this.leagueEventsHash[event.id].map((game:Game) =>
                                    <GameItem key={game.id} game={game}/>
                            )}
                        </div>
                )}
            </div>
        );
    }
} 