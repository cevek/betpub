import React from 'react';
import Native from './Native';

if (location.hash.indexOf('native') > -1) {
    module.exports = Native;
}
else {
    let injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();
    module.exports = React;
}


