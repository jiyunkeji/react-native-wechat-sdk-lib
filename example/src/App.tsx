import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import WeChatSdkManager, {
  AuthResponse,
  PayResponse,
} from 'react-native-wechat-sdk-lib';

export default class App extends React.Component {
  public static wechatAppId: string = 'xx';
  public static wechatAppSecret: string = 'xx';

  async componentDidMount() {
    console.log('WeChatSdkManager init');
    try {
      let isInit: boolean = await WeChatSdkManager.instance().init(
        App.wechatAppId
      );
      console.log(isInit ? '初始化成功' : '初始化失败');

      let registerApp: boolean = await WeChatSdkManager.instance().registerApp(
        App.wechatAppId,
        'https://renmei.jiyunkeji.com.cn/app/'
      );
      console.log(registerApp ? 'registerApp成功' : 'registerApp失败');

      let isWeChatInstall: boolean = await WeChatSdkManager.instance().isWXAppInstalled();
      console.log(isWeChatInstall ? '已安装微信' : '未安装微信');

      WeChatSdkManager.instance().addListener(
        'onSendAuthResponse',
        (info: AuthResponse) => {
          console.log(`onSendAuthResponse:   ${JSON.stringify(info)}`);
        }
      );
      WeChatSdkManager.instance().addListener(
        'onPayResponse',
        (info: PayResponse) => {
          console.log(`onPayResponse:   ${JSON.stringify(info)}`);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  componentWillUnmount() {
    WeChatSdkManager.instance().destroy();
    console.log('WeChatSdkManager destroy');
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={async () => {
            try {
              let s = await WeChatSdkManager.instance().sendAuthRequest(
                'snsapi_userinfo'
              );
              console.log(`sendAuthRequest:${JSON.stringify(s)}`);
            } catch (error) {
              console.log(error);
            }
          }}
          title="微信授权登录"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
