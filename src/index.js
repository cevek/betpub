import {Router, Route} from './lib/Router.js';

/*
 import Router from 'react-router';
 let Route = Router.Route;
 */

import {App} from './comp/App';
import {GamePage} from './comp/GamePage';
import {MainForm} from './comp/MainForm';
import {v, Component, render} from './lib/V';
import {http} from './http';


import {storage} from './storage';
import {PlayerPosition} from './models/PlayerPosition';
import {Game} from './models/Game';
import {Team} from './models/Team';
import {Contest} from './models/Contest';
import {Player} from './models/Player';
import {ContestType} from './models/ContestType';
import {League} from './models/League';
import {LeagueEventType} from './models/LeagueEventType';


storage.ready = Promise.all([
    http.get('/games'),
    http.get('/teams'),
    http.get('/events'),
    http.get('/leagues'),
    http.get('/player-positions'),
    http.get('/contest-types')
]).then(([games, teams, events, leagues, positions, contestTypes])=> {
    storage.contestTypes.addAll(contestTypes.map(item=> new ContestType(item)));
    storage.playerPositions.addAll(positions.map(item=> new PlayerPosition(item)));
    storage.teams.addAll(teams.map(item=> new Team(item)));
    storage.leagues.addAll(leagues.map(item=> new League(item)));
    storage.leagueEventTypes.addAll(events.map(item=> new LeagueEventType(item)));
    storage.games.addAll(games.map(item=> new Game(item)));
});


require('./main.css');


/*
 let routes =
 v(Route, {handler: App, path: '/'},
 v(Route, {path: '/', handler: MainForm}),
 v(Route, {path: '/game/:id', handler: GamePage})
 );
 */

let container = document.createElement('div');
document.body.appendChild(container);

render(v(App), container);


/*
 Router.run(routes, function (Handler) {
 React.render(v(Handler), container);
 });*/

