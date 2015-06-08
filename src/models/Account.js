import BaseModel from './BaseModel';
export default class Account extends BaseModel {
    /** @type {string} */
    name;
    /** @type {string} */
    email;
    /** @type {number} */
    balance;
    /** @type {Contest[]} */
    history;
}