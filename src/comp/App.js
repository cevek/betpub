import '../Data';
import '../Utils';
import Router from 'react-router';
let RouteHandler = Router.RouteHandler;
import {SideBar} from './SideBar';
import {v, React} from './../lib/V';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return v('div',
            v(SideBar),
            v(RouteHandler)
        );
    }
}

