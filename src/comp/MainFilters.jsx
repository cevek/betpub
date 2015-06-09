let React = require('react');
let {leagueStore} = require('../models/League');
export default class MainFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {active: null};

    setActive(active) {
        this.props.onChange(active);
        this.setState({active: active});
    }

    isActive(active):string {
        return 'btn ' + (this.state.active === active ? 'active' : '');
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.setActive(null)}
                        className={this.isActive(null)}>All
                </button>
                {leagueStore.data.map((league:League) =>
                    <button onClick={()=>this.setActive(league)}
                            className={this.isActive(league)}>{league.name}</button>)}
            </div>
        );
    }
} 