let {teamStore} = require('./Team');
let {Contest} = require('./Contest');
let BaseModel = require('./BaseModel');
let BaseStore = require('./BaseStore');

export class Game extends BaseModel {
    date:Date;
    team1:Team;
    team2:Team;
    team1Score:number;
    team2Score:number;
    period:number;
    minute:number;
    contests:Array<Contest> = [];
    //back traverse
    eventType:LeagueEventType;
    live:boolean;

    isLive() {
        return this.live;
    }

    activePeriod():number {
        return this.period;
    }

    activeMinute():number {
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
        this.team1 = teamStore.getById(json.team1Id);
        this.team2 = teamStore.getById(json.team2Id);
        this.contests = json.contests.map(contestId => contestStore.getById(contestId));
    }

    isDay(day:Date, isLive:boolean) {
        var fullYear = day.getFullYear();
        var month = day.getMonth();
        var date2 = day.getDate();
        var from = new Date(fullYear, month, date2);
        var to = new Date(fullYear, month, date2 + 1);
        return from <= this.date && this.date <= to && this.live === isLive;
    }
}

export class GameStore extends BaseStore {

}
export let gameStore = new GameStore();

