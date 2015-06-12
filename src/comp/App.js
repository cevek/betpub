import '../Data';
import '../Utils';
import {SideBar} from './SideBar';
import {MainForm} from './MainForm';
import {v, React} from './../lib/V';
import {Router, Route} from './Router';

class NotFound extends React.Component {
	render(){
		return v('div', 'Not Found');
	}
}

export class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return v('div',
			v(SideBar),
			v(Router,
				v(Route, {path: '/', handler: MainForm}),
				v(Route, {path: '/:id/', handler: MainForm}),
				v(Route, {path: '*', handler: NotFound})
			)
		);
	}
}

