import { IClient } from './interfaces';
export interface IClient {
  $key?: string;
  abbrv: string;
  name: string;
  address?: string;
  p_name: string;
  p_tel: number;
  p_mail: string;
  createdAt;
}

export interface QueryParams {
  title: string;
  path: string;
}
