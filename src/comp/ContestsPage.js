import {v,Component} from '../lib/V';
import {GameInfo} from './GameInfo';
import {ContestItem} from './ContestItem';
import {LineUp} from './LineUp';
import {go} from '../lib/Router';
import {getOrdinal, formatPrice} from '../Utils';
import {storage} from '../storage';


export class ContestsPage extends Component {
    selectContest(game, contest) {
        go('/myteam/' + game.id + '/' + contest.id);
    }

    render() {
        let id = this.props.params.gameId;
        let game = storage.games.getById(id);

        return this.root(
            v(GameInfo, {game: game}),
            game.contests.map(contest =>
                v(ContestItem, {onclick: ()=>this.selectContest(game, contest), contest: contest}))
        );
    }
}
