require('../Data');
require('../Utils');

/*
document.addEventListener('selectstart', (e)=> {
    e.preventDefault();
    console.log("mousedown");
});*/

document.addEventListener("touchstart", function(){}, true);

let React = require('./Dom');
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

