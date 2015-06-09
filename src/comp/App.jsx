require('../Data');
let React = require('react');
let SideBar = require('./SideBar');
let MainForm = require('./MainForm');
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SideBar/>
                <MainForm/>
            </div>
        );
    }
}

