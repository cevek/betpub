import '../Data';
import '../Utils';
import {v, React} from './../lib/V';
import {Router, Route} from './Router';

import {MainForm} from './MainForm';
import {GamePage} from './GamePage';
import {SideBar} from './SideBar';

class NotFound extends React.Component {
    render() {
        return v('div', 'Not Found');
    }
}

export class App extends React.Component {
    render() {
        return v('div',
            v(SideBar),
            v(Router,
                v(Route, {path: '/', handler: MainForm}),
                v(Route, {path: '/game/:id/', handler: GamePage}),
                v(Route, {path: '*', handler: NotFound})
            )
        );
    }
}

