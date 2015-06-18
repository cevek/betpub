import {v} from './V.js';
class VNode {
    constructor() {
        this.vnode = true;
        this.tag = void 0;
        this.children = void 0;
        this.events = void 0;
        this.key = void 0;
        this.attrs = void 0;
    }
}

function isEqual(p1, p2) {
    for (let key in p1) {
        if (key === 'children') {
            return isEqual(p1.children, p2.children);
        }
        else if (p2[key] !== p1[key]) {
            return false;
        }
    }
    for (let key in p2) {
        if (p2[key] !== p1[key]) {
            return false;
        }
    }
    return true;
}


export function createElement(tag, props, children) {
    if (children) {
        props.children = props.children || {};
        props.children = children;
    }
    //console.log(tag, props, children);
    if (typeof tag === 'function') {
        var nodeFn = function (oldChild) {
            //console.log("component fn", oldChild);
            let component;
            if (oldChild && oldChild.component && oldChild.component.constructor === tag) {
                component = oldChild.component;
                if (component.componentWillReceiveProps && !isEqual(props, component.props)) {
                    component.componentWillReceiveProps(props);
                }
                component.props = props;
                this.propsUpdated();
            }
            else {
                component = new tag(props);
                //if (!component.dontConsole) {
                //console.log("new", tag.name);
                //}
                component.componentWillMount();
            }
            let node = component.render();
            if (!node) {
                node = new VNode();
                node.tag = 'div';
                node.children = '';
            }
            else {

            }
            component.node = node;
            node.component = component;
            node.key = component.constructor.name;
            node.events = node.events || {};
            node.events.$created = node.events.$created || [];
            node.events.$destroyed = node.events.$destroyed || [];
            node.events.$created.push(()=> {
                //console.log("abc componentDidMount", component);
                component.componentDidMount();
            });
            node.events.$destroyed.push(()=> {
                component.componentWillUnmount();
            });
            return node;
        };
        nodeFn.props = props;
        return nodeFn;
    }
    let node = new VNode();
    node.tag = tag;
    node.attrs = new Attrs(props);
    node.events = node.attrs.events;
    node.attrs.events = false;
    node.children = children;
    return node;
}

export function render(node, dom) {
    //console.log("render", node);
    cito.vdom.append(dom, node);
    //console.log("render done", node);
}

var id = 0;
export class Component {
    _id = ++id;
    node;
    state;

    constructor(props) {
        this.props = props;
        this.propsUpdated();
    }

    root(...args) {
        var props;
        if (args[0] && typeof args[0] === 'object' && !args[0]._context && !args[0].vnode && !(args[0] instanceof Array)) {
            props = args.shift();
        }
        var name = this.constructor.name.replace(/([A-Z]+)/g, '-$1').replace(/^-/, '').toLowerCase();
        return v(name, props, args);
    }

    propsUpdated() {}

    componentDidMount() {}

    componentWillMount() {}

    componentWillUnmount() {}

    componentWillUpdate() {}

    componentDidUpdate() {}

    shouldComponentUpdate() {}

    setState(state) {
        var equal = true;
        for (var key in state) {
            if (this.state[key] !== state[key]) {
                this.state[key] = state[key];
                equal = false;
            }
        }
        if (!equal) {
            this.forceUpdate();
        }
    }

    forceUpdate() {
        var oldProps = this.props;
        this.componentWillUpdate(this.props);
        //var newNode = createElement(this.constructor, this.props, this.props.children);
        //console.log("forceUpdate");
        this.node = cito.vdom.update(this.node, this.render());
        //this.node = cito.vdom.update(this.node, createElement(this.constructor, this.props, this.props.children));
        this.node.component = this;
        this.componentDidUpdate(oldProps);
    }

    render() {
        return v('div', '<' + this.constructor.name + '/>');
    }
}


