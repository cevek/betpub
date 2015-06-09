let BaseModel = require('./BaseModel');
export default class Account extends BaseModel {
    name: string;
    email: string;
    balance: number;
    history: Array<Contest>;
}