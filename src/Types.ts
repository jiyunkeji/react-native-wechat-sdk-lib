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
export class PayReq {
  appId?: string;
  partnerId?: string;
  prepayId?: string;
  nonceStr?: string;
  timeStamp?: string;
  package?: string;
  sign?: string;
  extData?: string;
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
export enum ErrCode {
  ERR_OK = 0,
  ERR_COMM = -1,
  ERR_USER_CANCEL = -2,
  ERR_SENT_FAILED = -3,
  ERR_AUTH_DENIED = -4,
  ERR_UNSUPPORT = -5,
  ERR_BAN = -6,
}
export type Listener = (...args: any[]) => any;
