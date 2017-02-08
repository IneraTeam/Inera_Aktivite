import { IClient, IProject, IUser } from './interfaces';

export const dummyClient: IClient = {
  $key: null,
  abbrv: null,
  name: null,
  p_name: null,
  p_tel: null,
  p_mail: null,
  createdAt: null
};

export const dummyUser: IUser = {
  $key: null,
  fullname: null,
  team: null,
  phone: null,
  username: null,
  manager: null,
  createdAt: null,
  editedAt: null,
  birthAt: null,
  enterAt: null,
  actv: null,
  mail: null
};


export const dummyProject: IProject = {
  $key: null,
  name: null,
  ptype: null,
  pmanager: null,
  client: dummyClient,
  user: dummyUser,
  btype: null,
  expense: null
};