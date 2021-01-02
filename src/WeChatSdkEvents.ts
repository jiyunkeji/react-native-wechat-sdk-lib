import type {
  AuthResponse,
  CommandShowMessageFromWX,
  LaunchWXMiniProgramResponse,
  MessageToWXResponse,
  PayResponse,
} from './Types';

export type OnSendAuthResponse = (info: AuthResponse) => void;
export type OnSendMessageToWXResponse = (info: MessageToWXResponse) => void;
export type OnPayResponse = (info: PayResponse) => void;
export type OnWXLaunchMiniProgramResponse = (
  info: LaunchWXMiniProgramResponse
) => void;
export type OnCommandShowMessageFromWX = (
  info: CommandShowMessageFromWX
) => void;

export interface WeChatSdkEvents {
  onSendAuthResponse: OnSendAuthResponse;
  onSendMessageToWXResponse: OnSendMessageToWXResponse;
  onPayResponse: OnPayResponse;
  onWXLaunchMiniProgramResponse: OnWXLaunchMiniProgramResponse;
  onCommandShowMessageFromWX: OnCommandShowMessageFromWX;
}
