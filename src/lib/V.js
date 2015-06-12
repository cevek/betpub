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