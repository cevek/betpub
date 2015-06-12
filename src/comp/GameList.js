import {GameItem} from './GameItem';
import {v, React} from './../lib/V';

export class GameList extends React.Component {
    render() {
        let groupped = this.props.games.groupBy(game => game.eventType);
        return v('.game-list',
            [v('.one', 'one'), v('.two', 'two')],
            groupped.map(({group, items}) =>
                v('.group',
                    v('.header', group.league.name + ' – ' + group.name),
                    items.map(game =>
                        v(GameItem, {key: game.id, game: game}))
                ))
        );

    }
} 