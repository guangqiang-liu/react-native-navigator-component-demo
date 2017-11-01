/**
 * Created by guangqiang on 2017/8/27.
 */
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import NavigationBar from './navigationBar'
import {commonStyle} from '../utils/commonStyle'

class BaseComponent extends Component {

  constructor(props) {
    super(props)
    // 获取导航栏属性
    this.navigationBarProps = this.navigationBarProps.bind(this)
    // 绘制内容
    this._render = this._render.bind(this)
    // 导航左按钮点击事件
    this.onLeftPress = this.onLeftPress.bind(this)
    // 导航右按钮点击事件
    this.onRightPress = this.onRightPress.bind(this)
  }

  /**
   * 此函数主要用来提供给子类向父类传递导航属性
   * @returns {null}
   */
  navigationBarProps() {
    return null
  }

  /**
   * 父类函数，提供给子类调用，测试当子类调用父类的函数时，是否可以做到hook功能
   * @param data
   */
  superFunc(data) {
    alert(`在子类中调用了父类的函数，${data}`)
  }

  /**
   * 导航返回左按钮点击事件，子类可以overload，当子类没有重载，默认pop当前vc
   */
  onLeftPress() {
    // 默认的pop事件
  }

  /**
   * 导航右按钮点击事件，需要子类overload
   */
  onRightPress() {
    return null
  }

  /**
   * 绘制导航栏
   * 不需要子类overload
   * @returns {XML}
   */
  renderNavigationBar() {
    // 父类调用子类中的函数，获取数据
    // 这里的this指针指向的是调用父类的子类
    let navigationBarProps = this.navigationBarProps()
    Object.assign(navigationBarProps, this.props)
    return (
      <NavigationBar
        navigationBarProps={navigationBarProps}
        onLeftPress={this.onLeftPress}
        onRightPress={this.onRightPress}
      />
    )
  }

  /**
   * 绘制UI组件主体View，子类必须overload
   * @returns {null}
   */
  _render() {
    return null
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderNavigationBar()}
        {this._render()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.white
  }
})

export {BaseComponent}