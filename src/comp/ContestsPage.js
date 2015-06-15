import {v,Component} from '../lib/V';
import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {gameStore} from '../models/Game';
import {go} from '../lib/Router.js';

export class ContestsPage extends Component {
    selectContest(gameId) {
        go('/myteam/' + gameId + '/123');
    }

    render() {
        let id = this.props.params.gameId;
        let game = gameStore.getById(id);

        return v('div',
            v(GameInfo, {game: game}),
            v('button', {onclick: ()=>this.selectContest(id)}, 'Next')
        );
    }
} 