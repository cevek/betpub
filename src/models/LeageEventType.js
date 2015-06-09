import BaseModel from './BaseModel';
export default class LeageEventType extends BaseModel {
    name: string;
    games: Array<Game>;
    salary: number;
    leage: Leage;
}