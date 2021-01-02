export interface AuthResponse {
  errCode?: number;
  errStr?: string;
  openId?: string;
  transaction?: string;
  code?: string;
  url?: string;
  lang?: string;
  country?: string;
}
export interface MessageToWXResponse {
  errCode?: number;
  errStr?: string;
  openId?: string;
  transaction?: string;
}
export interface PayResponse {
  errCode?: number;
  errStr?: string;
  openId?: string;
  transaction?: string;
  returnKey?: string;
}
export interface LaunchWXMiniProgramResponse {
  errCode?: number;
  errStr?: string;
  openId?: string;
  transaction?: string;
  extraData?: string;
  extMsg?: string;
}
export interface CommandShowMessageFromWX {
  openId?: string;
  transaction?: string;
  lang?: string;
  country?: string;
}
export type Listener = (...args: any[]) => any;
