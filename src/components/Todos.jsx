import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  List,
} from 'semantic-ui-react';

import Todo from './Todo.jsx';

function Todos(props) {
  return (
    <Container text textAlign='left' style={{ marginTop: '1em' }}>
      <List divided verticalAlign='middle'>
        {[...props.todo.entries()].map(todo => (
          <Todo
            key={todo[0]}
            text={todo[1].text}
          />))}
      </List>
    </Container>
  );
}

Todos.propTypes = {
  todo: PropTypes.shape({
    entries: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    todo: state.get('todo'),
  };
}

export default connect(mapStateToProps)(Todos);
