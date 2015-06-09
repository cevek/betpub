import BaseModel from './BaseModel';
export default class Leage extends BaseModel {
    name: string;
    types: Array<EventType>;
    positions: Array<PlayerPosition>;

}