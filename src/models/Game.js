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

    inFilter(from:Date, to:Date, isLive:boolean, league:League, eventType:LeagueEventType) {
        let dateEqual = from <= this.date && this.date <= to;
        let eventTypeEqual = !eventType || eventType === this.eventType;
        let leagueEqual = !league || league === this.eventType.league;
        return dateEqual && eventTypeEqual && leagueEqual && this.isLive() === isLive;
    }
}

export class GameStore extends BaseStore {
    getGamesByDay(day:Date, isLive:boolean, league:League, eventType:LeagueEventType):Array<Game> {
        var from = new Date(day.getFullYear(), day.getMonth(), day.getDate());
        var to = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
        var ff = this.data.filter(game => game.inFilter(from, to, isLive, league, eventType));
        return ff;
    }
}
export let gameStore = new GameStore();

