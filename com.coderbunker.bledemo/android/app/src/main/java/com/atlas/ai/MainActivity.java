package com.atlas.ai;

import android.os.Bundle;

import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.atlas.ai.generated.ExponentBuildConstants;
import host.exp.expoview.ExponentActivity;

public class MainActivity extends ExponentActivity {

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@mattermoran/atlas-ai";
  }

  @Override
  public String developmentUrl() {
    return "exp8c96291e9d6044ccad713f0fc1de6b0a://192.168.1.23:19004";
  }

  @Override
  public List<String> sdkVersions() {
    return new ArrayList<>(Arrays.asList("21.0.0"));
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }
}