var attrs = {
    accept: 'accept',
    acceptCharset: 'accept-charset',
    'accept-charset': 'accept-charset',
    accessKey: 'accesskey',
    accesskey: 'accesskey',
    action: 'action',
    allowFullScreen: 'allowfullscreen',
    allowfullscreen: 'allowfullscreen',
    allowTransparency: 'allowtransparency',
    allowtransparency: 'allowtransparency',
    alt: 'alt',
    async: 'async',
    autoComplete: 'autocomplete',
    autocomplete: 'autocomplete',
    autoPlay: 'autoplay',
    autoplay: 'autoplay',
    capture: 'capture',
    cellPadding: 'cellpadding',
    cellpadding: 'cellpadding',
    cellSpacing: 'cellspacing',
    cellspacing: 'cellspacing',
    charSet: 'charset',
    charset: 'charset',
    challenge: 'challenge',
    checked: 'checked',
    classID: 'classid',
    classid: 'classid',
    className: 'class',
    'class': 'class',
    cols: 'cols',
    colSpan: 'colspan',
    colspan: 'colspan',
    content: 'content',
    contentEditable: 'contenteditable',
    contenteditable: 'contenteditable',
    contextMenu: 'contextmenu',
    contextmenu: 'contextmenu',
    controls: 'controls',
    coords: 'coords',
    crossOrigin: 'crossorigin',
    crossorigin: 'crossorigin',
    dateTime: 'datetime',
    datetime: 'datetime',
    defer: 'defer',
    dir: 'dir',
    disabled: 'disabled',
    download: 'download',
    draggable: 'draggable',
    encType: 'enctype',
    enctype: 'enctype',
    form: 'form',
    formAction: 'formaction',
    formaction: 'formaction',
    formEncType: 'formenctype',
    formenctype: 'formenctype',
    formMethod: 'formmethod',
    formmethod: 'formmethod',
    formNoValidate: 'formnovalidate',
    formnovalidate: 'formnovalidate',
    formTarget: 'formtarget',
    formtarget: 'formtarget',
    frameBorder: 'frameborder',
    frameborder: 'frameborder',
    headers: 'headers',
    height: 'height',
    hidden: 'hidden',
    high: 'high',
    href: 'href',
    hrefLang: 'hreflang',
    hreflang: 'hreflang',
    htmlFor: 'for',
    'for': 'for',
    httpEquiv: 'httpequiv',
    'http-equiv': 'http-equiv',
    icon: 'icon',
    id: 'id',
    is: 'is',
    keyParams: 'keyparams',
    keyparams: 'keyparams',
    keyType: 'keytype',
    keytype: 'keytype',
    label: 'label',
    lang: 'lang',
    list: 'list',
    loop: 'loop',
    low: 'low',
    manifest: 'manifest',
    marginHeight: 'marginheight',
    marginheight: 'marginheight',
    marginWidth: 'marginwidth',
    marginwidth: 'marginwidth',
    max: 'max',
    maxLength: 'maxlength',
    maxlength: 'maxlength',
    media: 'media',
    mediaGroup: 'mediagroup',
    mediagroup: 'mediagroup',
    method: 'method',
    min: 'min',
    minLength: 'minlength',
    minlength: 'minlength',
    multiple: 'multiple',
    muted: 'muted',
    name: 'name',
    noValidate: 'novalidate',
    novalidate: 'novalidate',
    open: 'open',
    optimum: 'optimum',
    pattern: 'pattern',
    placeholder: 'placeholder',
    poster: 'poster',
    preload: 'preload',
    radioGroup: 'radiogroup',
    radiogroup: 'radiogroup',
    readOnly: 'readonly',
    readonly: 'readonly',
    rel: 'rel',
    required: 'required',
    role: 'role',
    rows: 'rows',
    rowSpan: 'rowspan',
    rowspan: 'rowspan',
    sandbox: 'sandbox',
    scope: 'scope',
    scoped: 'scoped',
    scrolling: 'scrolling',
    seamless: 'seamless',
    selected: 'selected',
    shape: 'shape',
    size: 'size',
    sizes: 'sizes',
    span: 'span',
    spellCheck: 'spellcheck',
    spellcheck: 'spellcheck',
    src: 'src',
    srcDoc: 'srcdoc',
    srcdoc: 'srcdoc',
    srcSet: 'srcset',
    srcset: 'srcset',
    start: 'start',
    step: 'step',
    tabIndex: 'tabindex',
    tabindex: 'tabindex',
    target: 'target',
    title: 'title',
    type: 'type',
    useMap: 'usemap',
    usemap: 'usemap',
    value: 'value',
    width: 'width',
    wmode: 'wmode',
    autoCapitalize: 'autocapitalize',
    autocapitalize: 'autocapitalize',
    autoCorrect: 'autocorrect',
    autocorrect: 'autocorrect',
    itemProp: 'itemprop',
    itemprop: 'itemprop',
    itemScope: 'itemscope',
    itemscope: 'itemscope',
    itemType: 'itemtype',
    itemtype: 'itemtype',
    itemID: 'itemid',
    itemid: 'itemid',
    itemRef: 'itemref',
    itemref: 'itemref',
    property: 'property',
    unselectable: 'unselectable'
};
var notPx = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    fillOpacity: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    strokeOpacity: true,
    widows: true,
    zIndex: true,
    zoom: true
};

var events = {
    onClick: 'click',
    onDblClick: 'dblclick',

    onMouseDown: 'mousedown',
    onMouseUp: 'mouseup',
    onMouseMove: 'mousemove',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
    onMouseOver: 'mouseover',
    onMouseOut: 'mouseout',

    onTouchStart: 'touchstart',
    onTouchEnd: 'touchend',
    onTouchMove: 'touchmove',
    onTouchCancel: 'touchcancel',
    onTouchLeave: 'touchleave',

    onContextMenu: 'contextmenu',

    onInput: 'input',
    onFocus: 'focus',
    onChange: 'change',

    onKeyDown: 'keydown',
    onKeyPress: 'keypress',
    onKeyUp: 'keyup'
};


var styleRegExp = /([A-Z])/g;
function Style(style) {
    if (typeof style === 'string') {
        return style;
    }
    var key2, tmp, val, s = '';
    for (var key in style) {
        key2 = key.replace(styleRegExp, '-$1');
        tmp = style[key];
        val = typeof tmp === 'number' && !notPx[key] ? tmp + 'px' : tmp;
        if (val !== null) {
            this[key2] = val;
        }
    }
    return s;
}
function Attrs(p) {
    //return;
    var key, key2;
    for (key in p) {
        if (key2 = attrs[key]) {
            this[key2] = p[key];
        }
        else if (key[0] === 'o' && key[1] === 'n') {
            this.events = this.events || {};
            key2 = events[key] || key.substring(2).toLowerCase();
            this.events[key2] = p[key];
        }
        else if (key[0] === 'd' && key[1] === 'a' && key[2] === 't' && key[3] === 'a') {
            this[key] = p[key];
        }
        else if (key === 'style') {
            this.style = new Style(p.style);
        }
    }
}
