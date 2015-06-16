import {v,Component} from '../lib/V';
import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {go} from '../lib/Router';
import {getOrdinal} from '../Utils';
import {storage} from '../storage';


export class ContestsPage extends Component {


    render() {
        let id = this.props.params.gameId;
        let game = storage.games.getById(id);

        return v('div',
            v(GameInfo, {game: game}),
            game.contests.map(contest =>
                v(ContestItem, {onclick: ()=>selectContest(id, contest.id), contest: contest}))
        );
    }
}

export class ContestItem extends Component {
    selectContest() {
        go('/myteam/' + this.props.contest.game.id + '/' + this.props.contest.id);
    }

    render() {
        var contest = this.props.contest;
        var contestType = contest.type;
        return v('.contest-item', {onclick: ()=>this.selectContest()},
            v('.slot.main',
                v('.title', contestType.name),
                v('.entries', 'Entries – ', contest.entries ? contest.entries + '/' : '', contestType.maxEntries)
            ),
            v('.slot', v('.big', '$' + contestType.entryFee), v('.small', 'entry fee')),
            v('.slot', v('.big', '$' + contest.prizes), v('.small', 'prizes')),
            v('.slot', v('.big', contest.myPoints), v('.small', 'points')),
            v('.slot', v('.big', getOrdinal(contest.myPlace)), v('.small', 'place'))
        );
    }
}