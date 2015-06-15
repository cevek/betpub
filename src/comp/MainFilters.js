import {leagueStore} from '../models/League';
import {v, Component} from './../lib/V';

export class MainFilters extends Component {
    setActive(active) {
        this.props.onChange(active);
    }

    render() {
        return v('div',
            v('div.btn', {
                    onMouseDown: ()=>this.setActive(null),
                    classes: {active: this.props.active == null}
                }, 'All'
            ),
            leagueStore.data.map((league) =>
                v('div.btn', {
                        key: league.id,
                        onMouseDown: ()=>this.setActive(league),
                        classes: {active: this.props.active === league}
                    }, league.name
                ))
        )
    }
} 