import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  List,
} from 'semantic-ui-react';

function Todos(props) {
  return (
    <List>
      {props.todo.map(todo => (
        <List.Item
          key={todo.id}
        >
          {todo.text}
        </List.Item>))}
    </List>
  );
}

Todos.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(Todos);
