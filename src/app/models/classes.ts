import { IClient } from './interfaces';

export class Client implements IClient {
    abbrv: string;
    name: string;
    address?: string;
    p_name: string;
    p_tel: string;
    p_mail: string;
    createdAt = firebase.database['ServerValue']['TIMESTAMP'];
    constructor(
        name: string, abbrv: string,
        p_name: string, p_tel: string, p_mail: string,
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