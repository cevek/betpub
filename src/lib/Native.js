let isCito = location.hash.indexOf('cito') > -1;

export class Component {
    constructor(props) {
        this.props = props;
        //console.log("constructor", this.constructor.name);
    }

    setState(obj) {
        Object.keys(obj).forEach(key => this.state[key] = obj[key]);
        this.forceUpdate();
    }

    forceUpdate(){
        console.time('update');
        let node = this.render();
        if (isCito) {
            cito.vdom.update(this.node, node);
        }
        else {
            this.node.parentNode.replaceChild(node, this.node);
        }
        this.node = node;
        console.timeEnd('update');
        console.log("set state");
    }
}


function flatArray(array) {
    let nodes = [];
    for (let i = 0; i < array.length; i++) {
        let child = array[i];
        if (child instanceof Array) {
            nodes = nodes.concat(flatArray(child));
        }
        else {
            if (child != null) {
                nodes.push(child);
            }
        }
    }
    return nodes;
}


class VNode {
    constructor() {
        this.tag = null;
        this.children = null;
        this.events = null;
        this.key = null;
        this.attrs = null;
    }
}
export function createElement(tag, props, ...children) {
    let node;
    if (typeof tag === 'string') {
        if (isCito) {
            node = new VNode();
            node.tag = tag;
        }
        else {
            node = document.createElement(tag);
        }
        if (props) {
            if (isCito) {
                if (props.className) {
                    node.attrs = node.attrs || {};
                    node.attrs.class = props.className;
                }
                if (props.onTouchTap) {
                    node.events = node.events || {};
                    node.events.mousedown = props.onTouchTap;
                }
            }
            else {
                if (props.className) {
                    node.className = props.className;
                }
                if (props.onmousedown) {
                    node.onmousedown = props.onmousedown;
                }
                if (props.onclick) {
                    node.onclick = props.onclick;
                }
            }

        }
        if (children) {
            children = flatArray(children);
            for (let i = 0; i < children.length; i++) {
                let child = children[i];
                if (typeof child === 'string') {
                    if (isCito) {
                    }
                    else {
                        child = document.createTextNode(child);
                    }
                }
                if (isCito) {
                    node.children = node.children || [];
                    node.children.push(child);
                }
                else {
                    node.appendChild(child);
                }
            }
        }
    }
    else if (typeof tag === 'function') {
        let instance = new tag(props);
        node = instance.render();
        instance.node = node;
    }
    return node;
}

export function render(app, node) {
    if (isCito) {
        cito.vdom.append(node, app);
    }
    else {
        node.appendChild(app);
    }
}
