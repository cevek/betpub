import BaseModel from './BaseModel';
export default class Player extends BaseModel {
    name: string;
    points: number;
    position: PlayerPosition;
    FPPG: number;
    salary: number;
    team: Team;
}