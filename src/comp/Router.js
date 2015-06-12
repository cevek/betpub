import {v, React} from '../lib/V.js';
var scrollData = {};
var activeUrl;
export class Router extends React.Component {
    activeComponent;
    activeProps;
    routes = [];
    emptyRoute;

    componentDidMount() {
        window.addEventListener('scroll', ()=> {
            if (activeUrl === location.href) {
                scrollData[activeUrl] = window.scrollY;
            }
        });
        window.addEventListener('hashchange', ()=> {
            activeUrl = location.href;
            this.changeRoute();
            this.forceUpdate();
        });
        activeUrl = location.href;
        this.prepareRoutes(this.props.children);
        this.changeRoute();
        this.forceUpdate();
    }

    componentDidUpdate() {
        window.scrollTo(0, scrollData[activeUrl] || 0);
    }

    changeRoute() {
        var url = location.hash.substr(1);
        this.activeComponent = this.emptyRoute;
        for (var i = 0; i < this.routes.length; i++) {
            var route = this.routes[i];
            var m;
            if (m = route.regexp.exec(url)) {
                var params = {};
                for (var j = 0; j < route.names.length; j++) {
                    params[route.names[j]] = m[j + 1];
                }
                this.activeComponent = route.handler;
                this.activeProps = params;
            }
        }
    }

    prepareRoutes(children) {
        this.routes = [];
        for (var i = 0; i < children.length; i++) {
            var handler = children[i].props.handler;
            var url = children[i].props.path;
            if (url === '*') {
                this.emptyRoute = handler;
                return;
            }
            url = '/' + url.replace(/(^\/+|\/+$)/g, '');
            url = url === '/' ? url : url + '/';
            var v;
            var reg = /:([^\/]+)/g;
            var names = [];
            while (v = reg.exec(url))
                names.push(v[1]);
            var regexp = new RegExp('^' + url.replace(/(:([^\/]+))/g, '([^\/]+)') + '?$');
            this.routes.push({regexp: regexp, names: names, handler: handler});
        }
    }

    componentWillReceiveProps(newProps) {
        this.prepareRoutes(newProps.children);
        this.changeRoute();
    }

    render() {
        return this.activeComponent ? v(this.activeComponent, {params: this.activeProps}) : null;
    }
}

export class Route extends React.Component {
}
