let React = require('./Dom');
let GameItem = require('./GameItem');
export default class GameList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var groupped = this.props.games.groupBy((game:Game) => game.eventType);
        return (
            <div>
                {groupped.map(({group, items}) =>
                        <div className="group">
                            <div className="header">{group.league.name + ' – ' + group.name}</div>
                            {items.map((game:Game) =>
                                    <GameItem key={game.id} game={game}/>
                            )}
                        </div>
                )}
            </div>
        );
    }
} 