let React = require('react');
let Native = require('./Native');
if (location.hash.indexOf('react') > -1 || !location.hash) {
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();
    module.exports = React;
}

if (location.hash.indexOf('native') > -1) {
    module.exports = Native;
}

