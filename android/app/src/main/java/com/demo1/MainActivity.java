package com.demo1;

// 导入Bundle类，该类的格式为key-value，用于实现数据的传递
import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  // Activity被创建时调用，savedInstanceState可以保存状态数据
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "demo1";
  }
}
