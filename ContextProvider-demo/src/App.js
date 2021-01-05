import React from 'react';
import {View, Button} from 'react-native';
import {SafeAreaView, ScrollView} from 'react-native';
import Todo from './Todo';
import Counter from './Counter';
import {StateProvider, getState} from './StateProvider';
import {reducer, initialState} from './AppStore';

// import TodoStore from './TodoStore';
import appStore from './AppStore';

const App = () => {
  // 状态管理第一种方式： 全局共享的 Context
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Content />
    </StateProvider>
  );
};

const Content = () => {
  const [state, dispatch] = getState();
  const {theme} = state;
  //   const todoStore = TodoStore.useStore();
  const {changeTheme} = appStore;
  console.log('render app  ---------', theme);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: '100%',
          backgroundColor: theme === 'dark' ? '#222' : '#fff',
        }}>
        <Button
          title="Change Theme Async"
          onPress={() => {
            changeTheme(dispatch, {theme: theme === 'dark' ? 'ligth' : 'dark'});
          }}
        />
        <Todo />

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{height: 8, backgroundColor: '#eee'}}
        />
        <Counter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
