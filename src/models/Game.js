import {BaseModel} from './BaseModel';
import {BaseStore} from './BaseStore';
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

    constructor(json) {
        super();
        this.id = json.id;
        this.date = new Date(json.date);
        this.team1Score = json.team1Score;
        this.team2Score = json.team2Score;
        this.period = json.period;
        this.minute = json.minute;
        this.live = Boolean(json.live);
        this.team1 = storage.teams.getById(json.team1Id);
        this.team2 = storage.teams.getById(json.team2Id);
        this.contests = json.contests.map(contestJson => storage.contests.getById(contestJson.id));
        this.json = json;
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

