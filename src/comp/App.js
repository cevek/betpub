import '../storage';
import '../Utils';
import {v, Component} from './../lib/V';
import {Router, Route} from './../lib/Router';
import {routes} from '../routes';

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
        return this.root(
            v(SideBar),
            //v('button', {onclick: ()=>this.toggle()}, 'toogle'),
            //this.visible && v(MainForm)
            v(Router,
                v(Route, {path: routes.index, handler: MainForm}),
                v(Route, {path: routes.game, handler: GamePage}),
                v(Route, {path: routes.gameContests, handler: ContestsPage}),
                v(Route, {path: routes.gameContestItem, handler: MyTeam}),
                v(Route, {path: '*', handler: NotFound})
            )
        );
    }
}

