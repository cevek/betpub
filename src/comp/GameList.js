import {GameItem} from './GameItem';
import {v, React} from './../lib/V';

export class GameList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let groupped = this.props.games.groupBy(game => game.eventType);
        return v('.game-list',
            groupped.map(({group, items}) =>
                v('.group',
                    v('.header', group.league.name + ' – ' + group.name),
                    items.map(game =>
                        v(GameItem, {key: game.id, game: game}))
                ))
        );

    }
} 