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

export interface IProject {
  $key ?: string;
  name: string;
  ptype: string;
  pmanager: string;
  client: IClient;
  user: IUser;
  btype: number;
  expense: boolean;
}

export interface IUser {
  $key ?: string;
  fullname: string;
  team: string;
  phone: number;
  phone_abbrv: number;
  username: string;
  manager?: IUser;
  createdAt: number;
}

export interface QueryParams {
  title: string;
  path: string;
}
