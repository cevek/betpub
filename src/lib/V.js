//import {createElement, Component, render} from 'react';
import {createElement, Component, render} from './Arg';
//import {createElement, Component, render} from './Native';
//export let React = react;
export {createElement, Component, render};
export function v(...args) {
    let tag = args.shift();
    let props = {};
    if (args[0] && typeof args[0] === 'object' && !args[0]._context && !args[0].vnode && !(args[0] instanceof Array)) {
        props = args.shift();
    }
    if (typeof tag === 'string') {
        var _tag = tag.split('.');
        tag = _tag.shift() || 'div';
        if (_tag.length) {
            props.className = _tag.join(" ");
        }
    }
    if (props.classes) {
        var allCls = '';
        for (var cls in props.classes) {
            if (props.classes[cls]) {
                allCls += ' ' + cls;
            }
        }
        props.className = props.className || '';
        props.className += props.className ? allCls : allCls.substring(1);
    }

    return createElement(tag, props, flatArray(args));
}


function flatArray(array) {
    let nodes = [];
    for (let i = 0; i < array.length; i++) {
        let child = array[i];
        if (child instanceof Array) {
            nodes = nodes.concat(flatArray(child));
        }
        else {
            if (child != null && typeof child !== 'boolean') {
                if (typeof child === 'number') {
                    nodes.push(child + '');
                }
                else {
                    nodes.push(child);
                }
            }
        }
    }
    return nodes;
}


/*
 function onClick() {

 }
 console.time('perf');
 for (var i = 0; i < 1000000; i++) {
 new Attrs({
 className: 'wow',
 class: "meow",
 id: 'name',
 bla: 123,
 onClick: onClick,
 'data-boy': 'Yep',
 'aria-wow': 'Doit',
 style: {height: 10, zoom: 20, backgroundPosition: '10px 10px'}
 })
 }
 console.log(new Attrs({
 className: 'wow',
 class: 'meow',
 onClick: onClick,
 'data-boy': 'Yep',
 'aria-wow': 'Doit',
 style: {height: 10, zIndex: 20, backgroundPosition: '10px 10px'}
 }));

 console.timeEnd('perf');*/

//https://github.com/facebook/react/blob/master/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
//Object.keys(HTMLDOMPropertyConfig.Properties).map(function(key){var key2 = key.toLowerCase();
//	return key +":'"+key2+"'," + (key2 !== key ? key2+":'"+key2+"'," : '') + ""}).join("");