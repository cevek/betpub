import {http} from '../http.js';
import {BaseModel} from './BaseModel';
import {BaseStore} from './BaseStore';
import {Contest} from './Contest';
import {Team} from './Team';
import {storage} from '../storage';

export class Game extends BaseModel {
    date;
    team1;
    team2;
    team1Score;
    team2Score;
    period;
    minute;
    contests;
    //back traverse
    eventType;
    live;

    isLive() {
        return this.live;
    }

    activePeriod() {
        return this.period;
    }

    activeMinute() {
        return this.minute;
    }

    static url = '/game/';

    static fetch(id) {
        return http.get(Game.url + id).then(gameJson=>
            Promise.all([
                Team.fetch(gameJson.team1Id),
                Team.fetch(gameJson.team2Id)
            ]).then(([team1, team2])=> {
                let game = new Game(gameJson);
                storage.teams.addAll([team1, team2]);
                game.team1 = team1;
                game.team2 = team2;
                return game;
            }));
    }

    constructor(json) {
        super();
        this.id = json.id;
        this.date = new Date(json.date);
        this.team1Score = json.team1Score;
        this.team2Score = json.team2Score;
        this.period = json.period;
        this.minute = json.minute;
        this.live = Boolean(json.live);
        this.eventType = storage.leagueEventTypes.getById(json.eventTypeId);
        this.team1 = storage.teams.getById(json.team1Id);
        this.team2 = storage.teams.getById(json.team2Id);
        this.contests = json.contests.map(contestJson => new Contest(contestJson));
        this.contests.forEach(contest => contest.game = this);
    }

    isDay(day, isLive) {
        let fullYear = day.getFullYear();
        let month = day.getMonth();
        let date2 = day.getDate();
        let from = new Date(fullYear, month, date2);
        let to = new Date(fullYear, month, date2 + 1);
        return from <= this.date && this.date <= to && this.live === isLive;
    }
}

export class GameStore extends BaseStore {}

