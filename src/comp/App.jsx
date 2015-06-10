require('../Data');
require('../Utils');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


/*
document.addEventListener('selectstart', (e)=> {
    e.preventDefault();
    console.log("mousedown");
});*/

document.addEventListener("touchstart", function(){}, true);


let React = require('./Dom');
let SideBar = require('./SideBar');
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SideBar/>
                <RouteHandler/>
            </div>
        );
    }
}

