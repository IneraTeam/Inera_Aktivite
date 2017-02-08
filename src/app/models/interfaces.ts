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
  username: string;
  mail: string;
  manager?: string;
  createdAt;
  editedAt?: number;
  enterAt?: number;
  birthAt?: number;
  actv: boolean;
}

export interface QueryParams {
  title: string;
  path: string;
}
