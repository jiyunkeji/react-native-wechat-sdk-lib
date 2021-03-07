import { NativeEventEmitter, NativeModules } from 'react-native';
import type {
  AuthResponse,
  Listener,
  PayReq,
  ShareWebpageMetadata,
} from './Types';
import type { WeChatSdkEvents } from './WeChatSdkEvents';

const { WeChatSdkModule } = NativeModules;
// const Prefix = WeChatSdkModule.WeChatSdk;

const WeChatSdkModuleEvent = new NativeEventEmitter(WeChatSdkModule);

let weChatSdkManager: WeChatSdkManager | undefined;

export default class WeChatSdkManager {
  private _listeners = new Map<string, Listener>();

  static instance(): WeChatSdkManager {
    if (weChatSdkManager == null) {
      weChatSdkManager = new WeChatSdkManager();
    }
    return weChatSdkManager;
  }
  init(appid: string): Promise<boolean> {
    return WeChatSdkModule.init(appid);
  }

  registerApp(appId: string, universalLink?: string): Promise<boolean> {
    return WeChatSdkModule.registerApp(appId, universalLink);
  }

  isWXAppInstalled(): Promise<boolean> {
    return WeChatSdkModule.isWXAppInstalled();
  }
  isWXAppSupportApi(): Promise<boolean> {
    return WeChatSdkModule.isWXAppSupportApi();
  }
  getApiVersion(): Promise<string> {
    return WeChatSdkModule.getApiVersion();
  }
  openWXApp(): Promise<boolean> {
    return WeChatSdkModule.openWXApp();
  }
  sendAuthRequest(
    scope: string | string[],
    state?: string
  ): Promise<AuthResponse> {
    return WeChatSdkModule.sendAuthRequest(scope, state);
  }
  pay(payReq: PayReq): Promise<boolean> {
    return WeChatSdkModule.pay(payReq);
  }
  ShareWebpage(shareWebpage: ShareWebpageMetadata): Promise<boolean> {
    return WeChatSdkModule.shareWebpage(shareWebpage);
  }

  destroy() {
    this.removeAllListener();
    weChatSdkManager = undefined;
  }
  addListener<EventType extends keyof WeChatSdkEvents>(
    event: EventType,
    listener: WeChatSdkEvents[EventType]
  ) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, listener);
      WeChatSdkModuleEvent.addListener(event, listener);
    }
  }
  removeListener<EventType extends keyof WeChatSdkEvents>(
    event: EventType,
    listener: WeChatSdkEvents[EventType]
  ) {
    if (this._listeners.has(event)) {
      this._listeners.delete(event);
      WeChatSdkModuleEvent.removeListener(event, listener);
    }
  }
  removeAllListener() {
    this._listeners.forEach((value, key) => {
      this._listeners.delete(key);
      WeChatSdkModuleEvent.removeListener(key, value);
    });
    this._listeners.clear();
  }
}
