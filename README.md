# 前言
> RN开发页面时，基本上每一个页面我们都需要有导航栏，但是ReactNative又不像iOS那样，只要控制器包裹一个导航控制器，后面的页面就有了默认的导航栏样式，RN中的导航栏需要自己实现。当几个页面还好，我们复制粘贴也还行，但是当整个项目工程几十个页面时，每次创建导航栏我们都去复制粘贴这个也未免太low了。这时我们自定义一个高度可扩展的导航栏就势在必行了。此导航栏组件也是作者在之前开源的RN项目[OneM](https://github.com/guangqiang-liu/OneM)中抽离出来的独立的组件。

# 预览效果
![navBar](http://ovyjkveav.bkt.clouddn.com/17-11-6/12304607.jpg)

# 组件支持哪些自定义配置
* 支持自定义导航栏的样式，任意修改背景颜色，高度等
* 导航栏左按钮支持自定义icon图标，支持任意修改图标颜色和尺寸，支持自定义点击事件
* 导航栏左按钮支持自定义文本，支持任意修改文本颜色和字号，支持自定义点击事件
* 导航栏右按钮支持自定义icon图标，支持任意修改图标颜色和尺寸，支持自定义点击事件
* 导航栏右按钮支持自定义文本，支持任意修改文本颜色和字号，支持自定义点击事件
* 导航栏标题支持正标题和副标题显示等等

# 全部的可配置选项
```
const navBarConfig = {
  navigationBarProps: PropTypes.Object,
  onLeftPress: PropTypes.fun,
  onRightPress: PropTypes.fun,
  hiddenNav: PropTypes.bool,
  navBarStyle: PropTypes.Object,
  navContentStyle: PropTypes.Object,
  hiddenLeftItem: PropTypes.bool,
  leftIcon: PropTypes.Object,
  leftTitle: PropTypes.string,
  leftTitleStyle: PropTypes.Object,
  leftItemStyle: PropTypes.Object,
  titleStyle: PropTypes.Object,
  title: PropTypes.string,
  subTitleStyle: PropTypes.Object,
  subTitle: PropTypes.string,
  hiddenRightItem: PropTypes.bool,
  rightIcon: PropTypes.Object,
  rightTitle: PropTypes.string,
  rightTitleStyle: PropTypes.Object,
  rightItemStyle: PropTypes.Object
}
```

# 如何使用
* 使用自定义导航栏的页面都统一继承自`BaseComponent`基类组件
* 重写`navigationBarProps`函数，配置导航栏内容
* 重写左右按钮的点击事件`onLeftPress() {}`，`onRightPress() {}`
* 重写render函数，注意是带下划线的render函数: `_render() {}`

# 示例Demo代码
```
import React, { Component } from 'react'
import {BaseComponent} from './baseComponent/baseComponent'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends BaseComponent {

  navigationBarProps() {
    return {
      title: 'APP',
      subTitle: 'subTitle',
      rightIcon: {
        name: 'rocket',
        size: 20,
        color: '#333'
      }
    }
  }

  onLeftPress() {
    alert('点击了左边的按钮')
  }
  onRightPress() {
    alert('点击了右边的按钮')
  }

  _render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
```

# 简书详解地址
**[http://www.jianshu.com/p/6f3a11d852f4](http://www.jianshu.com/p/6f3a11d852f4)**

# 总结
> 当我们封装了一套高度可定制的导航栏组件后，我们会发现原来开发一个页面是如此之快，这也大大的提高了代码的重用率，同时也便于后期统一的修改导航栏样式，简直是一举多得。好了，如果同学们感觉文章对你有帮助请给个 **`star`** 给个 **`关注`** 谢谢。