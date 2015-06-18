import {v,Component} from '../lib/V';
import {GameInfo} from './GameInfo';
import {ContestItem} from './ContestItem';
import {LineUp} from './LineUp';
import {go} from '../lib/Router';
import {getOrdinal, formatPrice} from '../Utils';
import {storage} from '../storage';
import {routes} from '../routes';
import {AbstractGamePage} from './AbstractGamePage';
import {Loader} from './Loader';

export class ContestsPage extends AbstractGamePage {
    selectContest(game, contest) {
        routes.gameContestItem.goto({id: game.id, contestId: contest.id});
    }

    render() {
        if (!this.game) {
            return this.root(v(Loader));
        }
        return this.root(
            v(GameInfo, {game: this.game}),
            this.game.contests.map(contest =>
                v(ContestItem, {onclick: ()=>this.selectContest(this.game, contest), contest: contest}))
        );
    }
}
