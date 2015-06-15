import '../Data';
import '../Utils';
import {v, Component} from './../lib/V';
import {Router, Route} from './../lib/Router';

import {MainForm} from './MainForm';
import {GamePage} from './GamePage';
import {SideBar} from './SideBar';
import {ContestsPage} from './ContestsPage';
import {MyTeam} from './MyTeam';

class NotFound extends Component {
    render() {
        return v('div', 'Not Found');
    }
}

export class App extends Component {
    visible = true;

    toggle() {
        this.visible = !this.visible;
        this.forceUpdate();
    }

    render() {
        return v('div',
            v(SideBar),
            //v('button', {onclick: ()=>this.toggle()}, 'toogle'),
            //this.visible && v(MainForm)
            v(Router,
                v(Route, {path: '/', handler: MainForm}),
                v(Route, {path: '/game/:id/', handler: GamePage}),
                v(Route, {path: '/contests/:gameId/', handler: ContestsPage}),
                v(Route, {path: '/myteam/:gameId/:contestId', handler: MyTeam}),
                v(Route, {path: '*', handler: NotFound})
            )
        );
    }
}

