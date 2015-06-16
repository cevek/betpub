import {v,Component} from '../lib/V';
import {GameInfo} from './GameInfo';
import {LineUp} from './LineUp';
import {go} from '../lib/Router';
import {getOrdinal} from '../Utils';
import {storage} from '../storage';


export class ContestsPage extends Component {
    selectContest(gameId) {
        go('/myteam/' + gameId + '/123');
    }

    render() {
        let id = this.props.params.gameId;
        let game = storage.games.getById(id);

        return v('div',
            v(GameInfo, {game: game}),
            game.contests.map(contest =>
                v(ContestItem, {contest: contest})),
            v('button', {onclick: ()=>this.selectContest(id)}, 'Next')
        );
    }
}

export class ContestItem extends Component {
    render() {
        var contest = this.props.contest;
        var contestType = contest.type;
        return v('.contest-item',
            v('.slot',
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