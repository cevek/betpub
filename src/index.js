let React = require('./comp/Dom');
let App = require('./comp/App');
let GamePage = require('./comp/GamePage');
let MainForm = require('./comp/MainForm');
var Router = require('react-router');
var Route = Router.Route;

require('./main.css');


var routes = (
    <Route handler={App} path="/">
        <Route path="/" handler={MainForm}/>
        <Route path="/game/:id" handler={GamePage}/>
    </Route>
);

var container = document.createElement('div');
document.body.appendChild(container);
Router.run(routes, function (Handler) {
    React.render(<Handler/>, container);
});