import { IClient } from './interfaces';
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
    constructor(
        name: string, abbrv: string,
        p_name: string, p_tel: number, p_mail: string,
        address?: string
    ) {
        this.abbrv = abbrv;
        this.name = name;
        this.p_mail = p_mail;
        this.p_tel = p_tel;
        this.p_name = p_name;
        this.address = address;
    }
}