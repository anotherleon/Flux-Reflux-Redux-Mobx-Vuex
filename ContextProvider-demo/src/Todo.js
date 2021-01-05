import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
// import useStore from './ProxyStore/useStore';
import {getState} from './StateProvider';
import TodoStore from './TodoStore';

const Todo = () => {
  /**
   * 获取 TodoStore 的几种方式：
   * const { TodoStore } = useStore(); // 更符合 React Hooks 的理念
   * const { TodoStore } = store;
   * const TodoStore = todoStore.useStore();
   */

  // 状态管理第二种方式: 利用 Proxy 劫持 state 数据

  //   const {TodoStore: todoStore} = useStore();
  const todoStore = TodoStore.useStore();
  console.log('render toto list ---------', todoStore);

  const {todos = [], addTodo, updateTodo, delayIncId, loading} = todoStore;

  const handleClick = (item) => {
    if (item.status === 'DOING') {
      updateTodo(item.id, 'COMPLETED');
    } else if (item.status === 'COMPLETED') {
      updateTodo(item.id, 'DOING');
    }
  };

  const [state, dispatch] = getState();
  const {theme} = state;

  return (
    <View>
      <Button
        title="Change Theme"
        onPress={() => {
          dispatch({
            type: 'changeTheme',
            theme: theme === 'dark' ? 'ligth' : 'dark',
          });
        }}
      />

      <View>
        {todos.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => handleClick(item)} key={item.id}>
              <Text style={{padding: 10, backgroundColor: '#eee'}}>
                {item.id + ' ' + item.content + ' : ' + item.status}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Button
        type="button"
        onPress={() => {
          addTodo('Test content');
        }}
        title="Add todo"
      />

      <Button
        type="button"
        onPress={() => delayIncId()}
        title={loading ? 'Loading...' : 'Async Add'}
      />
    </View>
  );
};

export default Todo;
