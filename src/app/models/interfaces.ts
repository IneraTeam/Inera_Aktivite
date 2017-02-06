export interface IClient {
  abbrv: string;
  name: string;
  address?: string;
  p_name: string;
  p_tel: string;
  p_mail: string;
  createdAt;
}

export interface QueryParams {
  title: string;
  path: string;
}
