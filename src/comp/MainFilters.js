import {leagueStore} from '../models/League';
import {v, React} from './../lib/V';

export class MainFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    //state = {active: null};

    setActive(active) {
        this.props.onChange(active);
        //this.setState({active: active});
    }

    isActive(active) {
        return 'btn ' + (this.props.active === active ? 'active' : '');
    }

    render() {
        return v('div',
            v('div', {
                    onTouchTap: ()=>this.setActive(null),
                    class: this.isActive(null)
                }, 'All'
            ),
            leagueStore.data.map((league) =>
                v('div', {
                        key: league.id,
                        onTouchTap: ()=>this.setActive(league),
                        class: this.isActive(league)
                    }, league.name
                ))
        )

    }
} 