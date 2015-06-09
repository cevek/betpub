import BaseModel from './BaseModel';
export default class Team extends BaseModel {
    players: Array<Player>;
}