import BaseModel from './BaseModel';
export default class Game extends BaseModel {
    date: Date;
    eventType: EventType;
    team1: Team;
    team2: Team;
    team1Score: number;
    team2Score: number;
    periods: number;
    activePeriod: number;
    contests: Array<Contest>;
}