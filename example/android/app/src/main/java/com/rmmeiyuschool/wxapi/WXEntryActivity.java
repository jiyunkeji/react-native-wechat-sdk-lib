package com.rmmeiyuschool.wxapi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.reactnativewechatsdk.WeChatSdkModule;


public class WXEntryActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatSdkModule.handleIntent(getIntent());
        finish();
    }
}
