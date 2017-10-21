import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  List,
} from 'semantic-ui-react';

function Todos(props) {
  return (
    <List>
      {props.todo.map((todo, key) => {
        return (
          <List.Item
            key={key}
          >
            {todo}
          </List.Item>
        );
      })}
    </List>
  );
}

Todos.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(Todos);
