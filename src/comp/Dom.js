let React = require('react');
let Native = require('./Native');

if (location.hash.indexOf('native') > -1) {
    module.exports = Native;
}
else {
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();
    module.exports = React;
}


