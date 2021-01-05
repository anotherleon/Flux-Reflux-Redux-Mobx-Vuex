import React from 'react';
import {View} from 'react-native';
import CounterButtons from './CounterButtons';
import CounterNumber from './CounterNumber';
import {StateProvider} from './CounterStore';

// 状态管理第三种方式: 独立的 Context
function Counter() {
  return (
    <StateProvider>
      <View>
        <CounterButtons />
        <CounterNumber />
      </View>
    </StateProvider>
  );
}

export default Counter;
