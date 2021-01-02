#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import "WXApi.h"

// define share type constants
#define OnCommandShowMessageFromWX @"onCommandShowMessageFromWX"
#define OnSendAuthResponse @"onSendAuthResponse"
#define OnSendMessageToWXResponse @"onSendMessageToWXResponse"
#define OnPayResponse @"onPayResponse"
#define OnWXLaunchMiniProgramResponse @"onWXLaunchMiniProgramResponse"

@interface WechatSdk : RCTEventEmitter <RCTBridgeModule, WXApiDelegate>
@property(copy,nonatomic)NSString *appId;
@end
