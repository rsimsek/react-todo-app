import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoTitle from './Components/TodoTitle';
import TodoList from './Components/TodoList';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders todo title', () => {
  const Title = 'Test Title';
  const component = renderer.create(
    <TodoTitle title={Title}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders list of todos', () => {
  const todos = [{id : 1, value: 'Learn React', completed: true}, {id : 2, value: 'Learn Redux', completed: false}];
  const component = renderer.create(
    <TodoList todos={todos} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})