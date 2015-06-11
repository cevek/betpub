import react from 'react';
export let React = react;
export function v(...args) {
    let tag = args.shift();
    let props = {};
    if (args[0] && typeof args[0] === 'object' && !args[0]._context) {
        props = args.shift();
    }
    if (typeof tag === 'string') {
        var _tag = tag.split('.');
        tag = _tag.shift() || 'div';
        if (_tag.length) {
            props.className = _tag.join(" ");
        }
    }

    var cmp = React.createElement(tag, props, args);

    //console.log("v", tag, props, args);

    if (typeof tag === 'function') {
        cmp.init = function (props) {
            console.log("init", cmp, props, args);
            cmp.props = props;
        }
    }
    return cmp;
}
