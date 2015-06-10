let React = require('./Dom');
let {leagueStore} = require('../models/League');
export default class MainFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    //state = {active: null};

    setActive(active) {
        this.props.onChange(active);
        //this.setState({active: active});
    }

    isActive(active):string {
        return 'btn ' + (this.props.active === active ? 'active' : '');
    }

    render() {
        return (
            <div>
                <div onTouchTap={()=>this.setActive(null)}
                     className={this.isActive(null)}>All
                </div>
                {leagueStore.data.map((league:League) =>
                    <div key={league.id}
                         onTouchTap={()=>this.setActive(league)}
                         className={this.isActive(league)}>{league.name}</div>)}
            </div>
        );
    }
} 