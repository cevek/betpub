import BaseModel from './BaseModel';
export default class EventType extends BaseModel {
    name: string;
    games: Array<Game>;
    salary: number;
    leage: Leage;
}