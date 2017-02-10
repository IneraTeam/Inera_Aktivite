import { IClient, IUser, IProject } from './interfaces';
import * as firebase from 'firebase';

export class Client implements IClient {
    $key?: string;
    abbrv: string;
    name: string;
    address?: string;
    p_name: string;
    p_tel: number;
    p_mail: string;
    createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    constructor(val: any) {
        this.abbrv = val.abbrv;
        this.name = val.name;
        this.p_mail = val.pmail;
        this.p_tel = val.pphone;
        this.p_name = val.pname;
        this.address = val.address;
    }
}

export class User implements IUser {
    $key?: string;
    username: string;
    fullname: string;
    team: string;
    phone: number;
    manager: string;
    editedAt?: number;
    enterAt?: number;
    role: string;
    birthAt?: number;
    mail: string;
    actv: boolean;
    createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    constructor(val: any) {
        this.username = val.username;
        this.fullname = val.fullname;
        this.mail = val.usermail;
        this.phone = val.userphone;
        this.team = val.team;
        this.manager = val.manager;
        this.role = 'user';
    }
}

export class Project implements IProject {
    $key?: string;
    name: string;
    ptype: string;
    pmanager: string;
    client: Object;
    user: Object;
    btype: number;
    expense: boolean;
    createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    constructor(val: any) {
        this.name = val.name;
        this.ptype = val.ptype;
        this.pmanager = val.pmanager;
        this.client = val.client; // ! OBJE
        this.user = val.user; // ! OBJE
        this.btype = val.btype;
        this.expense = val.expense;
    }
}