import BaseModel from './BaseModel';
export default class Leage extends BaseModel {
    /** @type {number} */
    name;
    /** @type {EventType[]} */
    types;
    /** @type {PlayerPosition[]} */
    positions;

}