let React = require('./comp/Dom');
let App = require('./comp/App');
require('./main.css');

var container = document.createElement('div');
document.body.appendChild(container);
React.render(<App/>, container);


