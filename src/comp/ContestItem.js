import {v,Component} from '../lib/V';
import {formatPrice, getOrdinal} from '../Utils';

export class ContestItem extends Component {
    render() {
        var contest = this.props.contest;
        var contestType = contest.type;
        return this.root(this.props,
            v('.slot.main',
                v('.title', contestType.name),
                v('.entries', 'Entries – ', contest.entries ? contest.entries + '/' : '', contestType.maxEntries)
            ),
            v('.slot', v('.big', formatPrice(contestType.entryFee)), v('.small', 'entry fee')),
            v('.slot', v('.big', formatPrice(contest.prizes)), v('.small', 'prizes')),
            v('.slot', v('.big', contest.myPoints), v('.small', 'points')),
            v('.slot', v('.big', getOrdinal(contest.myPlace)), v('.small', 'place'))
        );
    }
}